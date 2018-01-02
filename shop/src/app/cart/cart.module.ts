import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartService } from './cart-list/shared/services/cart.service';
import { ProcessOrderComponent } from './process-order/process-order.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing.module';


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    CartListComponent,
    CartItemComponent,
    ProcessOrderComponent
  ],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartModule {}