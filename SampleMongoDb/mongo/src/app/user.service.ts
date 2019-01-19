import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8435/api/users';
 
  constructor(private http: HttpClient) { }

  /* constructor() { } */

  createUser(user: Object): Observable<Object> {
    console.log("service")
    console.log(user)
    return this.http.post(`${this.baseUrl}` + `/create`, user);
  }
}
