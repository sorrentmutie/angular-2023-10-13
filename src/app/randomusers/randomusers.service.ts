import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomUserResponse } from './models/randomuser';

@Injectable({
  providedIn: 'root'
})
export class RandomusersService {

  constructor(private http: HttpClient) { }

  getData(): Observable<RandomUserResponse> {
    return this.http.get<RandomUserResponse>("https://randomuser.me/api?results=10");
  }

}
