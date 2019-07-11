import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '@todosws/api-interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'todosws-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;
  constructor(private todoService: TodoService) {
    this.todos$ = todoService.entities$;
  }

  ngOnInit() {
    this.getTodos();
  }
  getTodos() {
    this.todoService.getAll();
  }
  deleteTodo(todoId: number) {
    this.todoService.delete(todoId);
  }

  updateTodo(todo: Todo) {
    todo.active = !todo.active;
    this.todoService.update(todo);
  }

  editTodo(id: number) {
    alert('not implemented yet');
  }
}
