import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { shareReplay, startWith, take, tap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(){}
  title = 'Angu';

}
