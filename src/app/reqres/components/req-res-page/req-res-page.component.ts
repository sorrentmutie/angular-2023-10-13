import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import { ReqresService } from '../../services/reqres.service';
import { Person } from '../../models/reqres';
import { Observable, Subscription} from 'rxjs';
import { LoginService } from 'src/app/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-req-res-page',
  templateUrl: './req-res-page.component.html',
  styleUrls: ['./req-res-page.component.css']
})
export class ReqResPageComponent implements OnInit, OnDestroy, OnChanges {
 // listPerson : Person[] | undefined;
  people: Observable<Person[]> | undefined = undefined;
  loginSubscription: Subscription | undefined = undefined;
  contatore = 0;

  router = inject(Router);

  constructor(public service : ReqresService, private loginService:LoginService){
    //service.getData().subscribe(x => this.listPerson = x);
    this.people = service.getData();

    this.contatore = this.service.mySignal();

    this.loginSubscription = loginService.currentUser$?.subscribe(x =>{
      if(!x){
        this.router.navigate(['/login']);
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }
  ngOnInit(): void {
  }
}
