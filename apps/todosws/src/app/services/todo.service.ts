import { Injectable, OnInit } from '@angular/core';
import { Todo } from '@todosws/api-interface';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends EntityCollectionServiceBase<Todo> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Todo', serviceElementsFactory);
  }
}
