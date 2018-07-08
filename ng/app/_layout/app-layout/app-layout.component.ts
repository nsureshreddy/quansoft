import { Component, OnInit } from '@angular/core';
import { User } from '../../app-models/user';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  user: User;
  newUsers: User[] = [];
  activeIndex:number = 0;
  tabs: any[];

  constructor(private router: Router, private loginService: LoginService, private userService:UserService) {
    router.events.subscribe(val =>  {
      if(val instanceof NavigationEnd) {
        let index = this.tabs && this.tabs.findIndex(i => {
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
      this.userService.setUser(this.user);
      this.tabs = [
        {link: '/dashboard', label: 'Dashboard', icon: 'dashboard', canAccess: true},
        {link: '/masters', label: 'Masters', icon: 'book', canAccess: this.user.designation === 'management' },
        {link: '/cost-estimates', label: 'Cost Estimates', icon: 'monetization_on', canAccess: this.user.designation === 'management' },
        {link: '/vendors', label: 'Vendors', icon: 'people' , canAccess: this.user.designation === 'management'},
        {link: '/settings', label: 'Settings', icon: 'settings', canAccess: true }
      ];

    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}