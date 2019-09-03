import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


const routes: Routes = [
  {path: 'user-register', component: UserRegisterComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'user-home', component: UserHomeComponent},
  {path: 'user-edit', component: UserEditComponent}
  /* {path: '', redirectTo: 'user-profile', pathMatch: 'full'} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
