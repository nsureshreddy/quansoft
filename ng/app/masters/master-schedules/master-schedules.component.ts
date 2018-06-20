import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';

import { MastersService } from '../../services/masters.service';
import { MasterSchedule } from '../../app-models/masterSchedule';
import { MasterBill } from '../../app-models/MasterBill';
import { NewMasterComponent } from '../new-master/new-master.component';

@Component({
  selector: 'app-master-schedules',
  templateUrl: './master-schedules.component.html',
  styleUrls: ['./master-schedules.component.css']
})
export class MasterSchedulesComponent implements OnInit {
  masters: MasterSchedule[] = [];
  displayedColumns = ['code', 'description', 'bills', '_id'];
  mastersDataSource;
  selectedBill: MasterBill;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private masterService: MastersService) {
  }

  ngOnInit() {
    this.getMasterSchedules();
    this.dataTable();
  }

  getMasterSchedules() {
    this.masterService.getMasterSchedules().subscribe((response: any) => {
      this.masters = response.data;
      this.dataTable();
    });
  }

  editMaster(id) {
    var index = this.findIndexById(id);
    this.newMasterDialog(this.masters[index]);
  }

  deleteMaster(_id) {
    this.masterService.deleteMasterSchedule(_id).subscribe((response: any) => {
      var _id = response.data && response.data._id;
      if (_id) {
        var index = this.findIndexById(_id);
        this.masters.splice(index, 1);
        this.dataTable();
      }
    });
  }

  newMasterDialog(data): void {
    var config: any = { panelClass: 'new-master-dialog'};
    if (data) {
      config.data = data;
    }
    let dialog = this.dialog.open(NewMasterComponent, config);

    dialog.afterClosed().subscribe(data => {
      if (data) {
        var index = this.findIndexById(data.master._id);
        this.masters.splice(index, 1, data.master);
        this.dataTable();
      }
    });
  }

  dataTable() {
    this.mastersDataSource = new MatTableDataSource(this.masters);
    this.mastersDataSource.paginator = this.paginator;
  }
  
  findIndexById(_id) {
    return this.masters.findIndex((item) => {
      return item._id === _id;
    });
  }

  viewDetailedBill(bill: MasterBill) {
    console.log(bill);
    this.selectedBill = bill;
  }
}