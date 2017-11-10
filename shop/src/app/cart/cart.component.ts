import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CartService } from '../cart/shared/services/cart.service';
import { Product } from '../product/shared/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
    _subscription: any;
  cartItems: Product[];
  showCart: boolean;

  constructor(private _cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this._cartService.getCart();
    this.showCart = this.cartItems.length > 0;
    
    this._subscription = this._cartService.cartChange.subscribe((value) => { 
      this.cartItems = value; 
      this.showCart = this.cartItems.length > 0;
  });
}

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}