import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product/shared/services/product.service';
import { CartService } from '../cart/cart-list/shared/services/cart.service';
import { ConstantService } from '../shared/services/constants.service';
import { appInfoToken } from '../shared/tokens/constants.token';
import { GeneratorService } from '../shared/services/generator.service';
import { generatorServiceFactory } from '../shared/providers/generator.service.provider';
import { ConfigOptionsService } from '../shared/services/config.service';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { СoloringDirective } from '../shared/directives/coloring-change.directive';
import { OrderByPipe } from '../cart/cart-item/shared/pipes/order-by.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const generatorLength = 5;

@NgModule({
  imports: [BrowserModule, RouterModule, FormsModule],
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    СoloringDirective,
    OrderByPipe
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
