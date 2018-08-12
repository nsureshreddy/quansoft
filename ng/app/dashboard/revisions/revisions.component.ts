import { Component, OnInit, ViewChild } from '@angular/core';
import { ProposalService } from '../../services/proposal.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { MatSort, MatPaginator, MatTableDataSource } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-revisions',
  templateUrl: './revisions.component.html',
  styleUrls: ['./revisions.component.css']
})
export class RevisionsComponent implements OnInit {

  displayedColumns = ['revNo', 'costEstimates', 'approvedTimestamp', 'submittedTimestamp', 'status', 'comments', 'actions'];
  dataSource = new MatTableDataSource([]);
  jobId: Number;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: ActivatedRoute,
    private service: ProposalService) { }

  ngOnInit() {
    this.jobId = +this.route.snapshot.paramMap.get('jobId');
    this.service.getRevisions(this.jobId, '').subscribe((response: any) => {
      if (response) {
        response = response.sort((a, b) => {
          return a.submittedTimestamp <= b.submittedTimestamp;
        });
        let revNo = response.length;
        response = response.map((a) => {
          a.revNo = revNo--;
          return a;
        });
      }
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
