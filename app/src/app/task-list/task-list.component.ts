import { Component, OnInit} from '@angular/core';
import { Task } from '../models/task';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  taskList: Task[] = [];
  constructor(private formDataService: TodoService){}

  ngOnInit() {
    this.formDataService.taskList$.subscribe((data) => {
      this.taskList = data;

    })
  }
  displayedColumns: string[] = ['nome', 'descricao'];
}
