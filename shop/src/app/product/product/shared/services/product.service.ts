import { Injectable, OnInit } from '@angular/core';

import { PRODUCTS } from '../mocks/mock-products';
import { Product } from '../models/product.model';
import { LocalStorageService } from '../../../../shared/services/local-storage.service';

@Injectable()
export class ProductService {
  private products: Product[] = [];
  private productsStoreName = 'products';

  constructor(private store: LocalStorageService) {
    debugger;
    const savedProducts = this.store.getItem(this.productsStoreName) as Product[];
    this.products = savedProducts ? savedProducts : PRODUCTS;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    const product = this.getProducts().find(x => x.id === id);
    return Object.assign({}, product);
}

  getDefaultProduct(): Product {
    return new Product(this.getIdPointer(), '', 0, false, 0, new Date());
  }

  add(item: Product): void {
    debugger;
    const existingProduct = this.products.find(x => x.id === item.id);
    if (existingProduct) {
      Object.assign(existingProduct, item);
    } else {
      const newItem: Product = { ...item };
      this.products.push(newItem);
    }
    this.store.setItem(this.productsStoreName, this.products);
  }

  isProductValid(product: Product): boolean {
    return product.id && product.name && product.price > 0;
  }

  private getIdPointer(): number {
    const productIds = this.getProducts().map(x => x.id);
    return Math.max(...productIds) + 1;
  }
}
