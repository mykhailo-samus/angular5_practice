import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product/shared/models/product.model';
import { ProductService } from '../../product/product/shared/services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  private product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getDefaultProduct();
  }

}
