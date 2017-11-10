import { Product } from '../models/product.model';
import { Category } from '../enums/category.enum';

export const PRODUCTS: Product[] = [
  {name: 'Equivalent1', description: 'Great equivalent', price: 100, category: Category.Equivalents, isAvailable: true},
  {name: 'Equivalent2', description: 'Great equivalent', price: 200, category: Category.Equivalents, isAvailable: true},
  {name: 'Equivalent3', description: 'Great equivalent', price: 300, category: Category.Equivalents, isAvailable: true},
];
