import { Component, OnInit } from '@angular/core';
import { Product } from '../product/shared/models/product.model';
import { ProductService } from '../product/shared/services/product.service';
import { Category } from '../product/shared/enums/category.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  private product: Product;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.product = id ? this.productService.getProductById(id) : this.productService.getDefaultProduct();
  }

  get isProductValid(): boolean {
    return this.productService.isProductValid(this.product);
  }

  save(): void {
    this.productService.add(this.product);
    this.router.navigate(['/products']);
  }

  goBack(): void {
    this.location.back();
  }
}
