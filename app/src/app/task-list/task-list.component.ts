import { Component, OnInit} from '@angular/core';
import { Task } from '../models/task';
import { TodoService } from '../services/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditModalComponent } from '../task-edit-modal/task-edit-modal.component';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  taskList: Task[] = [];
  constructor(private formDataService: TodoService, private dialog: MatDialog){}

  ngOnInit() {
    this.formDataService.taskList$.subscribe((data) => {
      this.taskList = data;
    })
  }

  editModal(row: Task) {
    const dialogRef = this.dialog.open(TaskEditModalComponent, {data: row});
  }

  displayedColumns: string[] = ['id','nome', 'descricao', 'date_limit', 'date_inserted'];
}
