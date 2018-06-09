import { Component, OnInit } from '@angular/core';
import { User } from '../../app-models/user';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  user: User;
  newUsers: User[] = [];
  activeIndex:number = 0;

  tabs: any[] = [
    {link: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    {link: '/masters', label: 'Masters', icon: 'book' },
    {link: '/cost-estimates', label: 'Cost Estimates', icon: 'monetization_on' },
    {link: '/vendors', label: 'Vendors', icon: 'people' },
    {link: '/settings', label: 'Settings', icon: 'settings' }
  ];

  constructor(private router: Router, private loginService: LoginService) {
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
    let token = localStorage['session-token'];
    this.loginService.getSession(token).subscribe(resp => {
      this.user = Object.assign(resp, new User);
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}