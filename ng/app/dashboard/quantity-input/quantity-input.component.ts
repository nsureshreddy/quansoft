import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';

import * as Handsontable from 'handsontable';
import { MastersService } from '../../services/masters.service';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css']
})
export class QuantityInputComponent implements OnInit {
  columns: any;
  constructor(private mastersService: MastersService, 
    public dialogRef: MatDialogRef<QuantityInputComponent>) { }
  
  ngOnInit() {
    this.columns = this.mastersService.getQuantityFieldsByUOM('length');
    this.loadHandson();
  }
  
  loadHandson() {
    var data1 = [
      ['=$B$2', "Maserati", "Mazda", "Mercedes", "Mini", "=A$1"],
      [2009, 0, 2941, 4303, 354, 5814],
      [2010, 5, 2905, 2867, '=SUM(A4,2,3)', '=$B1'],
      [2011, 4, 2517, 4822, 552, 6127],
      [2012, '=SUM(A2:A5)', '=SUM(B5,E3)', '=A2/B2', 12, 4151]
    ];

    var self = this;
    var dataObject = [];
    
    var hotElement = document.querySelector('#hot');
    
    var hotElementContainer = hotElement.parentNode;
    var hotSettings = {
      data: data1,
    minSpareRows: 1,
    colHeaders: true,
    rowHeaders: true,
    contextMenu: true,
    manualColumnResize: true,
    formulas: true
    };
    var hot = new Handsontable(hotElement, hotSettings);
  }

}
