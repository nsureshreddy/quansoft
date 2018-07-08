import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectionChange, CollectionViewer } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import {map} from 'rxjs/operators';
import { Observable, BehaviorSubject, merge } from 'rxjs';

import { MatDialog, MatCheckboxChange, MatSnackBar } from '@angular/material';

import { MasterSchedule } from '../../app-models/masterSchedule';
import { MastersService } from '../../services/masters.service';
import { ProposalService } from '../../services/proposal.service';
import { QuantityInputComponent } from '../quantity-input/quantity-input.component';
import { MasterBill } from '../../app-models/MasterBill';
import { CostEstimates } from '../../app-models/CostEstimates';
import { Project } from '../../app-models/project';

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
export class DynamicDatabase {
  
  dataMap;
  rootLevelNodes: string[];

  /** Initial data from database */
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

  constructor(private treeControl: FlatTreeControl<DynamicFlatNode>, private database: DynamicDatabase) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this.treeControl.expansionModel.onChange!.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this.database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) { // If no children, or cannot find the node, no op
      return;
    }


      if (expand) {
        const nodes = children.map(name =>
          new DynamicFlatNode(name, node.level + 1, this.database.isExpandable(name)));
        this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (let i = index + 1; i < this.data.length
          && this.data[i].level > node.level; i++, count++) {}
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
   
  masters: MasterSchedule[] = [];
  dialogConfig: any = { };
  columnBackground: string = '#3f51b5';
  columnTextColor: string = '#fff';
  tiles = [
    {text: 'Activity', cols: 1, rows: 1 },
    {text: 'Short Description', cols: 2, rows: 1 },
    {text: 'Description', cols: 2, rows: 1},
    {text: 'UOM', cols: 1, rows: 1},
    {text: 'Qty.', cols: 2, rows: 1},
    {text: 'Rate', cols: 2, rows: 1},
    {text: 'Amount', cols: 2, rows: 1}
  ];
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public proposalService: ProposalService,
    public masterService: MastersService,
    private database: DynamicDatabase) {
      this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
      this.dataSource = new DynamicDataSource(this.treeControl, database); 
  }
  
  treeControl: FlatTreeControl<DynamicFlatNode>;
  dataSource: DynamicDataSource;
  getLevel = (node: DynamicFlatNode) => node.level;
  isExpandable = (node: DynamicFlatNode) => node.expandable;
  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  masterSchedule: FormControl = new FormControl();
  selectedBills: MasterBill[] = [];
  proposal: Project;

  ngOnInit() {
    this.getMasters();
    let jobId = +this.route.snapshot.paramMap.get('jobId');
    this.getProposal(jobId);
  }

  getProposal(id) {
    this.proposalService.getProject(id).subscribe((data: any)=>{
      this.proposal = data;
    });
  }

  getMasters() {
    this.masterService.getMasterSchedules().subscribe((response: any)=>{
      this.masters = response.data;
      
      this.database.rootLevelNodes = this.masters.map(master=>{
        return master.code;
      });

      let bills:any = this.masters.map(master=>{
        return [master.code, master.bills.map(bill=>{
          return bill.costCode;
        })];
      });

      this.database.dataMap = new Map<string, string[]>(bills);
      this.dataSource.data = this.database.initialData();
    });
  }

  fetchMaster(val) {
    var selecctedBill: MasterBill;
    var index = this.masters.find((e) => {
      var bill = e.bills.find((bill)=>{
        return bill.costCode === val;
      });
      
      if (bill!=null) {
        selecctedBill = bill;
      }
      return bill!=null;
    });
    this.selectedBills.push(selecctedBill);
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

  save() {
    this.proposal.costEstimates = new CostEstimates({
      bills: this.selectedBills
    });
    this.proposalService.updateProject(this.proposal).subscribe((resp)=> {
       this.snackBar.open('Cost Estimates Submitted Successfully.', 'Dismiss', {});
       this.router.navigate(['/cost-estimates']);
     })
  }
}

export class DynamicFlatNode {
  constructor(public item: string, public level = 1, public expandable = false, public isLoading = false) {}
}

