import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { MainComponent } from './main.component';
import { PatientsList, AddPatient } from "./patients";
import { DoctorsList, AddDoctor } from "./doctors";
import { AdminsList, AddAdmin } from "./admins";
import { Appointement } from "./appointement";
import { Traitement } from "./traitement";
import { MedicalFile } from "./medical_file";

export const ROUTES: Routes = [
	{ path: 'main', component: MainComponent, children:[
		{ path: '', component: DashboardComponent },
		{ path: 'add-patient', component: AddPatient },
		{ path: 'patients-list', component: PatientsList },
		{ path: 'my-patients', component: PatientsList },
		{ path: 'add-doctor', component: AddDoctor },
		{ path: 'doctors-list', component: DoctorsList },
		{ path: 'add-admin', component: AddAdmin },
		{ path: 'admins-list', component: AdminsList },
		{ path: 'appointement', component: Appointement },
		{ path: 'traitement/:patientId', component: Traitement },
		{ path: 'medical_file/:patientId', component: MedicalFile }
	]}
];
