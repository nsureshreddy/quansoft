import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { routing } from './app.routing';

import { ProposalsComponent } from './dashboard/proposals/proposals.component';
import { ProjectSignupComponent } from './dashboard/project-signup/project-signup.component';
import { ProposalComponent } from './dashboard/proposal/proposal.component';
import { CostEstimatesComponent } from './dashboard/cost-estimates/cost-estimates.component';
import { ProjectDetailComponent } from './dashboard/project-detail/project-detail.component';
import { PriceScheduleComponent } from './dashboard/price-schedule/price-schedule.component';
import { PaymentTermsComponent } from './dashboard/payment-terms/payment-terms.component';
import { TermsConditionsComponent } from './dashboard/terms-conditions/terms-conditions.component';
import { QuantityInputComponent } from './dashboard/quantity-input/quantity-input.component';

import { MastersComponent } from './masters/masters.component';
import { ResourceMastersComponent } from './masters/resource-masters.component';
import { MachineriesCostsComponent } from './masters/machineries-costs/machineries-costs.component';
import { ManpowerCostsComponent } from './masters/manpower-costs/manpower-costs.component';
import { MaterialCostsComponent } from './masters/material-costs/material-costs.component';
import { MasterSchedulesComponent } from './masters/master-schedules/master-schedules.component';
import { BillDetailComponent } from './masters/bill-detail/bill-detail.component';
import { RateInputComponent } from './masters/rate-input/rate-input.component';
import { NewMasterComponent } from './masters/new-master/new-master.component';
import { AppPipesModule } from './app-pipes/app-pipes.module';

import { ProposalService } from './services/proposal.service';
import { MastersService } from './services/masters.service';
import { AlwaysAuthGuard } from './services/authguard';
import { LoginService } from './services/login.service';
import { VendorsService } from './services/vendors.service';
import { VendorsComponent } from './vendors/vendors.component';
import { NewVendorComponent } from './vendors/signup/new-vendor.component';
import { VendorsListComponent } from './vendors/list/vendors-list.component';
import { SendQuoteComponent } from './vendors/send-quote/send-quote.component';
import { QuotationsComponent } from './vendors/quotations/quotations.component';

@NgModule({
  
  imports:      [ 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    AppPipesModule,
    routing
  ],

  declarations: [ 
    AppComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    AppHeaderComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    LoginComponent,
    DashboardComponent,
    MastersComponent,
    ResourceMastersComponent,
    MaterialCostsComponent,
    MachineriesCostsComponent,
    ManpowerCostsComponent,
    MasterSchedulesComponent,
    BillDetailComponent,
    NewMasterComponent,
    PriceScheduleComponent,
    ProposalsComponent,
    ProjectSignupComponent,
    ProposalComponent,
    CostEstimatesComponent,
    ProjectDetailComponent,
    QuantityInputComponent,
    RateInputComponent,
    TermsConditionsComponent,
    PaymentTermsComponent,
    VendorsComponent,
    VendorsListComponent,
    SendQuoteComponent,
    QuotationsComponent,
    NewVendorComponent
  ],
  providers: [
    ProposalService,
    MastersService,
    VendorsService,
    LoginService,
    AlwaysAuthGuard
  ],
  entryComponents: [
    NewMasterComponent,
    RateInputComponent,
    QuantityInputComponent,
    NewVendorComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
