import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable, from, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginUserForm: FormGroup;
  httpResponse: HttpResponse<any>
  loginMsg: string;
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() { 
     this.loginUserForm = this.formBuilder.group({
      emailId: '',
      password: '',
    })
  }

  onSubmit(){
    const user = this.loginUserForm.value;
    this.userLogin(user);
  }

  userLogin(user: User){
    this.userService.userLogin(user)
      .subscribe(
        res => {
          if(res){
          // this.isLoggedIn.next(true);
           this.userService.updateUserStatus(true);
           return this.router.navigate(['user-profile']);
          }else{
           // this.isLoggedIn.next(false);
            this.userService.updateUserStatus(false);
           return this.router.navigate(['user-login']);
          }
         // return (res) ? this.router.navigate(['user-profile']) : this.router.navigate(['user-login']);
        }
      )
  } 
}
