import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private service: UserService, private router: Router) {
  }

  canActivate() {
    const user = this.service.getUser();
    if (user && user.designation === 'management') {
      return true;
    }

    this.router.navigate(['dashboard']);
    return false;
  }
}
