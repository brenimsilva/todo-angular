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
    this.formInput = this.fb.group({id: null, name: "", description: "", date_inserted: null, date_limit: null}) }

  modalEdit(t: Task){
    const formData = this.formInput.value as Task;
    this.service.onEditTask(t.id, formData);
  }
 }
