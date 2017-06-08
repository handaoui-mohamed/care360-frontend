import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { MainComponent } from './main.component';
import { PatientsList, AddPatient } from "./patients";
import { DoctorsList, AddDoctor } from "./doctors";
import { Appointement } from "./appointement";

export const ROUTES: Routes = [
	{ path: 'main', component: MainComponent, children:[
		{ path: '', component: DashboardComponent },
		{ path: 'add-patient', component: AddPatient },
		{ path: 'patients-list', component: PatientsList },
		{ path: 'my-patients', component: PatientsList },
		{ path: 'add-doctor', component: AddDoctor },
		{ path: 'doctors-list', component: DoctorsList },
		{ path: 'appointement', component: Appointement }
	]}
];
