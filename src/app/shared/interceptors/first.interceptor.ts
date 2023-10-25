import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { SecurityService } from '../services/security.service';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  constructor() {}

  private service = inject(SecurityService);
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //const service = inject(SecurityService);
    const token = this.service.getToken();

    let newRequest = request.clone( {
      headers: request.headers.set('Authorization', 'Bearer ' + token) 
    });
    


    console.log('Primo interceptor');
    console.log(request);
 //   localStorage.setItem('ultimoaccesso', (new Date()).toDateString());
    return next.handle(newRequest).pipe
    ( 
      catchError(   e => {
          const myError = new Error('Problemi di comunicazione');
          return throwError(() => myError);
      }),
      tap( r => {
      if( r instanceof HttpResponse) {
        console.log(r);
      }
    }));
  }
}
