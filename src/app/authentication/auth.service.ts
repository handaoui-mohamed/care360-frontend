import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { BaseUrl } from '../shared/constants';

@Injectable()
export class AuthService{
	constructor(private http:Http){}

	login(user:any/*to be changed to User*/){
		return this.http.post(BaseUrl+'login',user).map(res => res.json());
	}
} 