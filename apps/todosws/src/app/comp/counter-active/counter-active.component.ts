import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import { Todo } from '@todosws/api-interface';

@Component({
  selector: 'todosws-counter-active',
  templateUrl: './counter-active.component.html',
  styleUrls: ['./counter-active.component.css']
})
export class CounterActiveComponent implements OnInit {
  filteredTodos$: Observable<Todo[]>;
  constructor(private todoService: TodoService) {
    this.todoService.setFilter(true);
    this.filteredTodos$ = this.todoService.filteredEntities$;
  }

  ngOnInit() {}
}
