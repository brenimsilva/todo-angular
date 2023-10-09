import { CanActivateFn, UrlTree } from '@angular/router';

export const routeGuardGuard: CanActivateFn = (route, state) => {

  if(localStorage.getItem("token")) {

    // return new UrlTree(route.);
  }
  return false;
};
