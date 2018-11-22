import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routing';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { DashboardSimulationComponent } from './dashboard-simulation/dashboard-simulation.component';
import {HrdfServerProviderService} from './providers/hrdf-server-provider.service';
import {Data} from './providers/data';
import {ActionCableService} from './providers/action-cable.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    DashboardSimulationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    RoundProgressModule,
    MatCheckboxModule,
    routing
  ],
  providers: [
    HrdfServerProviderService,
    Data,
    ActionCableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
