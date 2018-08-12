import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../app-models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.html',
})
export class ProfileDialog implements OnInit {
  user: User;
  userForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<ProfileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private service: UserService) {
  }

  ngOnInit() {
    this.user = this.data;
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.user.phone, []),
      userId: new FormControl(this.user.userId, []),
      password: new FormControl(this.user.password, [Validators.required])
    });
  }

  save() {
    const user: User = Object.assign({}, this.user, this.userForm.value);
    user.activated = true;
    this.service.updateUser(user).subscribe((resp: any) => {
      this.service.setUser(resp);
      this.dialogRef.close(true);
    });
  }
}
