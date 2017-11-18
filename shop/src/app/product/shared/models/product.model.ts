import { Category } from '../enums/category.enum';
import { ProductInterface } from '../interfaces/product.interface';

export class Product implements ProductInterface {
	 readonly id: number;
	 readonly name: string;
	 readonly description?: string;
	 readonly price: number;
	 readonly category: Category;
	 isAvailable: boolean;
	 availableCount: number

	constructor(id: number, name: string, price: number, isAvailable: boolean,
		availableCount: number,
		category: Category = Category.Equivalents,
		description: string = "Sample Description") {
		this.id = id;
		this.name = name;
		this.price = price;
		this.isAvailable = isAvailable;
		this.availableCount = availableCount;
		this.category = category;
		this.description = description;
	}
}