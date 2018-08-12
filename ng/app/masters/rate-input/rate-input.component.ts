import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MasterSchedule } from '../../app-models/masterSchedule';
import { MasterScheduleActivity } from '../../app-models/MasterScheduleActivity';
import { MasterResource } from '../../app-models/masterResource';
import { MastersService } from '../../services/masters.service';
import { RateComponent } from '../../app-models/rateComponent';

@Component({
  selector: 'app-rate-input',
  templateUrl: './rate-input.component.html',
  styleUrls: ['./rate-input.component.css']
})
export class RateInputComponent implements OnInit {

  step = 0;
  master: MasterSchedule;
  activity: MasterScheduleActivity;
  resources: MasterResource[];
  child: any;
  parent: any;

  constructor(public dialogRef: MatDialogRef<RateInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private masterService: MastersService) {

    this.master = data.master;
    this.activity = data.activity;

    const materialCosts = new RateComponent('Material Cost', 'material', []);
    const labourCosts = new RateComponent('Labour Cost', 'labour', []);
    const machineriesCosts = new RateComponent('Machineries Cost', 'machineries', []);

    const masterCosts = [materialCosts, labourCosts, machineriesCosts];
    this.activity.rateComponents = this.activity.rateComponents || [];

    masterCosts.forEach(cost => {
      let costExists = false;
      this.activity.rateComponents.forEach(element => {
        if (element.label === cost.label) {
          costExists = true;
          this.calculateSubTotal(element);
        }
      });
      if (!costExists) {
        this.activity.rateComponents.push(cost);
      }
    });

  }

  ngOnInit() {
    this.getMasterResources();
  }

  getMasterResources() {
    this.masterService.getMasterResources().subscribe((response: any) => {
      this.resources = response.data;
    });
  }

  fetchResource(code) {
    const index = this.resources.findIndex((item) => {
      return item.code === code;
    });

    this.activity.rateComponents[this.parent].items[this.child] = JSON.parse(JSON.stringify(this.resources[index]));
  }

  fetchResourceByDescription(description) {
    const index = this.resources.findIndex((item) => {
      return item.description === description;
    });

    this.activity.rateComponents[this.parent].items[this.child] = JSON.parse(JSON.stringify(this.resources[index]));
    this.calculateSubTotal(this.activity.rateComponents[this.parent]);
  }

  calculateAmount(item, parent) {
    if (+item.rate && +item.coeff) {
      item.amount = item.rate * item.coeff;
      this.calculateSubTotal(parent);
    }
  }

  calculateSubTotal(item) {
    item.subTotal = 0;
    item.items.forEach((i) => {
      if (i.amount) {
        item.subTotal += +i.amount;
      }
    });
    item.subTotal = item.subTotal.toFixed(2);
    this.calculateTotal();
  }

  calculateRatePerUnit() {
    const cost = this.activity.totalCost;
    this.activity.ratePerUnit = cost + (this.activity.profitMargin || 0) * cost / 100;
  }

  calculateTotal() {
    this.activity.totalCost = 0;

    this.activity.rateComponents.forEach((input) => {
      input.items.forEach((i) => {
        this.activity.totalCost += +i.amount;
      });
    });

    this.calculateRatePerUnit();
  }

  addNewItem(item) {
    const newItem = { code: '', description: '', uom: '', coeff: '1', rate: '', amount: '' };
    if (!item.items) {
      item.items = [];
    }
    item.items.push(newItem);
  }

  removeItem(index, item) {
    item.items.splice(index, 1);
  }

  approve() {
    this.dialogRef.close({
      scheduleOfRates: this.activity.rateComponents,
      profitMargin: this.activity.profitMargin
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
