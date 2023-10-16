import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { routeGuardGuard } from './route-guard.guard';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: "", redirectTo:"/auth", pathMatch: "full"},
  {path: "home", component: HomeComponent, canMatch: [routeGuardGuard]  },
  {path: "auth", component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
