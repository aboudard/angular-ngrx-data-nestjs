import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'todosws-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;
  constructor(private todosService: TodoService) {
    this.counter$ = this.todosService.count$;
  }

  ngOnInit() {}
}
