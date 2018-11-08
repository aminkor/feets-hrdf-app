import {Component, OnInit} from '@angular/core';
import {UserForm} from '../_models/UserForm';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss', '../../assets/forms.scss']
})
export class FormComponent implements OnInit {
  constructor(private router: Router) {
  }

  titles = ['Mr', 'Mrs', 'Ms', 'Sir'];
  // model = new UserForm(1, this.titles[2], 'Fatin Nabilah', 'whatever', 'fatin@gmail.com', '0173427423', 'Feets', 'Mayor', false);
  model = new UserForm(1,'', '','','','','','',false);
  submitted = false;

  onSubmit() {
    this.submitted = true;
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
}
