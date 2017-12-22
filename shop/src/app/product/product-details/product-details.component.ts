import { Component, OnInit } from '@angular/core';
import { Product } from '../product/shared/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/shared/services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location) { }

  private product: Product;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.product = id ? this.productService.getProductById(id) : this.productService.getDefaultProduct();
  }

  goBack(): void {
    this.location.back();
  }
}
