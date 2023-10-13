import { Component } from '@angular/core';
import { EventBusService } from '../event-bus.service';
import { Product } from 'src/app/products/models/product';
import { Events } from '../events';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerMessage = "Footer message";
  constructor(private eventBus : EventBusService) {

  eventBus.on(Events.ProductsAdded, (product: Product) => {
    this.footerMessage = product.name;
  })
}
}
