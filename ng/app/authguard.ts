import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class AlwaysAuthGuard implements CanActivate {
    constructor(private router: Router) {}
    user: string;
    canActivate() {
      this.user = localStorage.user;
      if (this.user) {
        return true;
      }
      this.router.navigate(['user']);
      return false;
    }
  }