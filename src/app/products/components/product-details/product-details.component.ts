import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

   product: Product | undefined = undefined;
   constructor(private route: ActivatedRoute, private service: ProductsService){
       const id = this.route.snapshot.paramMap.get("id");
       if(id) {
        this.service.getProductById(parseInt(id, 10)).subscribe(
          p => this.product = p);

       }
       console.log(id);
   }
}
