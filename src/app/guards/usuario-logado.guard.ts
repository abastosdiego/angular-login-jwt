import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

export const usuarioLogadoGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  if(loginService.getToken() && !loginService.isExpired()){
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }

};
