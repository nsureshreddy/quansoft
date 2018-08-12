import { MatDialogRef, MatDialog } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.html',
})
export class DeleteDialog {
  constructor(public dialogRef: MatDialogRef<DeleteDialog>, public dialog: MatDialog) {
  }

  close(confirm) {
    this.dialogRef.close(confirm);
  }
}
