import { Component, OnInit } from '@angular/core';
import { Product } from '../product/shared/models/product.model';
import { ProductService } from '../product/shared/services/product.service';
import { Category } from '../product/shared/enums/category.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductObservableService } from '../product/shared/services/product-observable.service';
import { AutoUnsubscribe } from '../../shared/decorators/auto-unsubscribe.decorator';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
@AutoUnsubscribe()
export class ProductEditComponent implements OnInit {

  constructor(private productService: ProductService,
    private productObservableService: ProductObservableService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  private product: Product;
  private isProductExist: boolean;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.productObservableService.getProduct(id).subscribe(data => {
      console.log(data);
      this.product = <Product>data;
      this.isProductExist = true;
    },
      error => console.log(error),
      () => console.log('completed'));

      if (!this.product) {
        this.product = this.productService.getDefaultProduct();
      }

  }

  get isProductValid(): boolean {
    return this.productService.isProductValid(this.product);
  }

  save(): void {
    if (!this.isProductExist) {
      this.product.id = this.productObservableService.getIdPointer();
      this.productObservableService.createProduct(this.product).subscribe(data => {
        console.log(data);
        this.router.navigate(['/products']);
      });
      return;
    }

    this.productObservableService.updateProduct(this.product).subscribe(data => {
      console.log(data);
      this.router.navigate(['/products']);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
