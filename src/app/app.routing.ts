import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './form/form.component';
import {DashboardSimulationComponent} from './dashboard-simulation/dashboard-simulation.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Form', component: FormComponent},
  {path: 'Dashboard', component: DashboardSimulationComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
