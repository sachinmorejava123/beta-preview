import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { Observable } from 'rxjs';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserProfileComponent,
    NavbarComponent,
    UserLoginComponent,
    UserHomeComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
