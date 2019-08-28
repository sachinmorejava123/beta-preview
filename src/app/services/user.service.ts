import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, Subject, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

   public userArray: User[];
   public userArray$: BehaviorSubject<User[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  getUserProfile() {
      this.http.get<User[]>(`${environment.usersURL}`)
        .subscribe(res => {
          this.userArray = res;
          this.userArray$.next(this.userArray);
        });
  }

  userRegister(user: User) {
    this.http.post<any>(environment.usersURL, user, httpOptions)
      .subscribe(
        res => {
          this.userArray.push(user);
          this.userArray$.next(this.userArray);
        }
      )
  }

}
