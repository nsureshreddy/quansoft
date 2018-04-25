import { Component, OnInit } from '@angular/core';
import { ProposalService } from '../proposal.service';
import { FormControl, FormsModule } from '@angular/forms';
import { MasterSchedule } from '../app-models/masterSchedule';
import { MasterScheduleActivity } from '../app-models/MasterScheduleActivity';
import { MatDialog } from '@angular/material';
import { RateInputComponent } from '../dashboard/rate-input.component';
import { QuantityInputComponent } from './quantity-input.component';

@Component({
  selector: 'app-cost-estimates',
  templateUrl: './cost-estimates.component.html',
  styleUrls: ['./cost-estimates.component.css']
})
export class CostEstimatesComponent implements OnInit {
  masters: MasterSchedule[] = [];
  dialogConfig: any = { };
  tiles = [
    {text: 'Package Code', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Description', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Cost Code', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Cost Centre', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Activity Code', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Short Description', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Description', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'UOM', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Qty.', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Rate', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Amount', cols: 1, rows: 1, color: 'lightblue'}
  ];
  constructor(public dialog: MatDialog, public proposalService: ProposalService) { }

  masterSchedule: FormControl = new FormControl();
  selectedMaster: MasterSchedule;
  ngOnInit() {
    this.getMasters();
  }

  getMasters() {
    this.proposalService.getMasterSchedules().subscribe((response: any)=>{
      this.masters = response.data;
    });
  }

  fetchMaster(val) {
    var index = this.masters.findIndex((e, i, a) => {
      return e.code === val;
    });
    this.selectedMaster = this.masters[index];
  }

  getQuantity(master: MasterSchedule, activity: any) {
    this.dialogConfig.panelClass = 'quantity-input-dialog'
    this.dialogConfig.data = {
      master: master,
      activity: activity
    };

    let dialogRef = this.dialog.open(QuantityInputComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        activity.quantity = data.quantity;
        this.getTotal(activity);
      }
    });
  }

  getTotal(activity) {
    if (activity.rate && activity.quantity) {
      activity.amount = +activity.rate * +activity.quantity;
    }
  }

  getAmount(master: MasterSchedule, activity: any) {
    this.dialogConfig.panelClass = 'rate-input-dialog'
    this.dialogConfig.data = {
      master: master,
      activity: activity
    };

    let dialogRef = this.dialog.open(RateInputComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        activity.rate = data.ratePerUnit;
        this.getTotal(activity);
      }
    });

  }
}
