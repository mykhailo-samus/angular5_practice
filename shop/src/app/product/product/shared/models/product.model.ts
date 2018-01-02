import { Category } from '../enums/category.enum';
import { ProductInterface } from '../interfaces/product.interface';

export class Product implements ProductInterface {
     id: number;
     readonly name: string;
     readonly description?: string;
     readonly lastUpdateTime;
     readonly price: number;
     readonly category: string;
     isAvailable: boolean;
     availableCount: number;

    constructor(id: number, name: string, price: number, isAvailable: boolean,
        availableCount: number,
        lastUpdateTime: Date,
        category: string = 'No Category',
        description: string = 'Sample Description') {
        this.id = id;
        this.name = name;
        this.price = price;
        this.lastUpdateTime = lastUpdateTime;
        this.isAvailable = isAvailable;
        this.availableCount = availableCount;
        this.category = category;
        this.description = description;
    }
}
