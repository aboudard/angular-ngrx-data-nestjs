import {
  Controller,
  Get,
  Delete,
  Param,
  Body,
  Put,
  Post
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Todo } from '@todosws/api-interface';
import { TodoService } from './todo.service';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { TodoEntity } from './todo-entity';

@Controller('todo')
export class TodoController {
  constructor(private todoService: InMemoryDBService<TodoEntity>) {}

  @Get()
  findAll(): TodoEntity[] {
    return this.todoService.getAll();
  }
  @Get(':id')
  findOne(@Param('id') id): TodoEntity {
    return this.todoService.get(id);
  }
  @Post()
  async create(@Body() todo: TodoEntity) {
    this.todoService.create(todo);
    return todo;
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() updateTodo: TodoEntity): void {
    return this.todoService.update(updateTodo);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.todoService.delete(id);
  }
}
