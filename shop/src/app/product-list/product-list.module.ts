import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductListComponent } from './product-list.component';
import { ProductService } from '../product/shared/services/product.service';
import { CartService } from '../cart-list/shared/services/cart.service';
import { ProductModule } from "../product/product.module";

@NgModule({
  imports: [BrowserModule, ProductModule],
  declarations: [
    ProductListComponent
  ],
  providers: [ProductService, CartService],
  exports: [ProductListComponent]
})
export class ProductListModule {}