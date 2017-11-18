import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CartListModule } from './cart-list/cart-list.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { ProductListModule } from './product-list/product-list.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    CartListModule,
    CartItemModule,
    ProductListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
