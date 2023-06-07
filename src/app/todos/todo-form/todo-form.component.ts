import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Priority, Todo } from '../Todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  editionMode = false;

  todoForm = new FormGroup({
    titleFormControl : new FormControl('', Validators.required),
    descriptionFormControl : new FormControl('', Validators.required),
    priorityFormControl : new FormControl('', Validators.required),
  });

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params) {
        if(params['id']) {
          this.editionMode = true;
          this.todoService.getTodoById(params['id']).subscribe((todo)=>{
            this.todoForm.controls.titleFormControl.setValue((todo.title) ? todo.title : '');
            this.todoForm.controls.descriptionFormControl.setValue((todo.description) ? todo.description : '');
            this.todoForm.controls.priorityFormControl.setValue((todo.priority) ? todo.priority.toString() : '');
          })
        }
      }
    });
  }

  priorities:string[] = ['High','Medium','Low']



 create() {
    const title = this.todoForm.controls.titleFormControl.value?.toString();
    const description = this.todoForm.controls.descriptionFormControl.value?.toString();
    const priority = (this.todoForm.controls.priorityFormControl.value) ? parseFloat(this.todoForm.controls.priorityFormControl.value) : 0;
    const newTodo:Todo =
    {
      title,
      description,
      priority,
      spent: 0,
    }
    this.todoService.newTodo(newTodo).subscribe((todo)=>{
      this.todoForm.reset();
    });
  }
}
