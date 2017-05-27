import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId:module.id,
	selector: 'lock-screen',
	templateUrl: "./lockscreen.component.html",
})

export class LockScreenComponent{
	disableLogin:boolean = false;
	user = {username:'Handaoui'};

	constructor(private router:Router){}

	loginUser(){
		console.log("lockscreen");
		this.router.navigate(['/']);
	}
}