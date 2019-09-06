import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable, from } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  isValidFormSubmitted = null;     
  registerUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.registerUserForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required,  Validators.pattern('^[a-zA-Z]+$')]],
      mobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      state: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      postalCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    })
  }

  get f() {
    return this.registerUserForm.controls;
  }

  onSubmit() {
    this.isValidFormSubmitted = true;
    if(this.registerUserForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    const user = this.registerUserForm.value;
    this.userRegister(user);
    this.registerUserForm.reset();
    
  }

  userRegister(user: User) {
    this.userService.userRegister(user);
  }
}
