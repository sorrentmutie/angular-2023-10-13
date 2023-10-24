import { Component } from '@angular/core';
import { RandomusersService } from '../../randomusers.service';
import { Result } from '../../models/randomuser';

@Component({
  selector: 'app-random-user-page',
  templateUrl: './random-user-page.component.html',
  styleUrls: ['./random-user-page.component.css']
})
export class RandomUserPageComponent {


    results: Result[] = [];
    gender = "male";
    age = 30;

    constructor(private service: RandomusersService){
       const x =  this.service.getData(this.gender, this.age).subscribe( r => this.results = r);
    }
}
