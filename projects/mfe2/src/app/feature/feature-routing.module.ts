import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Remote3ListComponent } from '../remote3-list/remote3-list.component';

const routes: Routes = [
  {
    path: '',
    component: Remote3ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
