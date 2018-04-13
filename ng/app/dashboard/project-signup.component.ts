import { Component } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Project } from '../app-models/project';
import { MatSnackBar } from '@angular/material';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'project-signup',
  templateUrl: './project-signup.component.html',
  styleUrls: ['./project-signup.component.css']
})
export class ProjectSignupComponent {
  
  isLinear = true;
  project: Project;
  participants = new FormControl();
  scope = new FormControl();
  orgForm: FormGroup;
  orderForm: FormGroup;
  scopeForm: FormGroup;

  participantsList = ['Architect', 'Fire Fighting', 'Structural', 'Landscape', 'Electrical', 'Plumbing', 'Traffic'];
  scopeList = ['Cost Estimates', 'Contracts Management', 'Bill Auditing'];
  constructor(private _formBuilder: FormBuilder, 
    public snackBar: MatSnackBar,
    private router: Router,
    private proposalService: ProposalService) {
    
    this.orgForm = this._formBuilder.group({
      name: ['', Validators.required],
      client: ['', Validators.required],
      region: ['', Validators.required],
      location: ['', Validators.required]
    });

    this.orderForm = this._formBuilder.group({
      siteArea: ['', Validators.required],
      builtupArea: ['', Validators.required],
      numberOfFloors: ['', Validators.required],
      numberOfBuildings: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    this.scopeForm = this._formBuilder.group({
      type: ['', Validators.required],
      stage: ['New', Validators.required],
      scope: [[], Validators.required],
      fsi: ['', Validators.required],
      participants: [[], Validators.required]
    });
  }

  signup() {
    this.project = Object.assign(new Project, 
      this.orgForm.value, 
      this.orderForm.value, 
      this.scopeForm.value);

    this.proposalService.projectSignup(this.project).subscribe(resp => {
      this.snackBar.open('Project Created Successfully.', '', {
        duration: 3000,
      });
      this.router.navigate(['dashboard/projects']);
    }, err => {
    });
  }
}