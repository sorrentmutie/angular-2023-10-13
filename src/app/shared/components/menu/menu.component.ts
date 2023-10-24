import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  countMenu = 1;
  randomNumber = 0;

  constructor(private service: ProductsService){
    setInterval(() => this.countMenu +=1,5000);
   // const service = new ProductsService();
    this.randomNumber = service.getCounter();
  }


}
