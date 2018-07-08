import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ProposalService } from '../../services/proposal.service';

@Component({
  selector: 'app-cost-estimates-list',
  templateUrl: './cost-estimates-list.component.html',
  styleUrls: ['./cost-estimates-list.component.css']
})
export class CostEstimatesListComponent implements OnInit {  
  
  displayedColumns = ['name', 'client', 'location', 'actions'];
  dataSource = new MatTableDataSource([]);
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, public proposalService: ProposalService) { }

  ngOnInit() {
    this.getProposals();
  }

  getProposals() {
    this.proposalService.getProposals().subscribe((resp:any) => {
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}