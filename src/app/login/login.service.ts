import { Injectable } from '@angular/core';
import { Observable, Subject, delay, of, tap } from 'rxjs';
import { Utente } from './utente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser: Utente | undefined = undefined;
  private subject:Subject<Utente|undefined>= new Subject<Utente|undefined>();
  currentUser$ : Observable<Utente|undefined>|undefined=undefined;

  constructor() { 
    this.currentUser$ = this.subject.asObservable();
  }

  login( username: string, password: string): Observable<boolean> 
  {
    return of(true).pipe(
      delay(2000),
      tap( b => {
        this.currentUser = {nome: 'Mario Rossi', imageUrl: 'https://reqres.in/img/faces/7-image.jpg', roles: ['User', "ADMIN"] }
        this.subject.next(this.currentUser);
      })
    );
  }


  logout(){
    this.currentUser = undefined;
    this.subject.next(undefined);
  }

}
