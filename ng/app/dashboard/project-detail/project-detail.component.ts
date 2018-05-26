import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as jsPDF from 'jspdf';
import { Project } from '../../app-models/project';
import { ProposalService } from '../../services/proposal.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  constructor(private route: ActivatedRoute, private router: Router,
    private proposalService: ProposalService) { }

  ngOnInit() {
    let jobId = +this.route.snapshot.paramMap.get('jobId');
    this.proposalService.getProject(jobId).subscribe(resp => {
      if (!resp) {
        this.router.navigate(['dashboard/projects']);
      }
      this.project = Object.assign(new Project, resp);
    }, err => {
    });
  }

  download() {
    const elementToPrint = document.getElementById('page-1');

    const pdf = new jsPDF('landscape');
    pdf.addHTML(elementToPrint, () => {
      pdf.addPage();
      pdf.addHTML(document.getElementById('page-2'), () => {
        pdf.addPage();
        pdf.addHTML(document.getElementById('page-3'), () => {
          pdf.addPage();
          pdf.addHTML(document.getElementById('page-4'), () => {
            pdf.addPage();
            pdf.addHTML(document.getElementById('page-5'), () => {
              pdf.save(this.project.name + '_' + this.project.jobId +'.pdf');              
            });
          });
        });
      });
    });
  }  
}
