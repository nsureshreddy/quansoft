import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectionChange, CollectionViewer } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject, merge } from 'rxjs';

import { MatDialog, MatCheckboxChange, MatSnackBar } from '@angular/material';

import { MasterSchedule } from '../../app-models/masterSchedule';
import { MastersService } from '../../services/masters.service';
import { ProposalService } from '../../services/proposal.service';
import { QuantityInputComponent } from '../quantity-input/quantity-input.component';
import { MasterBill } from '../../app-models/MasterBill';
import { CostEstimates } from '../../app-models/CostEstimates';
import { Project } from '../../app-models/project';
import { UserService } from '../../services/user.service';
import { BuilderComments } from '../../dialogs/builder-comments.component';

export class DynamicFlatNode {
  constructor(public item: string, public level = 1, public expandable = false, public isLoading = false) { }
}

export class DynamicDatabase {
  dataMap;
  rootLevelNodes: string[];

  initialData(): DynamicFlatNode[] {
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}

@Injectable()
export class DynamicDataSource {

  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] { return this.dataChange.value; }
  set data(value: DynamicFlatNode[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private treeControl: FlatTreeControl<DynamicFlatNode>, private database: DynamicDatabase) { }

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this.treeControl.expansionModel.onChange!.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }

  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this.database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) {
      return;
    }

    if (expand) {
      const nodes = children.map(name =>
        new DynamicFlatNode(name, node.level + 1, this.database.isExpandable(name))
      );
      this.data.splice(index + 1, 0, ...nodes);
    } else {
      let count = 0;
      for (let i = index + 1; i < this.data.length
        && this.data[i].level > node.level; i++ , count++) { }
      this.data.splice(index + 1, count);
    }
    // notify the change
    this.dataChange.next(this.data);
  }
}

@Component({
  selector: 'app-cost-estimates-proposal',
  templateUrl: './cost-estimates-proposal.component.html',
  styleUrls: ['./cost-estimates-proposal.component.css']
})
export class CostEstimatesProposalComponent implements OnInit {
  builderCommentStatus;
  builderCommentStatusMsg;
  masters: MasterSchedule[] = [];
  dialogConfig: any = {};
  columnBackground = '#3f51b5';
  columnTextColor = '#fff';
  tiles = [
    { text: 'Activity', cols: 1, rows: 1 },
    { text: 'Short Description', cols: 2, rows: 1 },
    { text: 'Description', cols: 2, rows: 1 },
    { text: 'UOM', cols: 1, rows: 1 },
    { text: 'Qty.', cols: 2, rows: 1 },
    { text: 'Rate', cols: 2, rows: 1 },
    { text: 'Amount', cols: 2, rows: 1 }
  ];

  treeControl: FlatTreeControl<DynamicFlatNode>;
  dataSource: DynamicDataSource;

  constructor(private route: ActivatedRoute,
    private router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public proposalService: ProposalService,
    public userService: UserService,
    public masterService: MastersService,
    private database: DynamicDatabase) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);
  }

  isSelected(node) {
    const bills = this.proposal.costEstimates && this.proposal.costEstimates.bills;
    if (bills) {
      const index = bills.findIndex((bill) => {
        return bill.costCode === node.item;
      });
      if (index >= 0) {
        return true;
      }
    }
  }

  getLevel = (node: DynamicFlatNode) => node.level;
  isExpandable = (node: DynamicFlatNode) => node.expandable;
  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  masterSchedule: FormControl = new FormControl();
  selectedBills: MasterBill[] = [];
  proposal: Project;

  ngOnInit() {
    this.getMasters();
    const jobId = +this.route.snapshot.paramMap.get('jobId');
    this.getProposal(jobId);
  }

  getProposal(id) {
    this.proposalService.getProject(id).subscribe((data: any) => {
      this.proposal = data;
      if (this.proposal && this.proposal.costEstimates) {
        this.populateCostEstimates(this.proposal.costEstimates);
      }
    });
  }

  populateCostEstimates(estimates) {
    this.selectedBills = estimates.bills;
  }

  getMasters() {
    this.masterService.getMasterSchedules().subscribe((response: any) => {
      this.masters = response.data;
      this.database.rootLevelNodes = this.masters.map(master => {
        return master.code;
      });

      let bills: any = this.masters.map(master => {
        return [master.code, master.bills.map(bill => {
          return bill.costCode;
        })];
      });

      this.database.dataMap = new Map<string, string[]>(bills);
      this.dataSource.data = this.database.initialData();
    });
  }

  fetchMaster(val) {
    if (this.masters) {
      let bill;
      this.masters.forEach((master) => {
        bill = master.bills.find((bill) => {
          return bill.costCode === val;
        });
        if (bill) {
          this.selectedBills.push(bill);
          return;
        }
      });
    }
  }

  getQuantity(master: MasterSchedule, activity: any) {
    this.dialogConfig.panelClass = 'quantity-input-dialog';
    this.dialogConfig.data = {
      master: master,
      activity: activity
    };
    const dialogRef = this.dialog.open(QuantityInputComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.selectedBills.forEach(bill => {
          bill.activities.forEach(activity => {
            if (activity._id === data.activity._id) {
              activity = data.activity;
              this.getTotal(activity);
            }
          });
        });
      }
    });
  }

  getTotal(activity) {
    if (activity.rate && activity.quantity) {
      activity.amount = +activity.rate * +activity.quantity;
    }
  }

  billToggle(event: MatCheckboxChange, node: any) {
    if (event.checked) {
      this.fetchMaster(node.item);
    } else {
      this.selectedBills.splice(
        this.selectedBills.findIndex((e) => {
          return node.item === e.costCode;
        }), 1);
    }
  }

  save(submit: boolean) {
    this.proposal.costEstimates = new CostEstimates({
      bills: this.selectedBills,
      lastModified: this.userService.getUser()
    });
    this.proposalService.updateCostEstimates(this.proposal, submit).subscribe((resp: any) => {
      if (!resp.msg) {
        resp.msg = 'Cost Estimates Submitted to Builder.';
      }
      this.snackBar.open(resp.msg, 'Dismiss', {});
      this.router.navigate(['/cost-estimates']);
    });
  }

  rejectCostEstimates(flag) {
    const dialogRef = this.dialog.open(BuilderComments, { data: { jobId: this.proposal.jobId, approved: flag }, width: '480px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.builderCommentStatusMsg = 'Thank you. We will get aback to you.'
        this.builderCommentStatus = true;
      }
    });
  }
}
