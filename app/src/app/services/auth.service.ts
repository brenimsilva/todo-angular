import { Injectable } from '@angular/core';
import { Observable, map, of, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../environment';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user = new BehaviorSubject<User | null>(null);

  get user() : Observable<User | null> {
    return this._user.asObservable();

  }

  set user(user: User) {
    this._user.next(user);
  }

  constructor(private _http: HttpClient) {
  }

  public getUser(token: string): Observable<User | null> {
    return this._http.get<User>(`${environment.AUTH_API_URL}/Auth/${token}`);
  }

  public check() : Observable<boolean> {
    const token = localStorage.getItem('token');
    if(token) {
      return this._verify_token(token);
    }
    return of(false);
  }

  private _verify_token(token: string) : Observable<boolean> {
    const result = this._http.post<boolean>(`${environment.AUTH_API_URL}/Auth/Verify`,
    undefined,
      {headers: new HttpHeaders({'A1tenticationToken': token}), observe: 'response'}
    ).pipe
      (
      map((response) =>  {
       return response.body || false;
      })
    );

    return result;
  }

  // public setUser(): Observable<any> {
  //   this._getUser(localStorage.getItem("token") as string).subscribe((u) => {
  //     if(!!u) {
  //       this.user = u;
  //       console.log(u);
  //     }
  //     else this.user = null;
  //   }, (er) => {
  //       this.user = null;
  //     } )
  //   return of(true);
  // }

  public setToken(token: string) {
    localStorage.setItem("token", token);
  }
  public getToken() {
    return localStorage.getItem("token");
  }

}
