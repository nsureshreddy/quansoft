import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resource-masters',
  templateUrl: './resource-masters.component.html',
  styleUrls: ['./resource-masters.component.css']
})
export class ResourceMastersComponent implements OnInit {
  resourceTypes: any = [
    {
      label: 'Material Costs',
      key: 'material',
      path: 'material-costs'
    },
    {
      label: 'Man Power Costs',
      key: 'labour',
      path: 'manpower-costs'
    },
    {
      label: 'Machineries Costs',
      key: 'machineries',
      path: 'machineries-costs'
    }
  ];

  constructor() { }

  ngOnInit() { }
}
