import {Component, OnInit} from '@angular/core';
import {UserForm} from '../_models/UserForm';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss', '../../assets/forms.scss']
})
export class FormComponent implements OnInit {
  constructor() {
  }

  titles = ['Mr', 'Mrs', 'Ms', 'Sir'];
  // model = new UserForm(1, this.titles[2], 'Fatin Nabilah', 'whatever', 'fatin@gmail.com', '0173427423', 'Feets', 'Mayor', false);
  model = new UserForm(1, this.titles[1], 'fatin', 'wat');
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
}
