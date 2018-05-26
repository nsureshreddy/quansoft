import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../../app-models/project';
import { ProposalService } from '../../services/proposal.service';

@Component({
  selector: 'new-proposal',
  templateUrl: 'proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  project: Project = new Project();
  
  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private proposalService: ProposalService) {
  }

  ngOnInit() {
    let jobId = +this.route.snapshot.paramMap.get('jobId');
    this.proposalService.getProject(jobId).subscribe((data)=>{
      if (!data) {
        this.router.navigate(['dashboard/proposals']);
        return;
      }
      this.project = Object.assign(new Project, data);
    }, err => {
    });
  }
}
