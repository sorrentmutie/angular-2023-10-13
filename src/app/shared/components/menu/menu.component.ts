import { Component } from '@angular/core';
import { CustomersService } from 'src/app/customers/customers.service';
import { EventBusService } from '../../event-bus.service';
import { Customer } from 'src/app/customers/customer';
import { Events } from '../../events';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
   private subscrition: Subscription | undefined = undefined;
   name= "";
   constructor(private service: CustomersService, private eventBus: EventBusService) {
    this.service.customersObservable$?.subscribe( (customer) => {
      this.name = customer.name;
    });

   this.subscrition =  this.eventBus.on(Events.CustomerAdded, (customer: Customer) => {
      this.name = customer.name;
   });

  }

  start(){
    this.service.start();
  }

  stop(){
    this.service.stop();
  }
}
