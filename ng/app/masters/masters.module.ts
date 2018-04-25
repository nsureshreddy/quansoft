import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material.module';
import { MastersRoutingModule } from './masters-routing.module';

import { MastersComponent } from './masters.component';

import { MasterSchedulesComponent } from '../master-schedules/master-schedules.component';
import { NewMasterComponent } from './new-master.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MastersRoutingModule,
    AngularMaterialModule
  ],
  declarations: [
    MastersComponent,
    MasterSchedulesComponent,
    NewMasterComponent
  ],
  entryComponents: [
    NewMasterComponent
  ]
})
export class MastersModule { }
