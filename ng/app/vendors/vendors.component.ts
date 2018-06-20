import { Component, OnInit } from '@angular/core';
import { Vendor } from '../app-models/Vendor';
import { MatSnackBar } from '@angular/material';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { VendorsService } from '../services/vendors.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  vendor: Vendor;
  vendorSignup: boolean;
  vendors: Vendor[] = [];
  selectedVendor: Vendor;

  constructor(private vendorsService: VendorsService, private bottomSheet: MatBottomSheet, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getVendors();
  }

  getVendors() {
    this.vendorsService.getVendors().subscribe(resp => {
      if (resp && !resp['error']) {
        this.vendors = resp['data'];
      }   
    });
  }

  openBottomSheet(): void {
    let bottomSheet = this.bottomSheet.open(SortBottomSheet);
    bottomSheet.afterDismissed().subscribe(result=>{
      this.vendors.sort(function(a,b){
        if(a[result] > b[result]){
          return -1;
        } else {
          return 1;
        }
      });
    });
  }

  detail(vendor: Vendor) {
    this.vendorSignup = false;
    this.selectedVendor = vendor;
  }

  signup() {
    this.vendorsService.signup(this.vendor).subscribe(resp => {
      if (resp && !resp['error']) {
        this.snackBar.open('Vendor Registration Completed.', 'Dismiss', {});
        this.vendorSignup = false;
        this.vendors.push(resp['data']);
      }
    });
  }

  newVendor() {
    this.selectedVendor = null;
    this.vendor = new Vendor();
    this.vendorSignup = true;
  }

  cancel() {
    this.vendorSignup = false;
  }

}

@Component({
  selector: 'sort-bottom-sheet',
  templateUrl: './sort-bottom-sheet.html',
})
export class SortBottomSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<SortBottomSheet>) {}

  sortBy(field: String): void {
    this.bottomSheetRef.dismiss(field);
    event.preventDefault();
  }
}