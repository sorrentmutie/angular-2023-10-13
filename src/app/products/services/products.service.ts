import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private getProducts(): Product[] {
    return [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
    ]
  }

   getProductsAsObservable(): Observable<Product[]> {
      return of(this.getProducts());
   }


}
