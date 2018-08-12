import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar, MatDialog, MatAutocompleteSelectedEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { User } from '../../app-models/user';
import { UserService } from '../../services/user.service';
import { DeleteDialog } from '../../dialogs/delete-dialog.component';
import { ProposalService } from '../../services/proposal.service';
import { Project } from '../../app-models/project';

@Component({
  selector: 'app-users-conditions',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  users: User[];
  profileView = false;
  projects: Project[];
  filteredProjects: Observable<Project[]>;
  showAssignedProjects = false;

  projectCtrl = new FormControl();
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('projectInput') projectInput: ElementRef;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  userTypes: any = [
    { key: 'vendor', label: 'Vendors' },
    { key: 'builder', label: 'Builders' },
    { key: 'engineer', label: 'Engineers' },
    { key: 'manager', label: 'Managers' }
  ];

  constructor(public dialog: MatDialog,
    private snackbar: MatSnackBar,
    private service: UserService,
    private proposalService: ProposalService) {
    this.filteredProjects = this.projectCtrl.valueChanges.pipe(
      startWith(null),
      map((project: string | null) => project ? this.filter(project) : this.projects.slice()));
  }

  ngOnInit() {
    this.get();
    this.getProjects();
  }

  get() {
    this.service.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  signup() {
    this.profileView = false;
    this.user = Object.assign({}, new User);
    this.prepareUserForm();
  }

  edit(user: User) {
    this.profileView = false;
    this.user = user;
    this.showAssignedProjects = ['manager', 'engineer'].indexOf(this.user.designation) >= 0;
    this.prepareUserForm();
  }

  delete(_id) {
    this.service.deleteUser(_id).subscribe((resp: any) => {
      this.snackbar.open('User Deleted.', 'Dismiss', {});
      const index = this.users.findIndex((user: User) => {
        return _id === user._id;
      });

      if (this.user && this.user._id === _id) {
        this.profileView = false;
        this.user = null;
      }

      this.users.splice(index, 1);
    });
  }

  save() {
    if (this.userForm.valid) {
      const user: User = Object.assign(this.userForm.value, new User);
      user._id = this.user._id;
      if (['manager', 'engineer'].indexOf(user.designation) < 0) {
        user.assignedProjects = [];
      } else {
        user.assignedProjects = this.user.assignedProjects;
      }
      if (user._id) {
        this.service.updateUser(user).subscribe((resp: any) => {
          this.snackbar.open('User Details Updated.', 'Dismiss', {});
          const index = this.users.findIndex((usr: User) => {
            return usr._id === user._id;
          });
          this.users.splice(index, 1, user);
          this.user = null;
        });
      } else {
        this.service.signupUser(user).subscribe((resp: any) => {
          this.snackbar.open('User Registration Completed.', 'Dismiss', {});
          this.users.push(resp.user);
          this.user = null;
        });
      }
    }
  }

  detail(user: User) {
    this.profileView = true;
    this.user = user;
  }

  prepareUserForm() {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.user.phone, []),
      userId: new FormControl(this.user.userId, []),
      designation: new FormControl(this.user.designation, [Validators.required]),
      password: new FormControl(this.user.password, [Validators.required]),
      assignedProjects: new FormControl(this.user.assignedProjects || [], []),
    });
  }

  getProjects() {
    this.proposalService.getProposals({ name: 1, _id: 1, jobId: 1 }).subscribe((resp: any) => {
      this.projects = resp;
    });
  }

  cancel() {
    if (this.user._id) {
      this.profileView = true;
    } else {
      this.user = null;
    }
  }

  deleteDialog(_id): void {
    const dialogRef = this.dialog.open(DeleteDialog, { width: '300px' });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(_id);
      }
    });
  }

  onDesignationChange() {
    const role = this.userForm.get('designation').value;
    this.showAssignedProjects = role === 'manager' || role === 'engineer';
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.value;
    this.user.assignedProjects = this.user.assignedProjects || [];
    if (this.user.assignedProjects.indexOf(value) < 0) {
      this.user.assignedProjects.push(event.option.value);
    }

    this.projectCtrl.setValue(null);
    this.projectInput.nativeElement.value = '';
  }

  removeAssignedProject(project: Project): void {
    const index = this.user.assignedProjects.findIndex((p) => {
      return project.jobId === p.jobId;
    });
    this.user.assignedProjects.splice(index, 1);
  }

  filter(value: any): Project[] {
    let filterValue;
    if (typeof value === 'string') {
      filterValue = value.toLowerCase();
    } else {
      filterValue = value.name.toLowerCase();
    }

    return this.projects.filter(project => project.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
