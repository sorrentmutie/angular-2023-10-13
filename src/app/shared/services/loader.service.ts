import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private subject: Subject< boolean>  = new Subject<boolean>();
  loader$: Observable<boolean> | undefined = undefined;
  constructor() {
    this.loader$ = this.subject.asObservable();
   }

  showLoader() {
     this.subject.next(true);
  }

  hideLoader() {
    this.subject.next(false);
  }

}
