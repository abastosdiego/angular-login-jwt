import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
