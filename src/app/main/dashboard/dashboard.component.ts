import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
	title = 'app works!';
	user = {
		username: 'handaoui',
		password: 'handaoui',
		full_name: 'handaoui',
		type: 'Patient'
	};
}
