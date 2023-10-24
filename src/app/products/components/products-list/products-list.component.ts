import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  @Input() products: Product[] | undefined = undefined;
  @Input() title: string = "";
  @Output() emitter: EventEmitter<Product>= new( EventEmitter<Product>)();


  constructor(private router: Router){}

  remove(product: Product): void {
    //alert('Sono qui ' + product.id);
    this.emitter.emit(product);
  }

  update(id: number) {
     this.router.navigate(['/products', id])
  }


}
