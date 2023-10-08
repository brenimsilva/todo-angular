import { Component, Inject } from '@angular/core';
import { Task } from '../models/task';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoService } from '../services/todo.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'task-edit-modal',
  templateUrl: './task-edit-modal.component.html',
  styleUrls: ['./task-edit-modal.component.css']
})
export class TaskEditModalComponent {
  formInput : FormGroup

  constructor(private fb: FormBuilder, private service: TodoService, private dialogRef: MatDialogRef<TaskEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task){
    this.formInput = this.fb.group({taskId: data.taskId, taskTitle: data.taskTitle,
      taskDescription: data.taskDescription, date_inserted: data.date_inserted, date_limit: data.date_limit}) }

  modalEdit(t: Task){
    const formData = this.formInput.value as Task;
    this.service.onEditTask(t.taskId, formData).subscribe((response) => {
      this.service.onUpdateList();
    });
  }
 }
