import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../app-models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  user: User;
  constructor(private router: Router) {    
  }
  ngOnInit() {
    this.user = Object.assign(new User, JSON.parse(localStorage.getItem('user')));
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}