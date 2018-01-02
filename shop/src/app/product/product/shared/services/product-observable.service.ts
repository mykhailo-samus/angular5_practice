import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from '../models/product.model';


@Injectable()
export class ProductObservableService {
    private productUrl = 'http://localhost:3000/products';

    constructor(
        private http: HttpClient
    ) { }

    getProducts(): Observable<Product[]> {
        const url = this.productUrl;
        return this.http.get(url)
            .map(this.handleData)
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<Product> {
        const url = `${this.productUrl}/${id}`;
        return this.http.get(url)
            .map(this.handleData)
            .catch(this.handleError);
    }

    updateProduct(product: Product): Observable<Product> {
        const url = `${this.productUrl}/${product.id}/`,
            body = JSON.stringify(product),
            options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };

        return this.http.put(url, body, options)
            .map(this.handleData)
            .catch(this.handleError);
    }

    createProduct(product: Product): Observable<Product> {
        const url = this.productUrl,
            body = JSON.stringify(product),
            options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };
        return this.http.post(url, body, options)
            .map(this.handleData)
            .catch(this.handleError);
    }

    deleteProduct(product: Product): Observable<Product> {
        const url = `${this.productUrl}/${product.id}`;

        return this.http.delete(url)
            .map(this.handleData)
            .catch(this.handleError);
    }

    getIdPointer(): number {
        let products = [];
        this.getProducts().map(x => products = x);
        const productIds = products.map(x => x.id);
        return Math.max(...productIds) + 1;
      }

    private handleData(response: HttpResponse<Product>) {
        const body = response;
        return body || {};
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage: string;

        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
        }

        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}

