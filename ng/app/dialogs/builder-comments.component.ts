import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { ProposalService } from '../services/proposal.service';

@Component({
  selector: 'app-builder-comments-component',
  templateUrl: './builder-comments.component.html',
})
export class BuilderComments {
  approved: boolean;
  jobId: number;
  comments: string;
  constructor(
    private service: ProposalService,
    public dialogRef: MatDialogRef<BuilderComments>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog) {
    this.jobId = data.jobId;
    this.approved = data.approved;
  }

  close() {
    this.dialogRef.close();
  }

  saveComments() {
    this.service.approveOrRejectEstimates(this.jobId, {
      status: this.approved,
      comments: this.comments
    }).subscribe(response => {
      this.dialogRef.close({ status: this.approved });
    });
  }
}
