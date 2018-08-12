import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../app-models/user';
import { MatDialog } from '../../../node_modules/@angular/material';
import { ProfileDialog } from '../dialogs/profile-dialog';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private service: LoginService,
    private userSvc: UserService) { }

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    this.service.authenticate(token).subscribe((resp: any) => {
      const user = resp && resp.user;
      if (user) {
        delete user.password;
        localStorage.setItem('session-token', resp.token);
        this.userSvc.setUser(user);
        if (!user.activated) {
          this.passwordPrompt(user);
        } else {
          this.router.navigate(['dashboard']);
        }
      }
    });
  }

  passwordPrompt(user: User) {
    const dialogRef = this.dialog.open(ProfileDialog, { data: user, disableClose: true, width: '600px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['cost-estimates/list']);
      }
    });
  }

}
