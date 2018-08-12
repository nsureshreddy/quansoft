import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatSort,
  MatPaginator,
  MatTableDataSource,
  MatDialog,
  MatSnackBar
} from '@angular/material';
import { ProposalService } from '../../../services/proposal.service';
import { Project } from '../../../app-models/project';

@Component({
  selector: 'app-tenders-list',
  templateUrl: './tenders-list.component.html',
  styleUrls: ['./tenders-list.component.css']
})
export class TendersListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['name', 'location', 'status', 'actions'];
  dataSource = new MatTableDataSource([]);
  proposals: Project[];

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private proposalService: ProposalService) { }

  ngOnInit() {
    this.proposalService.getProposals().subscribe((resp: any) => {
      if (resp && resp.constructor === Array && resp.length > 0) {
        this.proposals = resp.filter((item) => {
          return item.costEstimates && item.costEstimates.bills && item.costEstimates.bills.length > 0;
        });
        this.decorateTable();
      }
    });
  }

  decorateTable() {
    this.dataSource = new MatTableDataSource(this.proposals);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
