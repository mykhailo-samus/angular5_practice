import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ProductPromiseService {
  private productUrl = 'http://localhost:3000/products';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productUrl)
      .toPromise()
      .then(response => <Product[]>response)
      .catch(this.handleError);
  }

  getProduct(id: number): Promise<Product> {
    return this.http.get(`${this.productUrl}/${id}`)
      .toPromise()
      .then(product => <Product>product)
      .catch(this.handleError);
  }

  updateProduct(product: Product): Promise<Product> {
    const url = `${this.productUrl}/${product.id}`,
      body = JSON.stringify(product),
      options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };

    return this.http.put(url, body, options)
      .toPromise()
      .then(response => <Product>response)
      .catch(this.handleError);
  }


  createTask(product: Product): Promise<Product> {
    const url = this.productUrl,
      body = JSON.stringify(product),
      options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };

    return this.http.post(url, body, options)
      .toPromise()
      .then(response => <Product>response)
      .catch(this.handleError);
  }

  deleteTask(product: Product): Promise<Product> {
    const url = `${this.productUrl}/${product.id}`;

    return this.http.delete(url)
      .toPromise()
      .then(response => <Product>response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

