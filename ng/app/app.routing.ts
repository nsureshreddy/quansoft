import { Routes, RouterModule } from '@angular/router';

import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProposalsComponent } from './dashboard/proposals/proposals.component';
import { ProjectSignupComponent } from './dashboard/project-signup/project-signup.component';
import { ProposalComponent } from './dashboard/proposal/proposal.component';
import { CostEstimatesComponent } from './dashboard/cost-estimates/cost-estimates.component';
import { ProjectDetailComponent } from './dashboard/project-detail/project-detail.component';
import { MastersComponent } from './masters/masters.component';
import { ResourceMastersComponent } from './masters/resource-masters.component';
import { MaterialCostsComponent } from './masters/material-costs/material-costs.component';
import { MachineriesCostsComponent } from './masters/machineries-costs/machineries-costs.component';
import { ManpowerCostsComponent } from './masters/manpower-costs/manpower-costs.component';
import { MasterSchedulesComponent } from './masters/master-schedules/master-schedules.component';
import { BillDetailComponent } from './masters/bill-detail/bill-detail.component';
import { AlwaysAuthGuard } from './services/authguard';
import { VendorsComponent } from './vendors/vendors.component';


const appRoutes: Routes = [
    
  // App routes goes here here
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: '', redirectTo: 'proposals', pathMatch: 'full' },
          { path: 'proposals', component: ProposalsComponent, pathMatch: 'full' },
          { path: 'project-signup', component: ProjectSignupComponent },
          { path: 'proposal/:jobId', component: ProposalComponent },
          { path: 'proposal/:jobId/cost-estimates', component: CostEstimatesComponent },
          { path: 'proposal-detail/:jobId', component: ProjectDetailComponent }
        ],
      },
      {
        path: 'masters',
        component: MastersComponent,
        children: [
          { path: '', redirectTo: 'schedules', pathMatch: 'full' },
          { 
            path: 'resources',
            component: ResourceMastersComponent,
            children: [
              { path: 'material-costs', component: MaterialCostsComponent, pathMatch: 'full' },
              { path: 'manpower-costs', component: ManpowerCostsComponent, pathMatch: 'full' },
              { path: 'machineries-costs', component: MachineriesCostsComponent, pathMatch: 'full' },
              { path: '', redirectTo: 'material-costs', pathMatch: 'full' },
            ]
          },
          { path: 'schedules', component: MasterSchedulesComponent, pathMatch: 'full' },
          { path: 'bill-detail', component: BillDetailComponent, pathMatch: 'full' },
        ]
      },
      {
        path: 'vendors',
        component: VendorsComponent
      },
      {
        path: 'cost-estimates',
        component: CostEstimatesComponent
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ],
    canActivate: [AlwaysAuthGuard]
  },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);