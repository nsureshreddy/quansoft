import { Component, OnInit } from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { Vendor } from '../../app-models/Vendor';
import { VendorsService } from '../../services/vendors.service';
import { ProposalService } from '../../services/proposal.service';
import { Project } from '../../app-models/project';

@Component({
  selector: 'send-tender',
  templateUrl: './send-tender.component.html',
  styleUrls: ['./send-tender.component.css']
})
export class SendTenderComponent implements OnInit {

  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  proposals: any;
  selectedProposal: Project;

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

  constructor(public snackBar: MatSnackBar, private router: Router, private service:VendorsService, private proposalService: ProposalService) { }
  selectedVendors: Vendor[];

  ngOnInit() {
    this.selectedVendors = this.service.getSelectedVendors();
    this.getProposals();
  }

  getProposals() {
    this.proposalService.getProposals().subscribe((response: any)=>{
      this.proposals = response;
    });
  }

  submitTendor() {
    var emails = this.selectedVendors.map((vendor)=>{
      return vendor.email;
    });
    this.service.submitTendor(emails, this.selectedProposal.jobId).subscribe((response: any)=>{
      this.snackBar.open('Tendor Sent To Selected Vendors.', 'Dismiss', {});
      this.router.navigate(['vendors/list']);
    });
  }

  remove() {
    return;
  }

}