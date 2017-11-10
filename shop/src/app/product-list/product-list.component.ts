import { Component, OnInit } from '@angular/core';
 
import { ProductService } from '../product/shared/services/product.service';
import { CartService } from '../cart/shared/services/cart.service';
import { Product } from '../product/shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private _productService: ProductService, 
              private _cartService: CartService) {}
 
  ngOnInit() {
    this.products = this._productService.getProducts();
  }
  
  onProductBuy(product) {
    this._cartService.addToCart(product);
  }
}