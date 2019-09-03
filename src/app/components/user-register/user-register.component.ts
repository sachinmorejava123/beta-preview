import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
      
  registerUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.userService.show();
    this.registerUserForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      mobileNo: '',
      emailId: '',
      password: '',
      country: '',
      state: '',
      city: '',
      postalCode: ''
    })
  }

  onSubmit() {
    const user = this.registerUserForm.value;
    this.userRegister(user);
  }

  userRegister(user: User) {
    this.userService.userRegister(user);
  }
}
