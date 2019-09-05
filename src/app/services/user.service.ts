import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { from, Observable, Subject, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

   public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
   public userArray: User[];
   public userArray$: BehaviorSubject<User[]> = new BehaviorSubject([]);
   public user:User;
   public statusCode: number;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

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

  userLogin(user: User) {
    return this.http.get<any>(`${environment.usersURL}/?emailId=${user.emailId}&&password=${user.password}`,{observe:'response'})
      .pipe(
        map(res => this.user = res.body[0])
      )
  }

  editProfile(user: User){
    return this.http.patch<any>(`${environment.usersURL}/${this.user.id}`, user)
    .pipe(
      map(res => this.user = res.body)
    )
  }

  getUserStatus(): Observable<any> {
    return this.isLoggedIn.asObservable();
  }

  updateUserStatus(isLoggedIn: boolean){
    this.isLoggedIn.next(isLoggedIn);
  }

  logout() {
    this.isLoggedIn.next(false);
    this.router.navigate(['user-login']);
  }
}
