import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './form/form.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Form', component: FormComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
