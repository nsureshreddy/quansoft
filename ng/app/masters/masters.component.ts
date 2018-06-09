import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html'
})
export class MastersComponent implements OnInit {
  constructor(private router: Router) { }

  mastersTypes: any = [
    {
      label: 'Masters',
      path: './schedules'
    },
    {
      label: 'Resource Masters',
      path: './resources'
    }
  ];

  ngOnInit() {
  }

}
