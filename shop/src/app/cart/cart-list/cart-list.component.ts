import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { CartService } from '../cart-list/shared/services/cart.service';
import { CartItem } from './shared/cart-list.model';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  private subscription: any;
  cartItems: CartItem[];
  showCart: boolean;
  sum: number;
  quantity: number;

  @ViewChild(CartItemComponent)
  private cartItemComponent: CartItemComponent;

  constructor(private cartService: CartService) { }

  onProductRemove(id) {
    this.cartService.removeFromCart(id);
  }

  onCartClear() {
    this.cartService.clearCart();
  }

  onIncreaseDiscount(bonus: number) {
    this.cartItemComponent.addDiscount(bonus);
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
    this.showCart = this.cartItems.length > 0;
    this.sum = this.cartService.getCartSum();
    this.quantity = this.cartService.getItemsQuantity();

    this.subscription = this.cartService.cartChange.subscribe((value) => {
      this.cartItems = value;
      this.showCart = this.cartItems.length > 0;
      this.sum = this.cartService.getCartSum();
      this.quantity = this.cartService.getItemsQuantity();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
