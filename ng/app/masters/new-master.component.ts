import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MasterScheduleActivity } from '../app-models/MasterScheduleActivity';
import { MasterSchedule } from '../app-models/masterSchedule';
import { ProposalService } from '../proposal.service';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-new-master',
  templateUrl: './new-master.component.html',
  styleUrls: ['./new-master.component.css']
})
export class NewMasterComponent implements OnInit {
  schedule: MasterSchedule;
  constructor(public dialogRef: MatDialogRef<NewMasterComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private proposalService: ProposalService) {
  }

  ngOnInit() {
    this.schedule = this.data || new MasterSchedule();
  }

  addActivity() {
    if (!this.schedule.activities) {
      this.schedule.activities = new Array<MasterScheduleActivity>();
    }
    var length = this.schedule.activities.length;
    var o = Object.assign(new MasterScheduleActivity, {});

    this.schedule.activities[length] = o;
  }

  onFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      console.log('Can\'t upload multiple file')
      return;
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      var masterData = [];
      this.data = <XLSX.AOA2SheetOpts>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      var rowCount = this.data.length;
      var columns = this.data[2];
      for (var i = 3; i <= rowCount;) {
        if (this.data[i] && this.data[i].length == 1) {
          var category: any = {};
          category.name = this.data[i][0];
          category.activities = [];
          i += 1;
          while (this.data[i].length > 1 && i <= rowCount) {
            var o = this.getObject(columns, this.data[i]);
            category.activities.push(o);
            i += 1;
          }
          masterData.push(category);
        } else {
          i++;
        }
      }
    };
    reader.readAsBinaryString(target.files[0]);
  }

  getObject(keys, values) {
    var object = {};
    keys.forEach((key, index) => {
      key = this.normalizeKey(key);
      object[key] = values[index];
    });
    return object;
  }

  normalizeKey(key) {
    key = key.trim();
    key = key.split(' ').join('');
    key = key.replace('/', 'Per');

    return key;
  }

  save() {
    this.schedule.activities.pop();
    this.proposalService.saveMasterSchedule(this.schedule).subscribe((response: any) => {
      this.dialogRef.close({ master: response.data });
    });
  }
}
