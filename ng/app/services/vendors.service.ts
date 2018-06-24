import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from '../app-models/Vendor';

@Injectable()
export class VendorsService {
  selectedVendors: Vendor[];
  constructor(private http: HttpClient) { }

  signup(vendor) {
    return this.http.post('/api/vendor', vendor);
  }

  getVendors() {
    return this.http.get('/api/vendor');
  }

  sendTendors(vendors: Vendor[]) {
    return this.http.post('/api/submit-tendor',{vendors: vendors});
  }

  setSelectedVendors(list: Vendor[]) {
    this.selectedVendors = list;
  }

  getSelectedVendors() {
    return this.selectedVendors;
  }
}