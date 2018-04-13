import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ScopeItem } from './app-models/scopeItem';
import { Project } from './app-models/project';
import { TermsAndConditions } from './app-models/termsAndConditions';
import { PaymentTerm } from './app-models/paymentTerms';

@Injectable()
export class ProposalService {
  scopeItems: ScopeItem[];
  constructor(private http: HttpClient) { }

  getProject(jobId: number) {
    return this.http.get('/api/project/' + jobId);
  }

  projectSignup(project:Project) {
    return this.http.post('/api/project-signup', project);
  }

  getProjects() {
    return this.http.get('/api/projects');
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

  getAllUsers() {
    return this.http.get('/api/users');
  }
}