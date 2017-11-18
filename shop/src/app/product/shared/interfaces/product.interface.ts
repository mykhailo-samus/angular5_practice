import { Category } from '../enums/category.enum';

export interface ProductInterface {
	 id: number;
	 name: string;
	 description?: string;
	 price: number;
	 category: Category;
	 isAvailable: boolean;
}