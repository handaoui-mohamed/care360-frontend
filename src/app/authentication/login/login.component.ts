import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Config } from '../../shared/config';

@Component({
	moduleId: module.id,
	selector: "login",
	templateUrl: "login.component.html",
	providers: [AuthService]
})

export class LoginComponent {
	user = { type: "Patient" };

	constructor(private authService: AuthService, 
				private router: Router) {}

	loginUser() {
		console.log(this.user);
		this.authService.login(this.user).subscribe((data) => {
			Config.current_user = data.user;
			Config.token = data.token;
			this.router.navigate(['/']);
		},(error)=>{
			console.log(error);
		})
	}
}