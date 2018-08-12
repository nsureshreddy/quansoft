import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  getSession(token) {
    return this.http.post('/api/session', {token: token});
  }

  authenticate(token) {
    return this.http.get('/api/auth/' + token);
  }
}
