import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { NotificationsComponent } from 'src/app/shared/components/notifications/notifications.component';
import { NotificationService } from 'src/app/notifiche/notification.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
   // var title = "Titolo";
    // title: string | undefined = "Titolo";
    // count: number = 45;
    // isAvailable: boolean = false;
    // count2 = 46;
    // count3: number | undefined  = undefined;

   // result: number| null;

    //myProduct : Product | undefined = undefined;0
    discountedProducts: Product[] | undefined = undefined;
    discountedTitle = "Prodotti in offerta";
    restockProducts: Product[] | undefined = undefined  ;
    restockTitle = "Prodotti da riordinare";
    randomNumber = 0;




  constructor(private service: ProductsService, private notificationService: NotificationService, private loginService:LoginService) {

     // const service = new ProductsService();
     this.randomNumber = service.getCounter();
     //this.discountedProducts = service.getProducts();
     this.service.getProductsAsObservable().subscribe(data => this.discountedProducts = data);



     this.restockProducts =  service.getProducts();
  }

removeDiscountedProduct(product: Product) {
  this.discountedProducts?.splice(this.discountedProducts?.indexOf(product),1);
}

removeRestockProduct(product: Product) {
  console.log(product);
}

modifyDiscountedProduct(product: Product) {
  this.notificationService.sendNotification( {
    code: 200,
    text: product.name,
    cssClass: ""
  })
}

doLogout(){
  this.loginService.logout();
}

}
