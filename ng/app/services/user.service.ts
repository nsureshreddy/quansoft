import { Injectable } from '@angular/core';
import { User } from '../app-models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  user: User;

  getSession(token) {
    return this.http.post('/api/session', { token: token });
  }

  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  getAllUsers() {
    return this.http.get('/api/users');
  }

  signupUser(user: User) {
    return this.http.post('/api/signup', user);
  }

  updateUser(user) {
    return this.http.put('/api/update-user', user);
  }

  deleteUser(id) {
    return this.http.delete('/api/delete-user/' + id);
  }

  userIs(designations: string[]) {
    const index = designations.findIndex((d) => {
      return d === this.user.designation;
    });
    return index >= 0;
  }

}
