import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Vendor } from '../../app-models/Vendor';
import { VendorsService } from '../../services/vendors.service';

@Component({
  selector: 'app-new-vendor',
  templateUrl: './new-vendor.component.html',
  styleUrls: ['./new-vendor.component.css']
})
export class NewVendorComponent implements OnInit {
  vendor: Vendor;
  dialogConfig: any = {};

  constructor(public dialogRef: MatDialogRef<NewVendorComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private vendorsService: VendorsService) {
  }

  ngOnInit() {
    this.vendor = new Vendor();
  }

  signup() {
    this.vendorsService.signup(this.vendor).subscribe((response: any) => {
      if (response && !response.error) {
        this.dialogRef.close({ vendor: response.data });
      }
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
