import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Product } from './shared/models/product.model';
import { Category } from './shared/enums/category.enum';
import { CartService } from "../cart-list/shared/services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() item: Product;
  @Output() productBuy: EventEmitter<Product> = new EventEmitter<Product>();
  private subscription: any;

  ngOnInit() {
    this.subscription = this.cartService.productCountAdjust.subscribe((item) => {
      if (this.item.id == item.product.id) {
        this.item.availableCount += item.quantity;
        if (this.item.availableCount > 0)
          this.item.isAvailable = true;
      }
    });
  }

  constructor(private cartService: CartService) { }

  onProductClick() {
    console.log('Clicked on item with id:' + this.item.id);
  }
}