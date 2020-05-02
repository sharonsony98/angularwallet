import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { User } from './user';@Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   constructor(private http: HttpClient) { }  public signup(user: User): Observable<any> {
//     return this.http.post('http://localhost:8084/signUp', user, {responseType: 'text'});
//   }
//   public login(user: User): Observable<any> {
//     return this.http.get('http://localhost:8084/login/email/password');
//   }
// }