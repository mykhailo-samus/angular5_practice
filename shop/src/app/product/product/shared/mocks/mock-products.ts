import { Product } from '../models/product.model';
import { Category } from '../enums/category.enum';
import { ProductInterface } from '../interfaces/product.interface';

export const PRODUCTS: Product[] = [
  new Product(1, 'Smart Watches', 100, true, 10, new Date(2017, 10, 14), Category[Category.Watches]),
  new Product(2, 'Air Purifier', 200, true, 5, new Date(2017, 11, 24), Category[Category.Purifiers], 'Great equivalent'),
  new Product(3, 'Soft Ultrabook', 300, true, 1, new Date(2017, 9, 15), Category[Category.Notebooks], 'Great equivalent')
];