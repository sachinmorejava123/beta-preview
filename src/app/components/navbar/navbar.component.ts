import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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
  }

  onLogout(){
    this.userService.logout();
  }
}
