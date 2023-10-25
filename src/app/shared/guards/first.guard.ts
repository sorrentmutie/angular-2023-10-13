import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

export const firstGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  if(loginService.currentUser) {
    if(loginService.currentUser.roles.indexOf('ADMIN') == -1){
      return false;
    }else{
      return true;
    }
  } else {
    router.navigate(['/login']);
    return false;
  }

};
