import { Component, OnInit, ViewChild } from '@angular/core';
import { VendorsService } from '../../services/vendors.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Vendor } from '../../app-models/Vendor';
import { ProposalService } from '../../services/proposal.service';
import { Router } from '@angular/router';
import { Project } from '../../app-models/project';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css']
})
export class QuotationsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['select', 'project', 'vendor', 'totalCost', 'status', 'actions'];
  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel<Vendor>(true, []);

  constructor(private proposalService: ProposalService,
    private vendorsService: VendorsService, private router: Router) { }
  quotations: any = [];
  project: Project;

  ngOnInit() {
    this.getQuotations();
  }

  getQuotations() {
    this.proposalService.getProposals().subscribe((resp: any) => {
      resp.forEach((proposal) => {
        if (proposal.quotations && proposal.quotations.length > 0) {
          proposal.quotations.forEach((q) => {
            q.project = proposal.client;
            q.jobId = proposal.jobId;
            q.status = 'New';
            q.totalCost = 0;
            const bills = q.bills;
            bills.forEach((bill) => {
              const activities = bill.activities;
              if (activities) {
                activities.forEach((activity) => {
                  q.totalCost += activity.quantity * activity.rate;
                });
              }
            });
            this.quotations.push(q);
          });
        }
        this.dataSource = new MatTableDataSource(this.quotations);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  compareQuotes() {
    this.vendorsService.setSelectedQuotes(this.selection.selected);
    this.router.navigate(['/vendors/compare-quotes/1528639078500']);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  decorateTable() {
    this.dataSource = new MatTableDataSource([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
