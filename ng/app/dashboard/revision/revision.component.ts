import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ProposalService } from '../../services/proposal.service';
import { UserService } from '../../services/user.service';
import { MastersService } from '../../services/masters.service';
import { MasterBill } from '../../app-models/MasterBill';
import { CostEstimates } from '../../app-models/CostEstimates';

@Component({
  selector: 'app-cost-estimates-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent implements OnInit {
  jobId: Number;
  revId: String;
  selectedBills: MasterBill[] = [];
  editable: String;
  columnBackground = '#3f51b5';
  columnTextColor = '#fff';
  tiles = [
    { text: 'Activity', cols: 1, rows: 1 },
    { text: 'Short Description', cols: 2, rows: 1 },
    { text: 'Description', cols: 2, rows: 1 },
    { text: 'UOM', cols: 1, rows: 1 },
    { text: 'Qty.', cols: 2, rows: 1 },
    { text: 'Rate', cols: 2, rows: 1 },
    { text: 'Amount', cols: 2, rows: 1 }
  ];

  constructor(private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public proposalService: ProposalService,
    public userService: UserService,
    public masterService: MastersService) {
  }

  ngOnInit() {
    this.jobId = +this.route.snapshot.paramMap.get('jobId');
    this.revId = this.route.snapshot.paramMap.get('revId');
    this.editable = this.route.snapshot.paramMap.get('edit');
    this.getRevision();
  }

  getRevision() {
    this.proposalService.getRevisions(this.jobId, this.revId).subscribe((data: any) => {
      if (data && data.constructor === Array && data.length > 0) {
        this.selectedBills = data[0].costEstimates.bills;
      }
    });
  }

  getTotal(activity) {
    if (activity.rate && activity.quantity) {
      activity.amount = +activity.rate * +activity.quantity;
    }
  }

  save() {
    const costEstimates = new CostEstimates({
      bills: this.selectedBills,
      lastModified: this.userService.getUser()
    });
    this.proposalService.updateCostEstimatesByProjectId(this.jobId, costEstimates).subscribe((resp: any) => {
      if (!resp.msg) {
        resp.msg = 'Cost Estimates Submitted to Builder.';
      }
      this.snackBar.open(resp.msg, 'Dismiss', {});
    });
  }
}
