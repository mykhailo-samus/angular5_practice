import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { ProductService } from '../product/shared/services/product.service';
import { Product } from '../product/shared/models/product.model';
import { ProductComponent } from "../product/product.component";
import { CartService } from "../../cart/cart-list/shared/services/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  products: Product[];

  @ViewChild('title')
  private title: ElementRef;

  constructor(private _productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this._productService.getProducts();
  }

  ngAfterViewInit() {
    this.title.nativeElement.textContent = 'List of products: (set from #title)';
  }

  onProductBuy(product) {
    if (product.availableCount > 0) {
      this.cartService.addToCart(product);
      product.availableCount = product.availableCount - 1;
    }

    if (product.availableCount === 0) {
      product.isAvailable = false;
    }
  }
}