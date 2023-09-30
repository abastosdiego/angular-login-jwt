import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  logar() {

    if(this.email && this.senha) {
      console.log(this.email);
      //console.log(this.senha);
      this.loginService.login(this.email, this.senha);
      this.router.navigate(['/admin']);
    }

  }
}
