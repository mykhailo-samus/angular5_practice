import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimingInterceptor } from './shared/services/interceptors.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    CartModule,
    AppRoutingModule,
    AdminModule,
    AuthenticationModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TimingInterceptor,
    multi: true,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
