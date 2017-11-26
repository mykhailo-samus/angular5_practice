import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CartModule } from "./cart/cart.module";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    CartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
