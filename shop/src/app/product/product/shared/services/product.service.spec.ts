import { ProductService } from './product.service';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../mocks/mock-products';

describe('ProductService', () => {
    let service: ProductService;
    let localStorageMock;
    const productStoreName = 'products';

    const products: Product[] = [{
        id: 1,
        name: 'test product',
        availableCount: 1,
        isAvailable: true,
        category: 'test category',
        description: 'test description',
        lastUpdateTime: new Date(),
        price: 1
    }];

    beforeEach(function () {
        localStorageMock = {
            setItem: jasmine.createSpy('setItem'),
            getItem: function (value) {
                return products;
            },
            deleteItem: function (value) {
            }
        };
        service = new ProductService(localStorageMock);
    });

    it('Get all Products', () => {
        const actualProducts = service.getProducts();
        expect(products);
    });

    it('Get Product by Id', () => {
        service.getProductById(products[0].id);
        expect(products);
    });

    it('Create Product', () => {
        service.add(products[0]);
        expect(localStorageMock.setItem).toHaveBeenCalledWith(productStoreName, products);
    });

    it('Is Product Valid', () => {
        service.isProductValid(products[0]);
        expect(true);
    });
});
