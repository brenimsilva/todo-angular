import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TodoService } from './services/todo.service';
import { routeGuardGuard } from './route-guard.guard';

const routes: Routes = [
  {path: "", redirectTo:"/auth", pathMatch: "full"},
  {path: "home", component: HomeComponent, canActivate: [routeGuardGuard]  },
  {path: "auth", component: LoginComponent  },
  {path: "lala", component: HomeComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
