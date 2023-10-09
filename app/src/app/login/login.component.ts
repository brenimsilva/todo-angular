import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { environment } from '../environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private aRouter: ActivatedRoute, private route: Router, private service: TodoService){}

  ngOnInit(): void {
    this.authUser();
  }

  authUser() {
    this.aRouter.queryParams.subscribe((p) => {
      if(!!p['token']){
        localStorage.setItem("token", p['token']);
        this.route.navigateByUrl("/home");
      }
      else{
        window.location.href = environment.AUTH_REDIRECT_URL;
      }
    })
  }

}
