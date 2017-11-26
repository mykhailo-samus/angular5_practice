import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CartListComponent } from "./cart-list/cart-list.component";
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CartService } from "./cart-list/shared/services/cart.service";


@NgModule({
  imports: [BrowserModule],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartModule {}