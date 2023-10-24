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

    constructor(private service: RandomusersService){
         this.service.getData().subscribe( r => this.results = r.results);
    }
}
