import { Injectable } from '@angular/core';
import { Product } from '../models/product';


export class ProductsService {

  counter = 0;

  constructor() {
    console.log("sono nel costruttore del servizio Products");
    this.counter = Math.random();

   }

   getCounter(): number {
    return this.counter;
  }



  getProducts(): Product[] {
    return [
      {
        id : 42,
        name: "Frigorifero",
        price: 800,
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
