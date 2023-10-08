import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Task } from '../models/task';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://localhost:7060'
  private taskList = new BehaviorSubject<Task[]>([
  ]);
  taskList$: Observable<Task[]> = this.taskList.asObservable();
  constructor(private http: HttpClient) {
    this.onUpdateList()
  }

  onUpdateList() {
    this.getTaskList(1).subscribe((data) => {
      this.taskList.next(data.taskList);
    }, (err) => {
        console.error(err);
      });
  }

  onNewTask(t: Task) : Observable<Task> {
    t.taskId = 0;
    t.userId = 1;
    return this.http.post<Task>(`${this.apiUrl}/Task`, t);
  }

  getTaskList(userId: Number): Observable<User> {
    const user = this.http.get<User>(`${this.apiUrl}/User/${userId}`);
    return user;
  }

  onEditTask(id: number, taskUpdated: Task) {
      return this.http.put(`${this.apiUrl}/Task/${id}`, taskUpdated);
  }

}
