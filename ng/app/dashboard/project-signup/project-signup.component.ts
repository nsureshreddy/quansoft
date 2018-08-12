import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material';
import { Project } from '../../app-models/project';
import { ProposalService } from '../../services/proposal.service';

@Component({
  selector: 'project-signup',
  templateUrl: './project-signup.component.html',
  styleUrls: ['./project-signup.component.css']
})
export class ProjectSignupComponent implements OnInit {

  isLinear = true;
  project: Project;
  participants = new FormControl();
  scope = new FormControl();
  orgForm: FormGroup;
  orderForm: FormGroup;
  scopeForm: FormGroup;

  participantsList = ['Architect', 'Fire Fighting', 'Structural', 'Landscape', 'Electrical', 'Plumbing', 'Traffic'];
  scopeList = ['Cost Estimates', 'Contracts Management', 'Bill Auditing'];
  constructor(
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router,
    private proposalService: ProposalService) {

    this.orgForm = this._formBuilder.group({
      name: ['', Validators.required],
      client: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      region: [''],
      location: ['']
    });

    this.orderForm = this._formBuilder.group({
      siteArea: [''],
      builtupArea: [''],
      numberOfFloors: [''],
      numberOfBuildings: [''],
      startDate: [''],
      endDate: ['']
    });

    this.scopeForm = this._formBuilder.group({
      type: [''],
      stage: ['New', Validators.required],
      scope: [[]],
      fsi: [''],
      participants: [[]]
    });
  }

  ngOnInit() {
    const jobId = +this.route.snapshot.paramMap.get('jobId');
    if (jobId) {
      this.proposalService.getProject(jobId).subscribe((data) => {
        if (!data) {
          this.router.navigate(['dashboard/proposals']);
          return;
        }
        this.project = Object.assign(new Project, data);

        this.orgForm = this._formBuilder.group({
          name: [this.project.name, Validators.required],
          client: [this.project.client, Validators.required],
          email: [this.project.email, [Validators.required, Validators.email]],
          region: [this.project.region],
          location: [this.project.location]
        });

        this.orderForm = this._formBuilder.group({
          siteArea: [this.project.siteArea],
          builtupArea: [this.project.builtupArea],
          numberOfFloors: [this.project.numberOfFloors],
          numberOfBuildings: [this.project.numberOfBuildings],
          startDate: [this.project.startDate],
          endDate: [this.project.endDate]
        });

        this.scopeForm = this._formBuilder.group({
          type: [this.project.type],
          stage: [this.project.stage, Validators.required],
          scope: [[this.project.scope]],
          fsi: [this.project.fsi],
          participants: [[this.project.participants]]
        });

      });
    }
  }

  signup() {
    if (!this.project.jobId) {
      this.project = Object.assign(new Project, this.orgForm.value, this.orderForm.value, this.scopeForm.value);
      this.project.scope = this.scope.value;
      this.project.participants = this.participants.value;
      this.proposalService.projectSignup(this.project).subscribe((resp: any) => {
        this.snackBar.open(resp.msg, 'Dismiss', {});
        this.router.navigate(['dashboard/proposals']);
      });
    } else {
      this.project = Object.assign(this.project, this.orgForm.value, this.orderForm.value, this.scopeForm.value);
      this.project.scope = this.scope.value;
      this.project.participants = this.participants.value;
      this.proposalService.projectSignup(this.project, true).subscribe((resp: any) => {
        this.snackBar.open(resp.msg, 'Dismiss', {});
        this.router.navigate(['dashboard/proposals']);
      });
    }
  }
}
