import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewMasterComponent } from '../../masters/new-master/new-master.component';
import { MastersService } from '../../services/masters.service';
import { MasterBill } from '../../app-models/MasterBill';
import { MasterSchedule } from '../../app-models/masterSchedule';

@Component({
  selector: 'app-master-schedules',
  templateUrl: './master-schedules.component.html',
  styleUrls: ['./master-schedules.component.css']
})
export class MasterSchedulesComponent implements OnInit {
  masters: MasterSchedule[] = [];
  
  constructor(public dialog: MatDialog, private masterService: MastersService) {
  }

  ngOnInit() {
    this.getMasterSchedules();
  }

  getMasterSchedules() {
    this.masterService.getMasterSchedules().subscribe((response: any) => {
      this.masters = response.data;
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
      }
    });
  }
  
  findIndexById(_id) {
    return this.masters.findIndex((item) => {
      return item._id === _id;
    });
  }

}