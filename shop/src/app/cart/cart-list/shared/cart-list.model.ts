import { Product } from "../../../product/product/shared/models/product.model";

export class CartItem {
	readonly product: Product
    quantity: number

    constructor(product: Product, quantity: number) { 
        this.product = product;
        this.quantity = quantity;
    }
}