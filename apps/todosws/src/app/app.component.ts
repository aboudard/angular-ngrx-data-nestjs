import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@todosws/api-interface';
import { TodoService } from './services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'todosws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/hello');

  constructor(private http: HttpClient, private todoService: TodoService) {}
  ngOnInit(): void {
    this.todoService.getAll();
  }
}
