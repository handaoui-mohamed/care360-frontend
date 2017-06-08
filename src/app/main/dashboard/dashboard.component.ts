import { Component } from '@angular/core';
import { AuthService } from "../../authentication/auth.service";

@Component({
	moduleId: module.id,
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
	user = {};

	constructor(private authService:AuthService){
		this.user = this.authService.getCurrentUser();
	}
}
