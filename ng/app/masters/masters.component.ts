import { Component, OnInit } from '@angular/core';
import { User } from '../app-models/user';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {
  user:User;
  constructor() { }

  ngOnInit() {
    this.user = Object.assign(new User, JSON.parse(localStorage.getItem('user')));
  }
}
