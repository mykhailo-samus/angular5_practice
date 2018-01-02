import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject, Optional } from '@angular/core';

import { ProductService } from '../product/shared/services/product.service';
import { Product } from '../product/shared/models/product.model';
import { ProductComponent } from '../product/product.component';
import { CartService } from '../../cart/cart-list/shared/services/cart.service';
import { appInfoToken } from '../../shared/tokens/constants.token';
import { GeneratorService } from '../../shared/services/generator.service';
import { Config } from '../../shared/models/config.model';
import { ConfigOptionsService } from '../../shared/services/config.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { ProductPromiseService } from '../product/shared/services/product-promise.service';
import { ProductObservableService } from '../product/shared/services/product-observable.service';
import { AutoUnsubscribe } from '../../shared/decorators/auto-unsubscribe.decorator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
@AutoUnsubscribe()
export class ProductListComponent implements OnInit, AfterViewInit {
  products: Product[];
  generatedSequence: string;
  localStorageItem: string;
  config: Config;

  @ViewChild('title')
  private title: ElementRef;

  constructor(private _productService: ProductService,
    private productObservableService: ProductObservableService,
    private cartService: CartService,
    @Inject(appInfoToken) public appInfo,
    @Inject(GeneratorService) private generatorService,
    @Inject(LocalStorageService) private localStorageService,
    @Optional() private configOptionsService: ConfigOptionsService) { }
    sortByProperty: string;
    sortByAscending: boolean;

  ngOnInit() {
    this.productObservableService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    },
    error => console.log(error),
    () => console.log('completed'));

    this.generatedSequence = this.generatorService.randomSequence();

    this.localStorageService.setItem('myItem', 'ABC');
    this.localStorageItem = localStorage.getItem('myItem');

    if (this.configOptionsService) {
      this.configOptionsService.Save(new Config(1, 'test_login', 'my_email@gmail.com'));
      this.config = this.configOptionsService.GetConfig();
    }

    this.sortByProperty = 'name';
    this.sortByAscending = true;
  }

  ngAfterViewInit() {
    this.title.nativeElement.textContent = 'List of products:';
  }

  onProductBuy(product) {
    if (product.availableCount > 0) {
      this.cartService.addToCart(product);
      product.availableCount = product.availableCount - 1;
    }

    if (product.availableCount === 0) {
      product.isAvailable = false;
    }
  }

    orderByProperty(property: string): void {
        this.sortByAscending = !this.sortByAscending;
        this.sortByProperty = property;
    }
}
