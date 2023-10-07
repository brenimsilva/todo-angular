import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../models/task';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent {
  formInput : FormGroup

  constructor(private fb: FormBuilder, private formDataService: TodoService) {
    this.formInput = this.fb.group({name: "Test", description: "", date_inserted: null, date_limit: null})
  }

  submit() {
    const formData = this.formInput.value as Task;
    this.formDataService.onNewTask(formData);

  }
}
