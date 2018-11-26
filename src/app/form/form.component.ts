import {Component, OnInit} from '@angular/core';
import {UserForm} from '../_models/UserForm';
import {ActivatedRoute, Router} from '@angular/router';
import {HrdfServerProviderService} from '../providers/hrdf-server-provider.service';
import {Data} from '../providers/data';
import {MatDialog} from '@angular/material';
import {MyAlertDialogComponent} from '../my-alert-dialog/my-alert-dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss', '../../assets/forms.scss']
})
export class FormComponent implements OnInit {
  submitted = false;
  isLoading = false;
  private answers;
  titles = ['Mr', 'Mrs', 'Ms'];
  model = new UserForm('', this.answers, '', '', '', '', '', false, '', '');

  constructor(private router: Router,
              private hrdfserver: HrdfServerProviderService,
              private route: ActivatedRoute,
              private data: Data,
              private dialog: MatDialog) {

    console.log(this.data.storage);
    this.answers = this.data.storage.results;
    this.model.answers = this.answers;
  }

  onSubmit() {
    this.submitted = true;
    this.isLoading = true;
    console.log('answers = ');
    console.log(this.answers);
    console.log('model = ');
    console.log(this.model);

    this.hrdfserver.createVisitor(this.model)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        },
        () => {
          this.alert(this.model.email);
          // setTimeout(() => {
          this.isLoading = false;
            this.goHome();
          // }, 100);
        });
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  ngOnInit() {

  }

  goHome() {
    this.router.navigate(['']);
  }

  goDashboard() {
    this.router.navigate(['Dashboard']);
    // console.log(this.model);
  }

  alert(data) {
    const dialogRef = this.dialog.open(MyAlertDialogComponent, {
      data: {
        email: data
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
      if (result === 'confirm') {
        console.log('successful');
      }
    });
  }

}
