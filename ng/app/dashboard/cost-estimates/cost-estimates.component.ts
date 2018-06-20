import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

import { MatDialog, MatChipInputEvent } from '@angular/material';
import { MasterSchedule } from '../../app-models/masterSchedule';

import { MastersService } from '../../services/masters.service';
import { QuantityInputComponent } from '../quantity-input/quantity-input.component';


@Component({
  selector: 'app-cost-estimates',
  templateUrl: './cost-estimates.component.html',
  styleUrls: ['./cost-estimates.component.css']
})
export class CostEstimatesComponent implements OnInit {
  masters: MasterSchedule[] = [];
  chipList: any = [];
  dialogConfig: any = { };
  columnBackground: string = '#3f51b5';
  columnTextColor: string = '#fff';
  tiles = [
    {text: 'Cost Code', cols: 1, rows: 1},
    {text: 'Cost Centre', cols: 1, rows: 1},
    {text: 'Activity', cols: 1, rows: 1 },
    {text: 'Short Description', cols: 2, rows: 1 },
    {text: 'Description', cols: 2, rows: 1},
    {text: 'UOM', cols: 1, rows: 1},
    {text: 'Qty.', cols: 1, rows: 1},
    {text: 'Rate', cols: 1, rows: 1},
    {text: 'Amount', cols: 1, rows: 1}
  ];
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  fruits = [];

  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  constructor(public dialog: MatDialog, public masterService: MastersService) { }

  masterSchedule: FormControl = new FormControl();
  selectedMasters: MasterSchedule[] = [];
  ngOnInit() {
    this.getMasters();
  }

  getMasters() {
    this.masterService.getMasterSchedules().subscribe((response: any)=>{
      this.masters = response.data;
      this.selectedMasters.push(this.masters[0]);
    });
  }

  fetchMaster(val) {
    this.fruits.push({ name: val });
    var index = this.masters.findIndex((e, i, a) => {
      return e.code === val;
    });
    this.selectedMasters.push(this.masters[index]);
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
}