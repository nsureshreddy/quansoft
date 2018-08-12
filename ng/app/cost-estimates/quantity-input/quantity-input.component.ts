import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as Handsontable from 'handsontable';

import { MastersService } from '../../services/masters.service';
import { MasterScheduleActivity } from '../../app-models/MasterScheduleActivity';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css']
})
export class QuantityInputComponent implements OnInit {
  columns: any;
  quantity = 0;
  table;
  uom: string;

  constructor(private mastersService: MastersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<QuantityInputComponent>) { }

  ngOnInit() {
    this.uom = this.data.activity.uom;
    this.columns = this.mastersService.getQuantityFieldsByUOM(this.uom);
    const data = this.data.activity.quantityItems;
    this.loadHandson(this.columns, data);
  }

  loadHandson(columns, data) {
    var hotElement = document.querySelector('#hot');
    var table;
    var uom = this.uom;
    var config = {
      afterChange: function (change) {
        if (change != null && change[0][1] != 'quantity') {
          var rowNumber = change[0][0];
          var coeff = table.getDataAtRowProp(rowNumber, 'coeff') || 1;
          var factor = table.getDataAtRowProp(rowNumber, 'factor') || 1;
          var nosX = table.getDataAtRowProp(rowNumber, 'nosX') || 1;
          var nosY = table.getDataAtRowProp(rowNumber, 'nosY') || 1;
          var l = table.getDataAtRowProp(rowNumber, 'l') || 1;
          var b = table.getDataAtRowProp(rowNumber, 'b') || 1;
          var d = table.getDataAtRowProp(rowNumber, 'd') || 1;

          if (coeff && factor && nosX && nosY) {
            let q;
            switch (uom) {
              case 'nos':
                q = coeff * factor * nosX * nosY;
                break;
              case 'area':
                q = coeff * factor * nosX * nosY * l * b;
                break;
              case 'length':
                q = coeff * factor * nosX * nosY * l;
                break;
              case 'volume':
                q = coeff * factor * nosX * nosY * l * b * d;
                break;
            }
            table.setDataAtRowProp(change[0][0], 'quantity', q);
          }
        }
      },
      data: data,
      minSpareRows: 2,
      columnSorting: true,
      sortIndicator: true,
      columns: columns.colDefs,
      stretchH: 'all',
      autoWrapRow: true,
      height: 440,
      rowHeaders: true,
      colHeaders: columns.headers,
      contextMenu: true,
      filters: true,
      dropdownMenu: true
    };
    table = new Handsontable(hotElement, config);
    this.table = table;
  }

  calculate() {
    this.quantity = 0;
    if (this.table) {
      const data = this.table.getData();
      const colCount = this.table.countCols();
      if (data && data.length > 0) {
        data.forEach(element => {
          if (element[colCount - 1]) {
            this.quantity += element[colCount - 1];
          }
        });
      }
    }
    return this.quantity;
  }

  save() {
    if (this.table) {
      const data = this.table.getData();
      if (data && data.length > 0) {
        const columns = this.columns.colDefs;
        for (var i = 0; i < data.length; i++) {
          if (!this.IsEmpty(data[i])) {
            for (var j = 0; j < data[i].length; j++) {
              var key = columns[j].data;
              var value = data[i][j];
              data[i] = {};
              data[i]['' + key] = value;
            }
          }
        }
      }
      const quantityItems = data;
      this.data.activity.quantity = this.calculate();
      this.data.activity.quantityItems = quantityItems;
      this.dialogRef.close({ activity: this.data.activity });
    }
  }

  formatQuantityItemsToRows(quantity: any[]) {
    const data = quantity.map(item=>{
      return [item.code, item.description, item.factor, item.coeff, item.nosX, item.nosY, item.quantity];
    });

    return data;
  }

  IsEmpty(o) {
    let _isEmpty = true;
    for (let key in o) {
      if (o[key] != null) {
        _isEmpty = false;
      }
    }
    return _isEmpty;
  }
}
