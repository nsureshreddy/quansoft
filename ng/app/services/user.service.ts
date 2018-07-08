import { Injectable } from '@angular/core';
import { User } from '../app-models/user';

@Injectable()
export class UserService {
  user: User;
  
  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

}