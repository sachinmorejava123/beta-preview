import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, FormBuilder} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users: Observable<User[]>;
  user: User;
  isLoggedIn: Observable<any>;
  loginHeaderVisible: boolean;
  userProfileVisible: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserStatus()
    .subscribe(
      res => {
        this.isLoggedIn = res;
        console.log(this.isLoggedIn);
        if(this.isLoggedIn){
          this.loginHeaderVisible = false;
          this.userProfileVisible = true;
        }else{
          this.loginHeaderVisible = true;
          this.userProfileVisible = false;
        }
      }
    );

   this.users= this.userService.userArray$;
   this.user = this.userService.user;
   console.log(this.user);
   this.subscribeToUserProfile();
  }
  subscribeToUserProfile(){
    this.userService.getUserProfile();
  }
}
