import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ScopeItem } from '../app-models/scopeItem';
import { Project } from '../app-models/project';
import { TermsAndConditions } from '../app-models/termsAndConditions';
import { PaymentTerm } from '../app-models/paymentTerms';
import { UserService } from './user.service';
import { User } from '../app-models/user';
import { CostEstimates } from '../app-models/CostEstimates';


@Injectable()
export class ProposalService {
  constructor(private http: HttpClient, private service: UserService) { }
  getProject(jobId: number) {
    return this.http.get('/api/project/' + jobId);
  }

  projectSignup(project: Project, update?: boolean) {
    if (!update) {
      return this.http.post('/api/project-signup', project);
    }
    return this.http.put('/api/project-signup', project);
  }

  getProposals(fields?: any) {
    let uri = '/api/proposals/';

    const user: User = this.service.getUser();
    uri += user._id;

    if (fields) {
      uri += '?' + this.serialize(fields);
    }
    return this.http.get(uri);
  }

  serialize(obj) {
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  }

  updateProjectProposal(scopeItems: ScopeItem[], jobId: number) {
    return this.http.post('/api/project/update-proposal/' + jobId, scopeItems);
  }

  updatePaymentTerms(terms: PaymentTerm[], jobId: number) {
    return this.http.post('/api/project/update-payment-terms/' + jobId, terms);
  }

  updateProjectTerms(terms: TermsAndConditions, jobId: number) {
    return this.http.post('/api/project/update-terms/' + jobId, terms);
  }

  updateCostEstimates(project: Project, submit: boolean) {
    return this.http.put('/api/update-costestimates/' + submit, project);
  }

  updateCostEstimatesByProjectId(id: Number, estimates: CostEstimates) {
    console.log(estimates);
    return this.http.put('/api/update-costestimates-by-id/' + id, { costEstimates: estimates });
  }

  getRevisions(id: Number, revId: String) {
    return this.http.get('/api/revisions/' + id + '/' + revId);
  }

  approveOrRejectEstimates(jobId: Number, data: any) {
    return this.http.post('/api/approve-costestimates/' + jobId, data);
  }
}
