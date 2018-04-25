import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../../app-models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user: User;
  loginError: Boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }

  login(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.http.post('/api/signin',this.user).subscribe(resp => {
      localStorage.setItem('user', JSON.stringify(resp['user']));
      this.router.navigate(['dashboard']);
    }, err => {
      this.loginError = true;
      form.resetForm();
    });
  }
}