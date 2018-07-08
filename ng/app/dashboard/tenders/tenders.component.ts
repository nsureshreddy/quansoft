import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})
export class TendersComponent implements OnInit {

  activeIndex = 0;
  tabs: any[] = [
    { link: '/dashboard/tenders/list', label: 'Tenders', icon: 'dashboard', notifications: true },
    { link: '/dashboard/tenders/send-quote', label: 'Send Quotation', icon: 'book' }
  ];

  constructor(private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        let index = this.tabs.findIndex(i => {
          return val.urlAfterRedirects.indexOf(i.link) === 0;
        });
        this.activeIndex = index;
      }
    });
  }
  ngOnInit() {
  }
}