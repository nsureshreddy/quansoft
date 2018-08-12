import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MasterSchedule } from '../../app-models/masterSchedule';
import { MastersService } from '../../services/masters.service';
import { MasterScheduleActivity } from '../../app-models/MasterScheduleActivity';
import { RateInputComponent } from '../rate-input/rate-input.component';
import { RateComponent } from '../../app-models/rateComponent';
import { MasterBill } from '../../app-models/MasterBill';

@Component({
  selector: 'app-new-master',
  templateUrl: './new-master.component.html',
  styleUrls: ['./new-master.component.css']
})
export class NewMasterComponent implements OnInit {
  schedule: MasterSchedule;
  dialogConfig: any = {};

  constructor(public dialogRef: MatDialogRef<NewMasterComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private masterService: MastersService) {
  }

  ngOnInit() {
    this.schedule = this.data || new MasterSchedule();
  }

  getAmount(master: MasterSchedule, activity: MasterScheduleActivity) {
    this.dialogConfig.panelClass = 'rate-input-dialog';
    this.dialogConfig.data = {
      master: master,
      activity: activity
    };

    const dialogRef = this.dialog.open(RateInputComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      let subTotal = 0;
      const rateComponents: Array<RateComponent> = [];
      if (data && data.scheduleOfRates) {
        data.scheduleOfRates.forEach(element => {
          if (element.subTotal) {
            subTotal += +element.subTotal;
          }
          if (element.items && element.items.length) {
            rateComponents.push(element);
          }
        });
        activity.rateComponents = rateComponents;
        activity.rate = subTotal * (1 + data.profitMargin / 100);
        activity.profitMargin = data.profitMargin;
      }
    });
  }

  addActivity(bill: MasterBill) {
    if (!bill.activities) {
      bill.activities = new Array<MasterScheduleActivity>();
    }

    const newActivity = Object.assign(new MasterScheduleActivity, {});
    bill.activities.push(newActivity);
  }

  removeActivity(index, idx) {
    this.schedule.bills[index].activities.splice(idx, 1);
  }

  addBill() {
    if (!this.schedule.bills) {
      this.schedule.bills = [];
    }
    this.schedule.bills.push(new MasterBill({}));
  }

  removeBill(index) {
    this.schedule.bills.splice(index, 1);
  }

  save() {
    this.masterService.saveMasterSchedule(this.schedule).subscribe((response: any) => {
      this.dialogRef.close({ master: response.data });
    });
  }
}
