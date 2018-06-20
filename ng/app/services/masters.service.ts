import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { forkJoin } from "rxjs";

import * as XLSX from 'xlsx';
import * as Handsontable from 'handsontable';

import { MasterSchedule } from "../app-models/masterSchedule";

@Injectable()
export class MastersService {
  constructor(private http: HttpClient) { }
  
  getMasterResources() {
    return this.http.get('/api/master-resource');
  }

  deleteResource (id) {
    return this.http.delete('/api/master-resource/' + id);
  }

  getMasterSchedules() {
    return this.http.get('/api/master-schedule');
  }

  saveResources (resourceList, type) {
    let urls = [];
    let http: HttpClient = this.http;

    resourceList.forEach((r)=> {
      if (!this.isEmpty(r)) {
        r.resourceType = type;
        if (r.rate && typeof r.rate === 'string') {
          r.rate = parseFloat(r.rate.replace(/,/g, ''));
        }
        if (r._id) {
          urls.push(http.put('/api/master-resource', r));
        } else {
          urls.push(http.post('/api/master-resource', r));
        }
      }
    });

    return forkJoin(urls);
  }

  saveMasterSchedule(schedule: MasterSchedule) {
    if (schedule._id) {
      return this.http.put('/api/master-schedule', schedule);  
    }
    return this.http.post('/api/master-schedule', schedule);
  }

  deleteMasterSchedule(id) {
    return this.http.delete('/api/master-schedule/' + id);
  }

  readFile(event) {
    let promise = new Promise((resolve, reject) => {
      let data;
      const target: DataTransfer = <DataTransfer>(event.target);
      if (target.files.length !== 1) {
        reject('Can\'t upload multiple file');
      }
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
  
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        var masterData = [];
        data = <XLSX.AOA2SheetOpts>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
        var rowCount = data.length;
        var columns = data[0];
  
        for (var i = 1; i < rowCount; i++) {
          if (data[i].length == 5) {
            masterData.push({
              'code': data[i][0],
              'description': data[i][1],
              'brand': data[i][2],
              'uom': data[i][3],
              'rate': data[i][4]
            });
          }
        }
        resolve(masterData);
      };
      reader.readAsBinaryString(target.files[0]);
    });
    return promise;
  }

  loadHandOnTable(self, element) {
    var hotElementContainer = element.parentNode;
    var hotSettings = {
      afterChange: (data) => {
        self.onResourceUpdate(data);
      },
      beforeRemoveRow: (data) => {
        self.removeResource(data);
      },
      minSpareRows: 1,
      columnSorting: true,
      sortIndicator: true,
      data: self.resources,
      columns: [
        {
          data: 'code',
          type: 'numeric',
          width: 40
        },
        {
          data: 'description',
          sortFunction: (sortOrder) => {
            return (a, b) => {
              if(sortOrder) {
                return a>b;
              }
              return b>a;
            }
          }
        },
        {
          data: 'brand',
          type: 'text'
        },
        {
          data: 'uom',
          type: 'text'
        },
        {
          data: 'rate',
          type: 'text'
        }
      ],
      stretchH: 'all',
      autoWrapRow: true,
      height: 440,
      manualRowResize: true,
      manualColumnResize: true,
      rowHeaders: true,
      colHeaders: [
        'Item Code',
        'Description',
        'Brand',
        'UOM',
        'Rate'
      ],
      manualRowMove: true,
      manualColumnMove: true,
      contextMenu: true,
      filters: true,
      dropdownMenu: true
    };
    var hot = new Handsontable(element, hotSettings);
  }

  getQuantityFieldsByUOM(uom: string) {
    return (this.quantityFields.find(item=>{
      return item.uom === uom;
    })).values;
  }

  isEmpty(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
      return false;
    }
    return true;
  }

  quantityFields = [
    {
      uom: 'nos',
      values: {
        headers: ['Code', 'Item Description', 'Factor', 'Coeff', 'Nos', 'Qty'],
        colDefs: [
          { data: 'code', type: 'numeric', width: 40 },
          { data: 'description' },
          { data: 'factor', type: 'numeric' },
          { data: 'coeff', type: 'numeric' },
          { data: 'nos', type: 'numeric' },
          { data: 'qty', type: 'numeric' }
        ]
      }
    },
    {
      uom: 'length',
      values: {
        headers: ['Code', 'Item Description', 'From', 'To', 'Factor', 'Coeff', 'Nos', 'L', 'Qty'],
        colDefs: [
          { data: 'code', type: 'numeric', width: 40 },
          { data: 'description' },
          { data: 'from', type: 'numeric' },
          { data: 'to', type: 'numeric' },
          { data: 'factor', type: 'numeric' },
          { data: 'coeff', type: 'numeric' },
          { data: 'nos', type: 'numeric' },
          { data: 'l', type: 'numeric' },
          { data: 'qty', type: 'numeric' }
        ]
      }
    },
    {
      uom: 'area',
      values: {
        headers: ['Code', 'Item Description', 'Factor', 'Coeff', 'Nos', 'L', 'B', 'Qty'],
        colDefs: [
          { data: 'code', type: 'numeric', width: 40 },
          { data: 'description' },
          { data: 'factor', type: 'numeric' },
          { data: 'coeff', type: 'numeric' },
          { data: 'nos', type: 'numeric' },
          { data: 'l', type: 'numeric' },
          { data: 'b', type: 'numeric' },
          { data: 'qty', type: 'numeric' }
        ]
      }
    },
    {
      uom: 'volume',
      values: {
        headers: ['Code', 'Item Description', 'Factor', 'Coeff', 'Nos', 'L', 'B', 'D', 'Qty'],
        colDefs: [
          { data: 'code', type: 'numeric', width: 40 },
          { data: 'description' },
          { data: 'factor', type: 'numeric' },
          { data: 'coeff', type: 'numeric' },
          { data: 'nos', type: 'numeric' },
          { data: 'l', type: 'numeric' },
          { data: 'b', type: 'numeric' },
          { data: 'd', type: 'numeric' },
          { data: 'qty', type: 'numeric' }
        ]
      }
    },
    {
      uom: 'weight',
      values: {
        headers: ['Code', 'Item Description', 'Factor', 'Coeff', 'Nos', 'Qty'],
        colDefs: [
          { data: 'code', type: 'numeric', width: 40 },
          { data: 'description' },
          { data: 'factor', type: 'numeric' },
          { data: 'coeff', type: 'numeric' },
          { data: 'nos', type: 'numeric' },
          { data: 'qty', type: 'numeric' }
        ]
      }
    }
  ]
}