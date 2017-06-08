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
	user = {};

	constructor(private authService: AuthService, 
				private router: Router) {}

	loginUser() {
		this.authService.login(this.user).subscribe((data) => {
			Config.current_user = data.user;
			Config.token = data.token;
			this.authService.save(data.user,data.token);
			this.router.navigate(['/main']);
		},(error)=>{
			console.log(error);
		});
	}
}