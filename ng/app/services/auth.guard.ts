import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AlwaysAuthGuard implements CanActivate {
  constructor(private router: Router, private service: UserService) { }

  canActivate() {
    if (localStorage['session-token']) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
