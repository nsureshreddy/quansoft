import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatDialog, MatSort, MatPaginator, MatTableDataSource }from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Vendor } from '../../app-models/Vendor';
import { VendorsService } from '../../services/vendors.service';
import { NewVendorComponent } from '../signup/new-vendor.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.css']
})
export class VendorsListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['select', 'organization', 'email', 'established', 'annualTurnover'];
  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel<Vendor>(true, []);
  vendor: Vendor;
  vendors: Vendor[] = [];
  selectedVendor: Vendor;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar,  private router: Router, private vendorsService: VendorsService) { }

  ngOnInit() {
    this.getVendors();
  }

  getVendors() {
    this.decorateTable();
    this.vendorsService.getVendors().subscribe((resp:any) => {
      if (resp && !resp.error) {
        this.vendors = resp.data;
        this.decorateTable();
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  detail(vendor: Vendor) {
    this.selectedVendor = vendor;
  }

  newVendor() {
    let dialog = this.dialog.open(NewVendorComponent, {panelClass: 'new-master-dialog'});

    dialog.afterClosed().subscribe(data => {
      if(data && data.vendor) {
        this.vendors.push(data.vendor);
        this.snackBar.open('Vendor Registration Completed.', 'Dismiss', {});
        this.decorateTable();
      }
    });
  }

  sendQuote() {
    this.vendorsService.setSelectedVendors(this.selection.selected);
    this.router.navigate(['vendors/send-quote']);
  }

  decorateTable() {
    this.dataSource = new MatTableDataSource(this.vendors);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}