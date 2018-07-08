import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  activeIndex = 0;
  tabs: any[] = [
    {link: '/vendors/list', label: 'Vendors List', icon: 'dashboard' },
    {link: '/vendors/send-tender', label: 'Send Tender', icon: 'book' },
    {link: '/vendors/quotations', label: 'Quotations', notifications: true }
  ];

  constructor(private router: Router) {
    router.events.subscribe(val =>  {
      if(val instanceof NavigationEnd) {
        let index = this.tabs.findIndex(i => {
          return val.urlAfterRedirects.indexOf(i.link)===0;
        });
        this.activeIndex = index;
      }
    });
  }

  ngOnInit() {
  }

}