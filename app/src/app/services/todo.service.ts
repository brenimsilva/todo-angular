import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';
import {HttpClient} from '@angular/common/http'
import { environment } from '../environment';
import { Router} from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private taskList = new BehaviorSubject<Task[]>([
  ]);
  taskList$: Observable<Task[]> = this.taskList.asObservable();

  public handleError: any;

  constructor(private http: HttpClient, private router: Router, private _authService: AuthService) {
  }


  onUpdateList() {
    this._authService.user.subscribe(u => {
      if(!u) {
        return;
      }
      this.getTaskList(u.userGuid).subscribe((data) => {
        this.taskList.next(data);
      }, (err) => {
          console.error(err);
        });
    })
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
    let res = new Observable<Task>();
    this._authService.user.subscribe(u => {
      if(!u) return;
    t.taskId = 0;
    t.userGuid =  u.userGuid;
      res = this.http.post<Task>(`${environment.TODO_API_URL}/Task`, t);
    })
    return res
  }


}
