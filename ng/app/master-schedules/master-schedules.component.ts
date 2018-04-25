import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { NewMasterComponent } from '../masters/new-master.component';
import { ProposalService } from '../proposal.service';
import { MasterSchedule } from '../app-models/masterSchedule';

@Component({
  selector: 'app-master-schedules',
  templateUrl: './master-schedules.component.html',
  styleUrls: ['./master-schedules.component.css']
})
export class MasterSchedulesComponent implements OnInit {
  masters: any = [];
  displayedColumns = ['code', 'description', 'costCode', 'costCentre', '_id'];
  mastersDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private proposalService: ProposalService) {
  }

  ngOnInit() {
    this.dataTable();
    this.getMasterSchedules();
  }

  newMasterDialog(data): void {
    var config: any = { maxWidth: '100vw', width: '100vw', height: '100%' };
    if (data) {
      config.data = data;
    }
    let dialogRef = this.dialog.open(NewMasterComponent, config);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        var index = this.masters.findIndex(function (item) {
          return item._id === data.master._id;
        });
        this.masters.splice(index, 1, data.master);
        this.dataTable();
      }
    });
  }

  dataTable() {
    this.mastersDataSource = new MatTableDataSource(this.masters);
    this.mastersDataSource.paginator = this.paginator;
  }

  getMasterSchedules() {
    this.proposalService.getMasterSchedules().subscribe((response: any) => {
      this.masters = response.data;
      this.dataTable();
    });
  }

  editMaster() {
    this.newMasterDialog(this.masters[0]);
  }

  deleteMaster(id) {
    this.proposalService.deleteMasterSchedule(id).subscribe((response: any) => {
      if (!response.error) {
        var index = this.masters.findIndex(function (item) {
          return item._id === response.data._id;
        });
        this.masters.splice(index, 1);
        this.dataTable();
      }
    });
  }
}