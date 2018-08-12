import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../app-models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  showSignup = false;
  thankNote: boolean;
  user: User;
  loginError: Boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }

  signin(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.http.post('/api/signin', this.user).subscribe(resp => {
      localStorage.setItem('session-token', resp['token']);
      this.router.navigate(['dashboard/proposal']);
    }, err => {
      this.loginError = true;
      form.resetForm();
    });
  }

  signup(form: NgForm) {
    this.user.status = 'NEW';
    this.http.post('/api/signup', this.user).subscribe(resp => {
      this.thankNote = true;
    }, err => {
      this.loginError = true;
      form.resetForm();
    });
  }

}
