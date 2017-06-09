import { Routes } from '@angular/router';
import { NotFoundErrorComponent } from './not-found';
import { IndexComponent } from "./index"
import { LoginComponent } from './authentication/login';
import { LockScreenComponent } from './authentication/lockscreen';

export const ROUTES: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'lockscreen', component: LockScreenComponent },
	{ path: '', component: LoginComponent },
	{ path: '**', component: NotFoundErrorComponent },
	//   { path: '',      component: HomeComponent },
	//   { path: 'home',  component: HomeComponent },
	//   { path: 'about', component: AboutComponent },
	//   { path: 'detail', loadChildren: './+detail#DetailModule'},
	//   { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
	//   { path: '**',    component: NoContentComponent },
];
