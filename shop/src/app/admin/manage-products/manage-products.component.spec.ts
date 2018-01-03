import { TestBed, async } from '@angular/core/testing';
import { ProductService } from '../../product/product/shared/services/product.service';
import { ManageProductsComponent } from './manage-products.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageService } from '../../shared/services/local-storage.service';

describe('ManageProductsComponent: Integration tests', () => {
    const productService = new ProductService(new LocalStorageService())
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ManageProductsComponent,
            ],
            imports: [
                CommonModule,
                RouterModule,
                FormsModule,
                RouterTestingModule
            ],
            providers: [
                { provide: ProductService, useValue: productService }
            ]
        });
    });

    it('Should create the component', async(() => {
        const fixture = TestBed.createComponent(ManageProductsComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

      it(`First link should be Add product`, async(() => {
        const fixture = TestBed.createComponent(ManageProductsComponent);
         fixture.detectChanges();
         const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a').textContent).toEqual('Add product');
      }));
});
