import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from '../app-models/Vendor';
import { CostEstimates } from '../app-models/CostEstimates';

@Injectable()
export class VendorsService {
  selectedVendors: Vendor[];
  selectedQuotes: any;
  constructor(private http: HttpClient) { }

  signup(vendor) {
    return this.http.post('/api/vendor', vendor);
  }

  getVendors() {
    return this.http.get('/api/vendor');
  }
  
  submitTendor(vendors: string[], jobId) {
    return this.http.post('/api/submit-tendor',{ vendors: vendors, jobId: jobId });
  }

  submitQuotation(estimates: CostEstimates, jobId: string) {
    return this.http.post('/api/submit-quote', {estimates: estimates, jobId: jobId});
  }

  setSelectedVendors(list: Vendor[]) {
    this.selectedVendors = list;
  }

  getSelectedVendors() {
    return this.selectedVendors;
  }

  setSelectedQuotes(list: any) {
    this.selectedQuotes = list;
  }

  getSelectedQuotes() {
    return this.selectedQuotes;
  }

  getQuotations() {
    return this.http.get('/api/proposals');
  }
}