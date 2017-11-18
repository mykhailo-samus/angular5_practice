import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductService } from './shared/services/product.service';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    ProductComponent
  ],
  providers: [ProductService],
  exports: [ProductComponent]
})
export class ProductModule {}