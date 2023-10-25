import { Injectable } from '@angular/core';
import { Notifica } from './notifica';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private subject: Subject<Notifica> | undefined = undefined;
  notifications$: Observable<Notifica> | undefined = undefined;
  constructor() { 
    this.subject = new Subject<Notifica>();
    this.notifications$ = this.subject.asObservable();
  }



  sendNotification(notification: Notifica) {
     this.subject?.next(notification);
  }


}
