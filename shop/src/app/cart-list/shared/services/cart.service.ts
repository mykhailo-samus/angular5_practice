import { Injectable } from '@angular/core';

import { Product } from "../../../product/shared/models/product.model";
import { Subject } from "rxjs/Subject";
import { CartItem } from "../cart-list.model";

@Injectable()
export class CartService {
  cart: CartItem[] = [];

  addToCart(product: Product) {
    var item = this.cart.find(x => x.product.id == product.id);
    if (item == null) 
      this.cart.push(new CartItem (product, 1)); 
    else 
      item.quantity = item.quantity + 1;

      this.cartChange.next(this.cart);
  }

  removeFromCart(id: number) {
    const index = this.cart.findIndex(x => x.product.id == id);

    if (index !== -1) {
        var item = this.cart.find(x => x.product.id == id);
        this.productCountAdjust.next(item);

        this.cart.splice(index, 1);
        this.cartChange.next(this.cart);
    }
  }

  getCartSum(): number {
    var sum = 0;
    this.cart.forEach((item) => {
      sum += item.product.price * item.quantity;
    });
    return sum;
  }

  getItemsQuantity(): number {
    var itemsCount = 0;
    this.cart.forEach((item) => {
      itemsCount += item.quantity;
    });
    return itemsCount;
  }

  getCart(){
    return this.cart;
  }

   cartChange: Subject<CartItem[]> = new Subject<CartItem[]>();
   productCountAdjust: Subject<CartItem> = new Subject<CartItem>();
}