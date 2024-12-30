import { Routes } from '@angular/router';
// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'my-remote-app',
    loadComponent: () =>
      loadRemoteModule('remote', './AppComponent').then((m) => m.AppComponent),
  },
  {
    path: 'my-todo-list',
    loadComponent: () =>
      loadRemoteModule('remote', './TodoListComponent').then((m) => m.TodoListComponent),
  },
  {
    path: 'my-test-list',
    loadComponent: () =>
      loadRemoteModule('remote', './TestListComponent').then((m) => m.TestListComponent),
  },
];