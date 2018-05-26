import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../app-models/user';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html'
})
export class MastersComponent implements OnInit {
  user:User;
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
    this.user = Object.assign(new User, JSON.parse(localStorage.getItem('user')));
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/user/login']);
  }
}
