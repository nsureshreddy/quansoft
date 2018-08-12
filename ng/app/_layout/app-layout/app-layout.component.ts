import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { User } from '../../app-models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  user: User;
  newUsers: User[] = [];
  activeIndex = 0;
  tabs: any[];

  constructor(private router: Router, private route: ActivatedRoute, private service: UserService) {
  }

  ngOnInit() {
    this.route.data.subscribe(({ user }) => {
      this.user = user;
      this.service.setUser(user);
    });
    this.tabs = [
      { link: '/dashboard', label: 'Dashboard', icon: 'dashboard', canAccess: true },
      { link: '/masters', label: 'Masters', icon: 'book', canAccess: this.service.userIs(['management', 'manager', 'engineer']) },
      { link: '/cost-estimates', label: 'Cost Estimates', icon: 'monetization_on', canAccess: true },
      { link: '/vendors', label: 'Vendors', icon: 'people' },
      { link: '/settings', label: 'Settings', icon: 'settings', canAccess: true }
    ];
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        const index = this.tabs && this.tabs.findIndex(i => {
          return val.urlAfterRedirects.indexOf(i.link) === 0;
        });
        this.activeIndex = index;
      }
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
