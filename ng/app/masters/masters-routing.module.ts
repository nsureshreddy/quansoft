import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MastersComponent } from './masters.component';
import { MasterSchedulesComponent } from '../master-schedules/master-schedules.component';

const routes: Routes = [
  {
    path: 'masters',
    component: MastersComponent,
    children: [
      { path: '', redirectTo: 'schedules', pathMatch: 'full' },
      { path: 'schedules', component: MasterSchedulesComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
