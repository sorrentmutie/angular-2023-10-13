import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { NotificationService } from 'src/app/notifiche/notification.service';
import { Notifica } from 'src/app/notifiche/notifica';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService, private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('secondo intercpetor');
    this.loaderService.showLoader();
    return next.handle(request).pipe(
      catchError(   (e: HttpErrorResponse) => {
        this.loaderService.hideLoader();
        const myError = new Error('Problemi di comunicazione');
        const n: Notifica = {
           code: e.status,
           text: e.statusText,
           cssClass: 'danger'
        }
        this.notificationService.sendNotification(n);
        return throwError(() => myError);
    }),
    tap( r => {
    if( r instanceof HttpResponse) {
      this.loaderService.hideLoader();
      const n: Notifica = {
        code: r.status,
        text: r.statusText,
        cssClass: 'success'
     }
      this.notificationService.sendNotification(n);
      console.log(r);
    }
  })

    );
  }
}
