import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from "../../shared/config";
import { AuthService } from "../auth.service";

@Component({
	moduleId:module.id,
	selector: 'lock-screen',
	templateUrl: "./lockscreen.component.html",
	providers: [AuthService]
})

export class LockScreenComponent{
	disableLogin:boolean = false;
	user = {username:'Username'};

	constructor(private router:Router, private authService:AuthService){
		this.user = authService.getCurrentUser();
	}

	loginUser(){
		console.log(this.user);
		this.authService.login(this.user).subscribe((data) => {
			Config.token = data.token;
			this.authService.save(data.user,data.token);
			this.router.navigate(['/main']);
		},(error)=>{
			console.log(error);
		});
	}
}