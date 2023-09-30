import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('access_token');
  }

  getTokenType() {
    return localStorage.getItem('token_type');
  }

  login(email: string, senha:string) {

    const url = 'http://localhost:8000/api/login';

    const body = {
      email: email,
      password: senha
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };


    this.http.post<any>(url, body, httpOptions)
      .subscribe(
        response => {
          localStorage.setItem('access_token', response['access_token']);
          localStorage.setItem('token_type', response['token_type']);
          localStorage.setItem('expires_in_minutes', response['expires_in_minutes']);
        }
      )
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('expires_in_minutes');
    console.log('logout');
  }
}
