import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from '../environment';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  queryParams$ = this.router.routerState.root.queryParams;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(private service: AuthService,  private router: Router){}

  ngOnInit(): void {
      this.queryParams$.pipe(
      takeUntil(this._unsubscribeAll)
    ).subscribe(q => {
      const token = q['token'];
      if(token) {
        this.service.setToken(token);
        this.router.navigateByUrl("/home");
      } else{
        console.log(this.service.user)
        window.location.href = environment.AUTH_REDIRECT_URL;
      }
    })
  }
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
