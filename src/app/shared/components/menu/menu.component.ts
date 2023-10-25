import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { Utente } from 'src/app/login/utente';
import { NotificationService } from 'src/app/notifiche/notification.service';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  countMenu = 1;
  randomNumber = 0;
  message = "";
  loggedIn = false;
  currentUser: Utente|undefined= undefined;

  constructor(private service: ProductsService, private notificationsService: NotificationService, private loginService: LoginService){
    setInterval(() => this.countMenu +=1,5000);
   // const service = new ProductsService();
    this.randomNumber = service.getCounter();
    this.notificationsService.notifications$?.subscribe(n =>  this.message = n.text);
    loginService.currentUser$?.subscribe(x => this.currentUser=x);
  }
  
  router =inject(Router);
  
  doLogin(){
    this.router.navigate(['/login']);
  }

  doLogout(){
    this.loginService.logout();
  }
}
