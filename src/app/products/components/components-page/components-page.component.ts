import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-components-page',
  templateUrl: './components-page.component.html',
  styleUrls: ['./components-page.component.css']
})
export class ComponentsPageComponent implements OnInit, OnDestroy {

  // products: Product[] = [];
  // subscription: Subscription | undefined = undefined;
  products$: Observable<Product[]> | undefined = undefined;

    constructor(private service: ProductsService) {
    }
  ngOnDestroy(): void {
    // this.subscription?.unsubscribe();
  }
  ngOnInit(): void {
    // this.products = this.service.getProducts();
   // this.subscription = this.service.getProductsAsObservable().subscribe(
   //   (products: Product[]) => this.products = products,
   // );

   this.products$ =  this.service.getProductsAsObservable();

  }

}
