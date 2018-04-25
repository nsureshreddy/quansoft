import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator} from '@angular/material';

import { Project } from '../app-models/project';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
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
    this.proposalService.getProjects().subscribe(resp => {
      this.projects = resp;
      this.dataTable();
    }, err => {
    });
  }

  dataTable() {
    this.projectsDataSource = new MatTableDataSource(this.projects);
    this.projectsDataSource.paginator = this.paginator;
  }

}