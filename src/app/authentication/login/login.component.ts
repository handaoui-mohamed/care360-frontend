import { Component, ViewContainerRef } from '@angular/core';
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
	toastr:any;
	constructor(private authService: AuthService,
		private router: Router, ) {
		this.toastr = Config.toastr;
	}

	loginUser() {
		this.authService.login(this.user).subscribe((data) => {
			this.toastr.success('Connexion avec succès!', 'Succès!');
			Config.current_user = data.user;
			Config.token = data.token;
			this.authService.save(data.user, data.token);
			this.router.navigate(['/main']);
		}, (error) => {
			this.toastr.warning("Nom d'utilisateur ou mot de passe incorrecte", 'Erreur!');
			console.log(error._body);
		});
	}
}