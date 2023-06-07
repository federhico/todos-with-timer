import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private API_ENDPOINT = 'http://localhost:3000/';

  public todos$: Observable<Todo[]> = new Observable<Todo[]>();

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_ENDPOINT + 'todos');
  }

  getTodoById(id:string): Observable<Todo> {
    return this.http.get<Todo>(this.API_ENDPOINT + 'todos/' + id);
  }

  newTodo(todo: Todo):Observable<Todo> {
    return this.http.post<Todo>(this.API_ENDPOINT + 'todos', todo);
  }

  deleteTodo(id?:string) {
    return this.http.delete<Todo>(this.API_ENDPOINT + 'todos/' + id);
  }

  updateSpentTime(todo:Todo):Observable<Todo> {;
    return this.http.put<Todo>(this.API_ENDPOINT + 'todos/' + todo.id, todo);
  }
}
