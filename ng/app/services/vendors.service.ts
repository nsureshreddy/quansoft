import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VendorsService {
  
  constructor(private http: HttpClient) { }

  signup(vendor) {
    return this.http.post('/api/vendor', vendor);
  }

  getVendors() {
    return this.http.get('/api/vendor');
  }
}