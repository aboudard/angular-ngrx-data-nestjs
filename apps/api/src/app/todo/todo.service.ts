import { Injectable } from '@nestjs/common';
import { Todo, mockTodos } from '@todosws/api-interface';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  constructor() {
    this.todos = mockTodos;
  }

  create(todo: Todo) {
    this.todos.push(todo);
  }

  findAll(): Todo[] {
    return this.todos;
  }

  find(id: number): Todo {
    return this.todos.find(item => {
      return item.id == id;
    });
  }

  remove(id: number): void {
    this.todos = this.todos.filter(item => {
      return item.id != id;
    });
  }

  update(id: number, todo: Todo): Todo {
    const tmpIndex = this.todos.findIndex(obj => obj.id == id);
    const updatedObject = { ...this.todos[tmpIndex], ...todo };
    this.todos = [
      ...this.todos.slice(0, tmpIndex),
      updatedObject,
      ...this.todos.slice(tmpIndex + 1)
    ];
    return updatedObject;
  }
}
