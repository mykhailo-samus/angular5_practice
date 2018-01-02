import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { CartItem } from '../cart-list.model';
import { Product } from '../../../../product/product/shared/models/product.model';


export class CartService {
  cart: CartItem[] = [];
  cartChange: Subject<CartItem[]> = new Subject<CartItem[]>();
  productCountAdjust: Subject<CartItem> = new Subject<CartItem>();
  sum: number;
  itemsQuantity: number;

  addToCart(product: Product, quantity: number = 1) {
    const item = this.cart.find(x => x.product.id === product.id);
    if (item === null || typeof item === 'undefined') {
      this.cart.push(new CartItem(product, quantity));
    } else {
      item.quantity = item.quantity + 1;
    }

    this.cartChange.next(this.cart);
  }

  removeFromCart(id: number) {
    const index = this.cart.findIndex(x => x.product.id === id);

    if (index !== -1) {
      const item = this.cart.find(x => x.product.id === id);
      this.productCountAdjust.next(item);

      this.cart.splice(index, 1);
      this.cartChange.next(this.cart);
    }
  }

  clearCart() {
    while (this.cart.length > 0) {
      const item = this.cart.pop();
      this.productCountAdjust.next(item);
    }
    this.cartChange.next(this.cart);
  }


  recalculateCartSum() {
    let sum = 0;
    this.cart.forEach((item) => {
      sum += item.product.price * item.quantity;
    });
    this.sum = sum;
  }

  getCartSum(): number {
    this.recalculateCartSum();
    return this.sum;
  }

  recalculateItemsQuantity() {
    let itemsQuantity = 0;
    this.cart.forEach((item) => {
      itemsQuantity += item.quantity;
    });

    this.itemsQuantity = itemsQuantity;
  }

  getItemsQuantity(): number {
    this.recalculateItemsQuantity();
    return this.itemsQuantity;
  }

  getCart(): CartItem[] {
    return this.cart;
  }
}
