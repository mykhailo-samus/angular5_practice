import { OrderByPipe } from './order-by.pipe';
import { Product } from '../models/product.model';
import { Category } from '../enums/category.enum';


describe('OrderByPipe', () => {
    const pipe = new OrderByPipe();
    const products: Product[] = [
        new Product(1, 'Smart Watches', 100, true, 10, new Date(2017, 10, 14), Category[Category.Watches]),
        new Product(2, 'Air Purifier', 200, true, 5, new Date(2017, 11, 24), Category[Category.Purifiers], 'Great equivalent')
    ];

    it('Order by Price Ascending', () => {
        const result = pipe.transform(products, 'price', true);
        expect(result[0].name).toBe('Smart Watches');
    });

    it('Order by Price Descending', () => {
        const result = pipe.transform(products, 'price');
        expect(result[0].name).toBe('Air Purifier');
    });

    it('Order by Name Ascending', () => {
        const result = pipe.transform(products, 'name', true);
        expect(result[0].name).toBe('Air Purifier');
    });

    it('Order by Name Descending', () => {
        const result = pipe.transform(products, 'name');
        expect(result[0].name).toBe('Smart Watches');
    });
});
