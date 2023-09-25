import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log('entrou no interceptor Token');

    var token = localStorage.getItem('access_token');
    var token_type = localStorage.getItem('token_type');

    if (token && token_type) {
      console.log(`token: ${token}`);
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `${token_type} ${token}`
        }
      });

      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}
