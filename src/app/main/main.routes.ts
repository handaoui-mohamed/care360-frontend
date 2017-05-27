import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { MainComponent } from './main.component';

export const ROUTES: Routes = [
	{ path: '', component: MainComponent, children:[
		{ path: '', component: DashboardComponent },
	]}
];
