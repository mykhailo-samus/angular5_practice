import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductService } from "./product/shared/services/product.service";
import { CartService } from "../cart/cart-list/shared/services/cart.service";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  providers: [ProductService, CartService],
  exports: [ProductListComponent, ProductComponent]
})
export class ProductModule {}