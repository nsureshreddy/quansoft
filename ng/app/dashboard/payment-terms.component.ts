import { Component, OnInit, Input } from '@angular/core';
import { PaymentTerm } from '../app-models/paymentTerms';
import { ProposalService } from '../proposal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-terms',
  templateUrl: './payment-terms.component.html',
  styleUrls: ['./payment-terms.component.css']
})
export class PaymentTermsComponent implements OnInit {
  @Input() stepper;
  terms: PaymentTerm[] = new Array<PaymentTerm>();
  jobId: number;
  constructor(private route: ActivatedRoute, private proposalService: ProposalService) { }

  ngOnInit() {
    this.jobId = +this.route.snapshot.paramMap.get('jobId');
  }

  addActivity() {
    let term = Object.assign(new PaymentTerm, { description: '' });
    this.terms.push(term);
  }

  updatePaymentTerms() {
    this.proposalService.updatePaymentTerms(this.terms, this.jobId)
      .subscribe(resp => {
        this.stepper.next();
      }, err => {
      });
  }
}
