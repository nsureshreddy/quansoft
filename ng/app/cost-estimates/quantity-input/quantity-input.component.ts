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
    this.columns = this.mastersService.getQuantityFieldsByUOM('nos');
    this.loadHandson(this.columns);
  }

  loadHandson(columns) {
    
    var self = this;
    var dataObject = [];

    var hotElement = document.querySelector('#hot');
    var hot = new Handsontable(hotElement, {
      colHeaders: true,
      rowHeaders: true,
      nestedHeaders: [
        ['A', {label: 'B', colspan: 8}, 'C'],
        ['', {label: 'E', colspan: 4}, {label: 'F', colspan: 4}, ''],
        
      ]
    });

    
    var hotSettings = {
      //minSpareRows: 1,
      //columnSorting: true,
      //sortIndicator: true,
      //columns: columns.colDefs,
      //stretchH: 'all',
      //autoWrapRow: true,
      height: 440,
      //manualRowResize: true,
      //manualColumnResize: true,
      colHeaders: true,
      rowHeaders: false,
      //manualRowMove: true,
      //manualColumnMove: true,
      //contextMenu: true,
      //filters: true,
      //dropdownMenu: true,
      nestedHeaders: [
        ['A', {label: 'B', colspan: 8}, 'C'],
        ['', {label: 'E', colspan: 4}, {label: 'F', colspan: 4}, '']
      ]
    };

   // var hot = new Handsontable(hotElement, hotSettings);
  }

}
