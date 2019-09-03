import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginUserForm: FormGroup;
  httpResponse: HttpResponse<any>
  res: any;
  loginMsg: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() { 
    this.userService.show();
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
        
        res => (res) ? this.router.navigate(['user-home']) : this.router.navigate(['user-login'])
      
      )
  } 
}
