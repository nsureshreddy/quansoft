import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../../services/vendors.service';
import { ProposalService } from '../../services/proposal.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../app-models/project';

@Component({
  selector: 'app-compare-quotations',
  templateUrl: './compare-quotes.component.html',
  styleUrls: ['./compare-quotes.component.css']
})
export class CompareQuotesComponent implements OnInit {
  project: Project;
  quotations: any;

  constructor(private proposalService: ProposalService,
  private vendorsService: VendorsService, private route: ActivatedRoute) { }
  
  columnBackground: string = '#3f51b5';
  columnTextColor: string = '#fff';

  
  tiles = [
    {text: 'Cost Estimates', cols: 4, rows: 1}
  ];

  ngOnInit() {
    let jobId = +this.route.snapshot.paramMap.get('jobId');
    this.getProposal(jobId);

    this.quotations = this.vendorsService.getSelectedQuotes();
    this.quotations.forEach(element => {
      this.tiles.push({text: element.vendor, cols:4, rows: 1});
    });
    console.log(this.quotations);
  }

  getProposal(id) {
    this.proposalService.getProject(id).subscribe((project: Project)=>{
      this.project = project;
    });
  }

}