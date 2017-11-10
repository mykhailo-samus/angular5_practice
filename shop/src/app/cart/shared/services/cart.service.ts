import { Injectable } from '@angular/core';

import { Product } from "../../../product/shared/models/product.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class CartService {
  cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
    this.cartChange.next(this.cart);
  }

  getCart(){
    return this.cart;
  }

   cartChange: Subject<Product[]> = new Subject<Product[]>();
}