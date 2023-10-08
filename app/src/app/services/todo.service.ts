import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private taskList = new BehaviorSubject<Task[]>([
    new Task(1,"Estudar Angular", "Framework Chatao", new Date(), new Date()),
    new Task(2,"Estudar Service-Workers", "Trem de olhar offline", new Date(), new Date()),
    new Task(3,"Estudar Modules e Standalone", "Diferenca entre esses dois mlks", new Date(), new Date())
  ]);
  taskList$: Observable<Task[]> = this.taskList.asObservable();
  constructor() { }

  onNewTask(t: Task) {
    const nextId: number = this.taskList.value.length +1
    const newList = [...this.taskList.value, {...t, id: nextId}]
    this.taskList.next(newList);
  }

  onEditTask(id: number, taskUpdated: Task) {
    console.log(taskUpdated)
    const taskIndex = this.taskList.value.findIndex(x => x.id == id);
    if(taskIndex !== -1) {
      const updatedTaskList = [...this.taskList.value];

      updatedTaskList[taskIndex] = taskUpdated;
      this.taskList.next(updatedTaskList);
    }
  }

}
