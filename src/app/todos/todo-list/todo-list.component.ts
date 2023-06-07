import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TodoService } from '../todo.service';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  searchValue?:string;
  todos$: Observable<Todo[]> = new Observable<Todo[]>();

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }
}
