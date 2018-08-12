import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProposalsComponent } from './dashboard/proposals/proposals.component';
import { ProjectSignupComponent } from './dashboard/project-signup/project-signup.component';
import { ProposalComponent } from './dashboard/proposal/proposal.component';
import { CostEstimatesComponent } from './cost-estimates/cost-estimates.component';
import { ProjectDetailComponent } from './dashboard/project-detail/project-detail.component';
import { MastersComponent } from './masters/masters.component';
import { ResourceMastersComponent } from './masters/resource-masters.component';
import { MaterialCostsComponent } from './masters/material-costs/material-costs.component';
import { MachineriesCostsComponent } from './masters/machineries-costs/machineries-costs.component';
import { ManpowerCostsComponent } from './masters/manpower-costs/manpower-costs.component';
import { MasterSchedulesComponent } from './masters/master-schedules/master-schedules.component';
import { BillDetailComponent } from './masters/bill-detail/bill-detail.component';
import { AlwaysAuthGuard } from './services/auth.guard';
import { VendorsComponent } from './vendors/vendors.component';
import { VendorsListComponent } from './vendors/list/vendors-list.component';
import { SendTenderComponent } from './vendors/send-tender/send-tender.component';
import { QuotationsComponent } from './vendors/quotations/quotations.component';
import { CostEstimatesListComponent } from './cost-estimates/list/cost-estimates-list.component';
import { CostEstimatesProposalComponent } from './cost-estimates/proposal/cost-estimates-proposal.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { TendersComponent } from './dashboard/tenders/tenders.component';
import { TendersListComponent } from './dashboard/tenders/tenders-list/tenders-list.component';
import { SendQuoteComponent } from './dashboard/tenders/send-quote/send-quote.component';
import { ViewQuoteComponent } from './vendors/view-quotation/view-quote.component';
import { CompareQuotesComponent } from './vendors/compare-quotes/compare-quotes.component';
import { UsersComponent } from './dashboard/users/users.component';
import { AdminGuard } from './services/admin.guard';
import { SessionResolver } from './services/session.resolver';
import { RevisionsComponent } from './dashboard/revisions/revisions.component';
import { RevisionComponent } from './dashboard/revision/revision.component';
import { ProjectEditComponent } from './dashboard/project-edit/project-edit.component';

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
          { path: 'proposal-detail/:jobId', component: ProjectDetailComponent },
          { path: 'project/edit/:jobId', component: ProjectSignupComponent },
          {
            path: 'tenders',
            component: TendersComponent,
            children: [
              { path: 'list', component: TendersListComponent },
              { path: 'send-quote/:jobId', component: SendQuoteComponent },
              { path: '', redirectTo: 'list', pathMatch: 'full' },
            ]
          },
          { path: 'users', component: UsersComponent, pathMatch: 'full', canActivate: [AdminGuard] }
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
        component: VendorsComponent,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: VendorsListComponent, pathMatch: 'full' },
          { path: 'send-tender', component: SendTenderComponent, pathMatch: 'full' },
          { path: 'quotations', component: QuotationsComponent, pathMatch: 'full' },
          { path: 'view-quote/:jobId/:vendor', component: ViewQuoteComponent, pathMatch: 'full' },
          { path: 'compare-quotes/:jobId', component: CompareQuotesComponent, pathMatch: 'full' }
        ]
      },
      {
        path: 'cost-estimates',
        component: CostEstimatesComponent,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: CostEstimatesListComponent, pathMatch: 'full' },
          { path: 'proposal/:jobId', component: CostEstimatesProposalComponent },
          { path: 'revisions/:jobId', component: RevisionsComponent },
          { path: 'revision/:jobId/:revId', component: RevisionComponent },
          { path: 'revision/:jobId/:revId/:edit', component: RevisionComponent },
        ]
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ],
    canActivate: [AlwaysAuthGuard],
    resolve: {
      user: SessionResolver
    }
  },
  { path: 'login', component: LoginComponent },
  { path: 'auth/:token', component: AuthenticationComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
