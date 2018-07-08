import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: LoginService) { }

  ngOnInit() {
    let token = this.route.snapshot.paramMap.get('token');
    this.service.authenticate(token).subscribe((resp)=>{
      localStorage.setItem('session-token', resp['token']);
      this.router.navigate(['dashboard/tenders']);
    });
  }

}