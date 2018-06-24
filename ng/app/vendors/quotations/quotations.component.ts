import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../../services/vendors.service';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css']
})
export class QuotationsComponent implements OnInit {
  constructor(private vendorsService: VendorsService) {
  }

  ngOnInit() {
  }
}
