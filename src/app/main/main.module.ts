import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './main.routes';

import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard';
import { PatientsList, AddPatient } from "./patients";
import { DoctorsList, AddDoctor } from "./doctors";
import { Appointement } from "./appointement";
import { Traitement } from "./traitement";

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    AddPatient,
    PatientsList,
    DoctorsList,
    AddDoctor,
    Appointement,
    Traitement
  ],
  imports: [
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: []
})
export class MainModule {}
