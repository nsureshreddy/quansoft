import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ScopeItem } from './app-models/scopeItem';
import { Project } from './app-models/project';
import { TermsAndConditions } from './app-models/termsAndConditions';
import { PaymentTerm } from './app-models/paymentTerms';
import { MasterSchedule } from './app-models/masterSchedule';

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
  
  getMasterSchedules() {
    return this.http.get('/api/master-schedule');
  }

  saveMasterSchedule(schedule: MasterSchedule) {
    if (schedule._id) {
      return this.http.put('/api/master-schedule', schedule);  
    }
    return this.http.post('/api/master-schedule', schedule);
  }

  deleteMasterSchedule(id) {
    return this.http.delete('/api/master-schedule/' + id);
  }

  getAllUsers() {
    return this.http.get('/api/users');
  }
}