import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AlwaysAuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    if (localStorage['session-token']) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}