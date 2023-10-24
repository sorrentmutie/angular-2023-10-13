import { Component } from '@angular/core';
import { ReqresService } from '../../services/reqres.service';
import { Person } from '../../models/reqres';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-req-res-page',
  templateUrl: './req-res-page.component.html',
  styleUrls: ['./req-res-page.component.css']
})
export class ReqResPageComponent {
 // listPerson : Person[] | undefined;
  people: Observable<Person[]> | undefined = undefined;


  constructor(public service : ReqresService){
    //service.getData().subscribe(x => this.listPerson = x);
    this.people = service.getData();

  }
}
