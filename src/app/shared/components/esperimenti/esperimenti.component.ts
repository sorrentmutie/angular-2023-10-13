import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, debounceTime, filter } from 'rxjs';
import { MyValidator } from './myValidator';
import { ProductsService } from 'src/app/products/services/products.service';
import { Product } from 'src/app/products/models/product';
import { ReqresService } from 'src/app/reqres/services/reqres.service';

@Component({
  selector: 'app-esperimenti',
  templateUrl: './esperimenti.component.html',
  styleUrls: ['./esperimenti.component.css']
})
export class EsperimentiComponent {


   // myFormControl = new FormControl("valore iniziale");
   //myObservable: Observable<string | null>  | undefined = undefined; 
   myFormGroup: FormGroup | undefined = undefined;
   products: Product[] = [];

    constructor(private formBuilder: FormBuilder, private service: ProductsService,
      private reqresService: ReqresService){
     // this.myObservable = this.myFormControl.valueChanges;
      // this.myFormControl.valueChanges.subscribe( t => {
      //     if(t && t.length > 10) {
      //        this.myFormControl.setValue("-");
      //     }
      // });
      this.myFormGroup = this.formBuilder.group(
        {
           firstName: ['', [Validators.required, Validators.minLength(5), MyValidator]],
           lastName: [''],
           productId: ['']
        });

      this.myFormGroup.get('firstName')?.valueChanges
      .pipe(
        filter( text => text.length > 3),
        debounceTime(1000)
      )
      .subscribe(
        text => {
          this.service.searchProductByName(text).subscribe(
            prodotti => {
              this.products = prodotti;
              this.myFormGroup?.get("productId")?.setValidators(Validators.required);
              this.myFormGroup?.get("productId")?.updateValueAndValidity();
            }
          )
        }
      )

    }


    change() {
     // this.myFormControl.setValue("nuovo valore");
    }


    keyup(payload: KeyboardEvent){
      const target = payload.target as HTMLInputElement;
      console.log(target.value);
    }

    betterkeyup(value: string) {
        console.log(value);
    }


    submit() {
      console.log(this.myFormGroup);
      this.reqresService.postData(
        this.myFormGroup?.get('firstName')?.value,
        this.myFormGroup?.get('lastName')?.value,
      ).subscribe( x => {
        console.log(x)
      })



    }

    get firstName() {return this.myFormGroup?.get('firstName');}

}
