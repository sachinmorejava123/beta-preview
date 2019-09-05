import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  editUserForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = this.userService.user;
    console.log(this.user);
    this.getProfile(this.user);
  }

   getProfile(user: User){
    this.editUserForm = this.formBuilder.group({
      firstName: user.firstName,
      lastName: user.lastName,
      mobileNo: user.mobileNo,
      country: user.country,
      state: user.state,
      city: user.city,
      postalCode: user.postalCode
    })
  }

  onSubmit() {
    console.log('on sub');
    const user = this.editUserForm.value;
    this.editProfile(user);
  }

  editProfile(user: User){
    console.log('edit pro');
    this.userService.editProfile(user)
    .subscribe(res =>{
      console.log("profile updated successfully");
    })
  }
}
