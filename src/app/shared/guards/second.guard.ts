import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const secondGuard: CanActivateFn = (route, state) => {
  console.log('sono nella seconda guardia');
  const router = inject(Router);
 // router.navigate(['/welcome']);
  return true;
};
