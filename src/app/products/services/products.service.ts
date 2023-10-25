import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { OfferService } from './offer.service';
import { Observable, Subject, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private subject: Subject<Product> = new Subject<Product>();
  observableProduct$ : Observable<Product> | undefined = undefined;
  counter = 0;

  constructor(private service: OfferService) {
    this.observableProduct$ = this.subject.asObservable();
    this.counter = Math.random();

   }

   lastModifiedProduct(product: Product) {
    this.subject.next(product);
   }

   getCounter(): number {
    return this.counter;
  }


  getProductsAsObservable(): Observable<Product[]> {
    return of(this.getProducts());
  }
  
  searchProductByName(search: string): Observable<Product[]> {
    const products = this.getProducts()
      .filter(p => p.name.startsWith(search));
      return of(products);
  }


  getProductById(id: number) : Observable<Product | undefined> {

    const products= this.getProducts().filter(p => p.id === id)
        if(products.length === 1) {
          return of(products[0]);
        }    else {
          return of(undefined);
        }

  }



  getProducts(): Product[] {
    return [
      {
        id : 42,
        name: "Frigorifero",
        price:  (1 - this.service.calculateDiscount(42)) *  800,
        isAvailable : true,
        releaseDate: new Date(),
        image: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-png-transparent.png"    
      },
      {
        id : 32,
        name: "TV Color",
        price: 1200,
        isAvailable : true,
        releaseDate: new Date(),
        image: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-png-transparent.png"    
      },
      {
        id : 33,
        name: "Forno a microonde",
        price: 200,
        isAvailable : true,
        releaseDate: new Date(),
        image: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-png-transparent.png"    
      },
      {
        id : 37,
        name: "Forno a legna",
        price: 200,
        isAvailable : true,
        releaseDate: new Date(),
        image: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-png-transparent.png"    
      }


    ]
  }


}
