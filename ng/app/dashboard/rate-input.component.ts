import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MasterSchedule } from '../app-models/masterSchedule';
import { MasterScheduleActivity } from '../app-models/MasterScheduleActivity';
import { RateComponent, RateItem } from '../app-models/rateComponent';

@Component({
  selector: 'app-rate-input',
  templateUrl: './rate-input.component.html',
  styleUrls: ['./rate-input.component.css']
})
export class RateInputComponent implements OnInit {

  master: MasterSchedule;
  activity: MasterScheduleActivity;
  rateInput: Array<RateComponent> = [];
  totalCost: number;
  ratePerUnit: number;
  profitMargin: number;
  basicCost: number;

  constructor(public dialogRef: MatDialogRef<RateInputComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.master = data.master;
    this.activity = data.activity;

    let rate1 = new RateComponent('Material Cost', []);
    let rate2 = new RateComponent('Labour Cost', []);
    let rate3 = new RateComponent('Machineries Cost', []);

    this.rateInput = [rate1, rate2, rate3];
  }

  ngOnInit() {
  }

  calculateAmount(item, parent) {
    if(+item.rate && +item.coeff) {
      item.amount = item.rate * item.coeff;
    }
    this.calculateSubTotal(parent);
  }

  calculateSubTotal(item) {
    item.subTotal = 0;
    item.items.forEach((i)=>{
      item.subTotal+=+i.amount;
    });
    this.calculateTotal();
  }

  calculateRatePerUnit() {
    let cost = this.totalCost - this.basicCost;
    this.ratePerUnit = cost + this.profitMargin * cost/100;
  }

  calculateTotal() {
    this.totalCost = 0;
    
    this.rateInput.forEach((input)=>{
      input.items.forEach((i)=>{
        this.totalCost+=+i.amount;
      });
    });

    this.calculateRatePerUnit();
  }

  addNewItem(item) {
    let newItem = { code: '', description: '', uom: '',coeff: '', rate: '', amount: '' };
    if(!item.items) {
      item.items = [];
    }
    item.items.push(newItem);
  }

  approve() {
    this.dialogRef.close({ ratePerUnit: this.ratePerUnit });
  }

}
