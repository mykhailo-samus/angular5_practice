import { Product } from '../models/product.model';
import { Category } from '../enums/category.enum';
import { ProductInterface } from "../interfaces/product.interface";

export const PRODUCTS: Product[] = [
  new Product(1, 'Equivalent1', 100, true, 10, Category.Equivalents),
  new Product(2, 'Equivalent2', 200, true, 5, Category.Equivalents, 'Great equivalent'),
  new Product(3, 'Equivalent3', 300, true, 1, Category.Equivalents, 'Great equivalent')
];