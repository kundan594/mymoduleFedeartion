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
    path: 'app-test',
    loadComponent: () =>
      loadRemoteModule('remote', './AppComponent').then((m) => m.AppComponent),
  },
  {
    path: 'my-test-list',
    loadComponent: () =>
      loadRemoteModule('remote', './TestListComponent').then((m) => m.TestListComponent),
  },
  {
    path: 'remote2',
    loadComponent: () =>
      loadRemoteModule('remote2', './Remote2ListComponent').then((m) => m.Remote2ListComponent),
  },
  {
    path: 'feature',
    loadChildren: () =>
      loadRemoteModule({      
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        exposedModule: './FeatureModule',
      }).then((m) => m.FeatureModule),
  },
  
  
];