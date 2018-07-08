import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { forkJoin } from "rxjs";

import { ScopeItem } from '../app-models/scopeItem';
import { Project } from '../app-models/project';
import { TermsAndConditions } from '../app-models/termsAndConditions';
import { PaymentTerm } from '../app-models/paymentTerms';
import { MasterSchedule } from '../app-models/masterSchedule';
import { MasterResource } from '../app-models/masterResource';


@Injectable()
export class ProposalService {
  
  constructor(private http: HttpClient) { }

  getProject(jobId: number) {
    return this.http.get('/api/project/' + jobId);
  }

  projectSignup(project: Project) {
    return this.http.post('/api/project-signup', project);
  }

  getProposals() {
    return this.http.get('/api/proposals');
  }
  
  updateProjectProposal(scopeItems: ScopeItem[], jobId: number) {
    return this.http.post('/api/project/update-proposal/' + jobId, scopeItems);
  }

  updatePaymentTerms(terms:PaymentTerm[], jobId:number) {
    return this.http.post('/api/project/update-payment-terms/' + jobId, terms);
  }

  updateProjectTerms(terms: TermsAndConditions, jobId: number) {
    return this.http.post('/api/project/update-terms/' + jobId, terms);
  }

  updateProject(project: Project) {
    return this.http.put('/api/update-project', project);
  }
  
  getAllUsers() {
    return this.http.get('/api/users');
  }

  updateUser(user) {
    return this.http.put('/api/update-user', user);
  }
}