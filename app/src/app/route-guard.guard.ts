import { inject } from '@angular/core';
import {  CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { map, switchMap, of } from 'rxjs';
import { AuthService } from './services/auth.service';
import { TodoService } from './services/todo.service';
import { User } from './models/user';

export const routeGuardGuard: CanMatchFn = (route, state) => {
  const router = inject(Router)
  const service = inject(AuthService);
  return service.check().pipe(
    switchMap(
      auth => {
        if(!auth){
          router.navigateByUrl("/auth");
          return of(false);
        }
        service.getUser(localStorage.getItem("token") as string).subscribe(u => {
          service.user = u as User;
        })
        return of(true)
      }
    )
  )
};
