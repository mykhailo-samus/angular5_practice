import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product/product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { ProductComponent } from './product/product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: 'add',
        component: ProductEditComponent
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent
      },
      {
        path: 'details/:id',
        component: ProductDetailsComponent
      },
      {
        path: '',
        component: ProductListComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'products', component: ManageProductsComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

