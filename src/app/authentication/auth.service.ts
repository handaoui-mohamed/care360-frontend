import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Config } from '../shared/config';

@Injectable()
export class AuthService{
	constructor(private http:Http, private router:Router){}

	login(user){
		return this.http.post(Config.BaseUrl+'login',user).map(res => res.json());
	}

	init(){
		Config.current_user = this.getCurrentUser();
		Config.token = this.userToken();
		if (!Config.current_user || !Config.token){
			this.router.navigate(['/login']);
		}
	}

	save(user,token){
		localStorage.setItem('current_user',JSON.stringify(user));
		localStorage.setItem('token',token);
	}

	getCurrentUser(){
		return JSON.parse(localStorage.getItem('current_user'));
	}

	userToken(){
		return localStorage.getItem('token');
	}

	logout(){
		localStorage.removeItem('current_user');
		localStorage.removeItem('token');
	}
} 