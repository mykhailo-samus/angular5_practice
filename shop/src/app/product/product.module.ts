import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductService } from "./product/shared/services/product.service";
import { CartService } from "../cart/cart-list/shared/services/cart.service";
import { ConstantService } from "../shared/services/constants.service";
import { appInfoToken } from "../shared/tokens/constants.token";
import { GeneratorService } from "../shared/services/generator.service";
import { generatorServiceFactory } from "../shared/providers/generator.service.provider";
import { ConfigOptionsService } from "../shared/services/config.service";
import { LocalStorageService } from "../shared/services/local-storage.service";
import { СoloringDirective } from "../shared/directives/coloring-change.directive";
import { OrderByPipe } from "../cart/cart-item/shared/pipes/order-by.pipe";

let generatorLength = 5;

@NgModule({
  imports: [BrowserModule],
  declarations: [
    ProductListComponent,
    ProductComponent,
    СoloringDirective,
    OrderByPipe,
  ],
  providers: [ProductService,
    CartService,
    { provide: appInfoToken, useValue: ConstantService.getAppInfo() },
    { provide: GeneratorService, useFactory: () => generatorServiceFactory(generatorLength) },
    LocalStorageService,
    ConfigOptionsService
  ],
  exports: [ProductListComponent, ProductComponent]
})
export class ProductModule { }