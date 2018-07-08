import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ProposalService } from '../../services/proposal.service';
import { VendorsService } from '../../services/vendors.service';
import { Project } from '../../app-models/project';
import { MasterScheduleActivity } from '../../app-models/MasterScheduleActivity';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-view-quote',
  templateUrl: './view-quote.component.html',
  styleUrls: ['./view-quote.component.css']
})
export class ViewQuoteComponent implements OnInit {

  quotation: any;
  project: Project;
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

  constructor(public snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private service: VendorsService, 
    private proposalService: ProposalService,
    private userService: UserService) { }

  ngOnInit() {
    let jobId = +this.route.snapshot.paramMap.get('jobId');
    this.getProposal(jobId);
  }

  getProposal(id) {
    this.proposalService.getProject(id).subscribe((data: Project)=>{
      this.project = data;
      let vendor = this.route.snapshot.paramMap.get('vendor');
      this.quotation = data.quotations.find((q)=>{
        return q.vendor === vendor;
      });
    });
  }
}