import {Component, OnInit} from '@angular/core';
import {UserForm} from '../_models/UserForm';
import {ActivatedRoute, Router} from '@angular/router';
import {HrdfServerProviderService} from '../providers/hrdf-server-provider.service';
import {Data} from '../providers/data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss', '../../assets/forms.scss']
})
export class FormComponent implements OnInit {
  private answers;
  titles = ['Mr', 'Mrs', 'Ms'];
  submitted = false;
  model = new UserForm('', this.answers, '', '', '', '', '', false, '+601', '');
  constructor(private router: Router,
              private hrdfserver: HrdfServerProviderService,
              private route: ActivatedRoute,
              private data: Data) {

    console.log(this.data.storage);
    this.answers = this.data.storage.results;
    this.model.answers = this.answers;
  }

  onSubmit() {
    // this.submitted = true;
    // this.goDashboard();
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

}
