import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent {

  constructor(private todoService:TodoService) {

  }

  @Input() item!: Todo;
  @Output() onDelete = new EventEmitter<string>();


  deleteTodo(item:Todo) {
    this.todoService.deleteTodo(item.id).subscribe((deleted)=>{
      this.onDelete.emit(item.id);
    })
  }

  updateTime(event:number, item:Todo) {
    item.spent = (item.spent) ? item.spent + event : event
    item.inProgress=true;
    this.todoService.updateSpentTime(item).subscribe((updated)=>{
      console.log(updated)
    })
  }
}
