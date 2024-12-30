import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TestListComponent } from './test-list/test-list.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'todo-list',
    component: TodoListComponent,
  },
  {
    path: 'test-list',
    component: TestListComponent,
  },
];
