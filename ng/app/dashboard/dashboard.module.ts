import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular-material.module';
import { AppPipesModule } from '../app-pipes/app-pipes.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { PaymentTermsComponent } from './payment-terms.component';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectSignupComponent } from './project-signup.component';
import { PriceScheduleComponent } from './price-schedule.component';
import { ProposalComponent } from './proposal.component';
import { ProposalsComponent } from './projects.component';
import { TermsConditionsComponent } from './terms-conditions.component';
import { RateInputComponent } from './rate-input.component';
import { CostEstimatesComponent } from './cost-estimates.component';
import { QuantityInputComponent } from './quantity-input.component';

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
    CostEstimatesComponent,
    DashboardComponent,
    ProposalsComponent,
    ProposalComponent,
    ProjectSignupComponent,
    PriceScheduleComponent,
    ProjectDetailComponent,
    TermsConditionsComponent,
    PaymentTermsComponent,
    RateInputComponent,
    QuantityInputComponent
  ],
  entryComponents: [
    RateInputComponent,
    QuantityInputComponent
  ]
})
export class DashboardModule { }
