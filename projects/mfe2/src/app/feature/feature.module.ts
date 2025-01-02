import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { Remote3ListComponent } from '../remote3-list/remote3-list.component';



@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    Remote3ListComponent
  ],
  exports: [Remote3ListComponent],
})


export class FeatureModule { }
