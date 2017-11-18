import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CartService } from '../cart-list/shared/services/cart.service';
import { CartListComponent } from './cart-list.component';
import { CartItemModule } from "../cart-item/cart-item.module";

@NgModule({
  imports: [BrowserModule,
            CartItemModule],
  declarations: [
    CartListComponent
  ],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartListModule {}