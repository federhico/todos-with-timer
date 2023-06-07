import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodoTimerComponent } from './todo-timer/todo-timer.component';
import { TodosRoutingModule } from './todos-routing-module';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoCardComponent,
    TodoTimerComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    TodosRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule
  ],
})
export class TodosModule { }
