import { inject } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { ProductsService } from "src/app/products/services/products.service";

export function MyValidator(formControl: AbstractControl){
  //const service = inject(ProductsService);
  const value = formControl.value as string;
if(value.startsWith('F')){
    return null;
} else {
    return { myValidator: true  }
}

} 