import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from "../cart-list/shared/cart-list.model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Output() productRemove: EventEmitter<number> = new EventEmitter<number>();
  discount:number;
  
  addDiscount(bonus: number) {
    this.discount += bonus;
  }

  constructor() {
     this.discount = 0;
   }
  ngOnInit() {
  }

}
