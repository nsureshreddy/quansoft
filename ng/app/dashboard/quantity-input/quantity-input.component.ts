import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';

import * as Handsontable from 'handsontable';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css']
})
export class QuantityInputComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuantityInputComponent>) { }
  
  ngOnInit() {
    this.loadHandson();
  }

  loadHandson() {
    var self = this;
    var dataObject = [];
    
    var hotElement = document.querySelector('#hot');
    var hotElementContainer = hotElement.parentNode;
    var hotSettings = {
      afterChange: (data) => {
        
      },
      beforeRemoveRow: (data) => {
        
      },
      formulas: true,
      minSpareRows: 1,
      columnSorting: true,
      sortIndicator: true,
      data: [],
      columns: [
        {
          data: 'refNo',
          type: 'numeric',
          width: 40
        },
        {
          data: 'description'
        },
        {
          data: 'Nos',
          type: 'numeric'
        },
        {
          data: 'l',
          type: 'numeric'
        },
        {
          data: 'b',
          type: 'numeric'
        },
        {
          data: 'd',
          type: 'numeric'
        },
        {
          data: 'qty',
          type: 'numeric'
        }
      ],
      stretchH: 'all',
      autoWrapRow: true,
      height: 440,
      manualRowResize: true,
      manualColumnResize: true,
      rowHeaders: true,
      colHeaders: [
        'Ref. No.',
        'Description',
        'Nos',
        'L',
        'B',
        'D',
        'Qty.'
      ],
      manualRowMove: true,
      manualColumnMove: true,
      contextMenu: true,
      filters: true,
      dropdownMenu: true
    };
    var hot = new Handsontable(hotElement, hotSettings);
  }

  onFileChange(event) {
    
  }

}
