import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { TermsAndConditions } from '../../app-models/termsAndConditions';
import { ProposalService } from '../../services/proposal.service';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent {
  @Input() project;
  terms: TermsAndConditions;
  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private proposalService: ProposalService,
    private snackbar: MatSnackBar) {
    this.terms = new TermsAndConditions();
  }

  ngOnChanges(model: any) {
    this.project = model.project && model.project.currentValue;
    if (this.project && Object.keys(this.project).length > 0) {
      this.terms = this.project.termsAndonditions;
    }
  }

  updateTerms() {
    let jobId = +this.route.snapshot.paramMap.get('jobId');
    this.proposalService.updateProjectTerms(this.terms, jobId).subscribe(resp => {
      this.snackbar.open('Terms & Conditions Updated.', '', {duration: 3000});
      this.router.navigate(['dashboard/proposals']);
    }, err => {
    });
  }
}