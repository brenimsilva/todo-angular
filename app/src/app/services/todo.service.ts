import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private taskList = new BehaviorSubject<Task[]>([
    new Task("Estudar Angular", "Framework Chatao", new Date(), new Date()),
    new Task("Estudar Service-Workers", "Trem de olhar offline", new Date(), new Date()),
    new Task("Estudar Modules e Standalone", "Diferenca entre esses dois mlks", new Date(), new Date())
  ]);
  taskList$: Observable<Task[]> = this.taskList.asObservable();
  constructor() { }

  onNewTask(t: Task) {
    this.taskList.next([...this.taskList.value, t]);
  }

}
