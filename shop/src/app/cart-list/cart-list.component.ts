import { Component, OnInit, ViewChild } from '@angular/core';

import { CartService } from '../cart-list/shared/services/cart.service';
import { Product } from '../product/shared/models/product.model';
import { CartItem } from "./shared/cart-list.model";
import { CartItemComponent } from "../cart-item/cart-item.component";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  private subscription: any;
  cartItems: CartItem[];
  showCart: boolean;
  sum: number;

  @ViewChild(CartItemComponent)
  private cartItemComponent: CartItemComponent;

  constructor(private cartService: CartService) { }

  onProductRemove(id) {
    this.cartService.removeFromCart(id);
  }

  increaseDiscount(bonus: number) {
    this.cartItemComponent.addDiscount(bonus);
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
    this.showCart = this.cartItems.length > 0;

    this.subscription = this.cartService.cartChange.subscribe((value) => {
      this.cartItems = value;
      this.showCart = this.cartItems.length > 0;
      this.sum = this.cartService.getCartSum();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}