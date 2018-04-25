import { Component, OnInit } from '@angular/core';
import { QuantityComponent, QuantityRefItem } from '../app-models/quantityComponent';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css']
})
export class QuantityInputComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuantityInputComponent>) { }
  totalQuantity = 0;
  quantityComponent: QuantityComponent;
  columns = [
    { label: 'Ref No.', cols: 1, color: 'lightblue'},
    { label: 'Description', cols: 1, color: 'lightblue'},
    { label: 'No\'s', cols: 1,  color: 'lightblue'},
    { label: 'L', cols: 1,  color: 'lightblue'},
    { label: 'B', cols: 1,  color: 'lightblue'},
    { label: 'D', cols: 1,  color: 'lightblue'},
    { label: 'Qty.', cols: 1, color: 'lightblue'}
  ];

  ngOnInit() {
    this.quantityComponent = new QuantityComponent([]);
  }

  addRef() {
    let newItem = { refNo: '', description: '', no: '', l: '', b: '', d: '', quantity: '' };
    var ref: QuantityRefItem = new QuantityRefItem(newItem);
    this.quantityComponent.items.push(ref);
  }

  calculateQuantity() {
    
    let quantity = 0;
    this.quantityComponent.items.forEach((item)=>{
      console.log(item);

      if (item.quantity) {
        quantity+=+item.quantity;
      }
    });
    this.totalQuantity = quantity;
  }

  approve() {
    this.dialogRef.close({ quantity: this.totalQuantity });
  }

}
