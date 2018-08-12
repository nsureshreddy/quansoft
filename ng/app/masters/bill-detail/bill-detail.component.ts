import { Component, OnInit } from '@angular/core';
import { MastersService } from '../../services/masters.service';
import { MasterBill } from '../../app-models/MasterBill';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {

  constructor(private masterService: MastersService) { }
  bill: MasterBill;
  ngOnInit() {
    this.getMasterSchedules();
  }
  getMasterSchedules() {
    this.masterService.getMasterSchedules().subscribe((response: any) => {
      this.bill = response.data[0].bills[0];
    });
  }

}
