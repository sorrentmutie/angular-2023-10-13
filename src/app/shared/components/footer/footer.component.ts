import { Component } from '@angular/core';
import {Observable, filter, map, of} from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    data: Observable<number> | undefined = undefined;
    constructor(){
      this.data = of(1,2,3,4,5,6,7,8,9,10);

    //  this.data.subscribe({
    //      next: (n) => {console.log(n)},
    //      error: (error: Error) => console.log(error.message),
    //      complete: () => console.log('Fine delle trasmissioni')
    //  });

    this.data
    .pipe(
      map(n => n * 3),
      filter( n => n % 2 === 0)
    )
    .subscribe(
       n => console.log(n))
    }
}
