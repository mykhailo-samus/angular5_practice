import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartItemComponent } from './cart-item.component';
import { BackgroundDirective } from "./shared/directives/background.directive";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    CartItemComponent,
    BackgroundDirective
  ],
  exports: [CartItemComponent]
})
export class CartItemModule {}
