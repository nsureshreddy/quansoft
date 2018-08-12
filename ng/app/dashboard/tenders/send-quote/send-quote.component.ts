import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ProposalService } from '../../../services/proposal.service';
import { VendorsService } from '../../../services/vendors.service';
import { Project } from '../../../app-models/project';
import { MasterScheduleActivity } from '../../../app-models/MasterScheduleActivity';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-send-quote',
  templateUrl: './send-quote.component.html',
  styleUrls: ['./send-quote.component.css']
})
export class SendQuoteComponent implements OnInit {

  selectedProposal: Project;

  columnBackground = '#3f51b5';
  columnTextColor = '#fff';

  tiles = [
    { text: 'Cost Code', cols: 1, rows: 1 },
    { text: 'Cost Centre', cols: 1, rows: 1 },
    { text: 'Activity', cols: 1, rows: 1 },
    { text: 'Short Description', cols: 2, rows: 1 },
    { text: 'Description', cols: 2, rows: 1 },
    { text: 'UOM', cols: 1, rows: 1 },
    { text: 'Qty.', cols: 1, rows: 1 },
    { text: 'Rate', cols: 1, rows: 1 },
    { text: 'Amount', cols: 1, rows: 1 }
  ];

  constructor(public snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private service: VendorsService,
    private proposalService: ProposalService,
    private userService: UserService) { }

  ngOnInit() {
    const jobId = +this.route.snapshot.paramMap.get('jobId');
    this.getProposal(jobId);
  }

  getProposal(id) {
    this.proposalService.getProject(id).subscribe((data: Project) => {
      const bills = data.costEstimates && data.costEstimates.bills || [];
      bills.forEach((bill) => {
        const activities = bill.activities || [];
        activities.forEach((activity) => {
          delete activity.rate;
          delete activity.amount;
        });
      });
      data.costEstimates.bills = bills;
      this.selectedProposal = data;
    });

  }

  calculateAmount(activity: MasterScheduleActivity) {
    if (activity.rate) {
      activity.amount = activity.quantity * activity.rate;
    }
  }

  submitQuote() {
    this.selectedProposal.costEstimates.vendor = this.userService.getUser().email;
    this.service.submitQuotation(this.selectedProposal.costEstimates, this.selectedProposal.jobId)
      .subscribe((response: any) => {
        this.snackBar.open('Quotation Submitted.', 'Dismiss', {});
        this.router.navigate(['dashboard/tenders']);
      });
  }

}
