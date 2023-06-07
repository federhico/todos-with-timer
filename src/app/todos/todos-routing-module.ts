import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

const routes: Routes = [
 {path: '', component: TodoListComponent},
 {path: 'new', component: TodoFormComponent},
 {path: 'edit/:id', component: TodoFormComponent},
 { path: '**' , redirectTo: '' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
