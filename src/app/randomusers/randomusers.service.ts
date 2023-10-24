import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RandomUserResponse, Result } from './models/randomuser';

@Injectable({
  providedIn: 'root'
})
export class RandomusersService {

  constructor(private http: HttpClient) { }

  getData(gender: string, age: number): Observable<Result[]> {
    return this.http.get<RandomUserResponse>("https://randomuser.me/api?results=50")
     .pipe( map( response => response.results.filter(p => p.gender === gender && p.dob.age >age)));
  }

}
