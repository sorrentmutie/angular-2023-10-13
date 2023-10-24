import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { OfferService } from './offer.service';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  counter = 0;

  constructor(private service: OfferService) {
    console.log("sono nel costruttore del servizio Products");
    this.counter = Math.random();

   }

   getCounter(): number {
    return this.counter;
  }


  getProductsAsObservable(): Observable<Product[]> {
    return of(this.getProducts());
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
      }

    ]
  }


}
