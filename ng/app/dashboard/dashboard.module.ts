import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ProposalsComponent } from './projects.component';
import { ProjectSignupComponent } from './project-signup.component';
import { PriceScheduleComponent } from './price-schedule.component';
import { ProjectDetailComponent } from './project-detail.component';

import { AppPipesModule } from '../app-pipes/app-pipes.module';
import { TermsConditionsComponent } from './terms-conditions.component';
import { ProposalComponent } from './proposal.component';
import { PaymentTermsComponent } from './payment-terms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppPipesModule,
    AngularMaterialModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    ProposalsComponent,
    ProposalComponent,
    ProjectSignupComponent,
    PriceScheduleComponent,
    ProjectDetailComponent,
    TermsConditionsComponent,
    PaymentTermsComponent
  ]
})
export class DashboardModule { }
