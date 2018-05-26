import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatStepper } from '@angular/material';
import { ScopeItem, SCOPE_ITEMS } from '../../app-models/scopeItem';
import { ProposalService } from '../../services/proposal.service';

@Component({
  selector: 'price-schedule',
  templateUrl: 'price-schedule.component.html',
  styleUrls: ['price-schedule.component.css']
})
export class PriceScheduleComponent {
  @Input() stepper;
  @Input() project;
  scopeItems: ScopeItem[];
  totalAmount: number;

  constructor(private route: ActivatedRoute, private router: Router,
     private proposalService: ProposalService, private snackbar: MatSnackBar) {
  }

  removeActivity(scope, item) {
    let index = scope.workItems.findIndex((activity) => {
      return activity.name === item.name;
    });
    scope.workItems.splice(index, 1);
  }

  addActivity(scope) {
    let newActivity = { name: '', uom: '', rate: 0, quantity: 0, amount: 0, custom: true };
    scope.workItems.push(newActivity);
  }

  savePriceSchedule() {
    let jobId = +this.route.snapshot.paramMap.get('jobId');
    this.proposalService.updateProjectProposal(this.scopeItems, jobId)
      .subscribe(resp => {
        this.snackbar.open('Price Schedule Updated.', '', { duration: 3000 });
        this.stepper.next();
      }, err => {
      });
  }

  ngOnChanges(model: any) {
    this.project = model.project && model.project.currentValue;
    if (this.project && Object.keys(this.project).length > 0) {
      let scope = this.project.scope;
      let scopeItems = this.project.scopeItems;
      this.scopeItems = scopeItems && scopeItems.length > 0 ? scopeItems : SCOPE_ITEMS.filter((item) => {
        return scope.indexOf(item.name) >= 0 ? true : false;
      });
    }
  }

  calculateAmount() {
    let totalAmount: number = 0;
    this.scopeItems.forEach((scope) => {
      scope.workItems.forEach((work) => {
        totalAmount += +work.amount;
      });
    });
    this.totalAmount = totalAmount;
  }
}