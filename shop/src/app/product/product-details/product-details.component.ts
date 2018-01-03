import { Component, OnInit } from '@angular/core';
import { Product } from '../product/shared/models/product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product/shared/services/product.service';
import { Location } from '@angular/common';
import { ProductPromiseService } from '../product/shared/services/product-promise.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AutoUnsubscribe } from '../../shared/decorators/auto-unsubscribe.decorator';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
@AutoUnsubscribe()
export class ProductDetailsComponent implements OnInit {

  constructor(private productPromiseService: ProductPromiseService,
    private route: ActivatedRoute,
    private location: Location) { }

  private product: Product;

  ngOnInit() {
      const id = this.route.snapshot.params['id'];
       this.productPromiseService.getProduct(id)
       .then(product => this.product = product)
       .catch((err) => console.log(err));
  }

  goBack(): void {
    this.location.back();
  }
}
