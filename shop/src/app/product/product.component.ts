import { Component, OnInit } from '@angular/core';
 
import { Product } from './shared/models/product.model';
import { Category } from './shared/enums/category.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    name: string;
	description: string;
	price: number;
	category: Category;
	isAvailable: boolean;
    ingredients: Array<string>;
    equivalents: Array<string>;
 
  ngOnInit() {
    this.name = 'test name';
    this.description = 'test description';
    this.price = 100;
    this.category = Category.Equivalents;
    this.isAvailable = true;
    this.ingredients = [ 'water', 'sugar', 'soda', 'flour'];
    this.equivalents = [ '1', 'one', 'true'];
  }
}