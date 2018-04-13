import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProposalsComponent } from './projects.component';
import { ProposalComponent } from './proposal.component';
import { ProjectSignupComponent } from './project-signup.component';
import { ProjectDetailComponent } from './project-detail.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'proposals', pathMatch: 'full' },
      { path: 'proposals', component: ProposalsComponent, pathMatch: 'full' },
      { path: 'project-signup', component: ProjectSignupComponent },
      { path: 'proposal/:jobId', component: ProposalComponent },
      { path: 'proposal-detail/:jobId', component: ProjectDetailComponent }
    ]
    //canActivate: [AlwaysAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}