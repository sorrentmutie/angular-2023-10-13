import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Person, ReqResResponse } from '../models/reqres';
import { User } from '../useu';

export interface ReqResPostData {
  id: string,
  name: string,
  job: string,
  createdAt: string
}


@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  constructor(private http: HttpClient) {}


  postData(name: string, job: string): Observable<ReqResPostData> {
    return this.http.post<ReqResPostData>("https://reqres.in/api/users", { name: name, job: job});
  }

  getData():Observable<Person[]>{
    return this.http.get<ReqResResponse>("https://reqres.in/api/users?page=2")
    .pipe( map(r => r.data));
  }


  getData2(): Observable<User[]> {
    return this.http.get<ReqResResponse>("https://reqres.in/api/users?page=2")
    .pipe( 
       map( r => 
          r.data.map( d => new User(d.first_name, d.last_name)
          )
    ))
  }

}
