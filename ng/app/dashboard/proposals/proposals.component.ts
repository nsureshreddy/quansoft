import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ProposalService } from '../../services/proposal.service';

@Component({
  selector: 'app-projects',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit {

  projects: any = [];
  displayedColumns = ['name', 'client', 'location', 'region', 'type', 'stage', 'scope', 'jobId'];
  projectsDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private proposalService: ProposalService) { }

  ngOnInit() {
    this.dataTable();
    this.get();
  }

  get() {
    this.proposalService.getProposals().subscribe(resp => {
      this.projects = resp;
      this.dataTable();
    });
  }

  dataTable() {
    this.projectsDataSource = new MatTableDataSource(this.projects);
    this.projectsDataSource.paginator = this.paginator;
  }

}