import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-my-alert-dialog',
  templateUrl: './my-alert-dialog.component.html'
})
export class MyAlertDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
