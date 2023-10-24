import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  @Input() products: Product[] | undefined = undefined;
  @Input() title: string = "";
  @Output() emitter: EventEmitter<Product>= new( EventEmitter<Product>)();

  remove(product: Product): void {
    //alert('Sono qui ' + product.id);
    this.emitter.emit(product);
  }


}
