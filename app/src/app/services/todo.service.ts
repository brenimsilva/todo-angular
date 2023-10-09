import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Task } from '../models/task';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/user';
import { environment } from '../environment';
import {  Route, Router, UrlSegment, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TodoService  {
  private taskList = new BehaviorSubject<Task[]>([
  ]);
  taskList$: Observable<Task[]> = this.taskList.asObservable();

  private user = new BehaviorSubject<User>({} as User);
  user$: Observable<User> = this.user.asObservable();


  constructor(private http: HttpClient, private router: Router) {
    this.onUpdateList()
  }

  getUser$() {
    return this.user$;
  }

  setUser$(user: User) {
    this.user.next(user);
  }

  onUpdateList() {
    // this.getTaskList("GUID").subscribe((data) => {
    //   this.taskList.next(data);
    // }, (err) => {
    //     console.error(err);
    //   });
  }

  getTaskList(userGuid: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.TODO_API_URL}/Task/${userGuid}`);
  }

  onEditTask(id: number, taskUpdated: Task) {
      return this.http.put(`${environment.TODO_API_URL}/Task/${id}`, taskUpdated);
  }

  onDeleteTask(taskId: number) {
    return this.http.delete<void>(`${environment.TODO_API_URL}/Task/${taskId}`);
  }

  onNewTask(t: Task) : Observable<Task> {
    t.taskId = 0;
    t.userId = 1;
    return this.http.post<Task>(`${environment.TODO_API_URL}/Task`, t);
  }

  onLoginByToken(t: string): Observable<User> {
    const form = new FormData();
    form.set("token", t);
    return this.http.post<User>(`${environment.AUTH_API_URL}/Auth/LoginByToken`, form);
  }

  // canActivate() {
  //   //   const token = localStorage.getItem("token");
  //   //   if(!token) {
  //   //     this.router.navigateByUrl("/auth");
  //   //     return of(false)
  //   //   }
  //   //   this.onLoginByToken(token).subscribe((s) => {
  //   //     this.setUser$(s);
  //   //     console.log(s);
  //   //     localStorage.setItem("token", s.userToken);
  //   //     return of(true);
  //   //   }, (e) => {
  //   //       this.router.navigateByUrl("/auth");
  //   //       return of(false)
  //   //     });
  //   // return of(false);
  //   if(localStorage.getItem('token')) {
  //     return true;
  //   }
  // }

}
