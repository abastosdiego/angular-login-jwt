import { LoginService } from 'src/app/services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  token: string | null = '';

  constructor(private loginService: LoginService) {
    this.token = this.loginService.getToken();
    console.log(this.token);
  }

}
