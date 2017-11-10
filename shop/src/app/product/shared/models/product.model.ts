import { Category } from '../enums/category.enum';

export class Product {
    name: string
	description: string
	price: number
	category: Category
	isAvailable: boolean
}