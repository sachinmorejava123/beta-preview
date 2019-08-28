import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';


const routes: Routes = [
  {path: 'user-register', component: UserRegisterComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: '', redirectTo: 'user-profile', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
