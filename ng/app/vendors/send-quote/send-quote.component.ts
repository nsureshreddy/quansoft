import { Component, OnInit } from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { Vendor } from '../../app-models/Vendor';
import { MasterSchedule } from '../../app-models/masterSchedule';
import { VendorsService } from '../../services/vendors.service';
import { MastersService } from '../../services/masters.service';

@Component({
  selector: 'send-quote',
  templateUrl: './send-quote.component.html',
  styleUrls: ['./send-quote.component.css']
})
export class SendQuoteComponent implements OnInit {

  masters: MasterSchedule[];
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  proposals: any = [{"scope":["Cost Estimates","Contracts Management","Bill Auditing"],"participants":["Fire Fighting","Structural","Landscape","Electrical"],"_id":"5b1d2e66b537de1b042475f1","name":"Micro Labs","client":"Micro Labs","region":"White Fields","location":"Bengaluru","siteArea":10000,"builtupArea":20000,"numberOfFloors":10,"numberOfBuildings":10,"startDate":"2018-06-06T18:30:00.000Z","endDate":"2018-06-10T18:30:00.000Z","type":"Commercial","stage":"New","fsi":"5000","paymentTerms":[],"scopeItems":[],"jobId":"1528639078500","__v":0},{"scope":[],"participants":[],"_id":"5b1d36d219f9001e74d097fc","name":"Project 3","client":"Client 3","region":"","location":"","siteArea":null,"builtupArea":null,"numberOfFloors":null,"numberOfBuildings":null,"startDate":null,"endDate":null,"type":"","stage":"New","fsi":"","paymentTerms":[],"scopeItems":[],"jobId":"1528641234355","__v":0},{"scope":[],"participants":[],"_id":"5b20bdc08d850f3e10a0af27","name":"hjash","client":"jhj","region":"","location":"","siteArea":null,"builtupArea":null,"numberOfFloors":null,"numberOfBuildings":null,"startDate":null,"endDate":null,"type":"","stage":"New","fsi":"","paymentTerms":[],"scopeItems":[],"jobId":"1528872384176","__v":0},{"scope":[],"participants":["Structural","Landscape","Electrical"],"_id":"5b20bde88d850f3e10a0af28","name":"tyt","client":"tyty","region":"tyty","location":"ytyt","siteArea":null,"builtupArea":null,"numberOfFloors":null,"numberOfBuildings":null,"startDate":null,"endDate":null,"type":"","stage":"New","fsi":"","paymentTerms":[],"scopeItems":[],"jobId":"1528872424387","__v":0}];

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  columnBackground: string = '#3f51b5';
  columnTextColor: string = '#fff';

  tiles = [
    {text: 'Cost Code', cols: 1, rows: 1},
    {text: 'Cost Centre', cols: 1, rows: 1},
    {text: 'Activity', cols: 1, rows: 1 },
    {text: 'Short Description', cols: 2, rows: 1 },
    {text: 'Description', cols: 2, rows: 1},
    {text: 'UOM', cols: 1, rows: 1},
    {text: 'Qty.', cols: 1, rows: 1},
    {text: 'Rate', cols: 1, rows: 1},
    {text: 'Amount', cols: 1, rows: 1}
  ];

  constructor(public snackBar: MatSnackBar, private router: Router, private service:VendorsService, private masterService: MastersService) { }
  selectedVendors: Vendor[];

  ngOnInit() {
    this.selectedVendors = this.service.getSelectedVendors();
    this.getMasters();
  }

  getMasters() {
    this.masterService.getMasterSchedules().subscribe((response: any)=>{
      this.masters = response.data;
    });
  }

  submitTendor() {
    this.service.sendTendors(this.selectedVendors).subscribe((response: any)=>{
      this.snackBar.open('Quote Sent To Selected Vendors.', 'Dismiss', {});
      this.router.navigate(['vendors/list']);
    });
  }

  remove() {
    return;
  }

}