import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _todoService: TodoService){}

  ngOnInit(): void {

    this._todoService.onUpdateList();
  }


}
