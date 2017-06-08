import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { AuthService } from "../../authentication/auth.service";
import { Config } from '../../shared/config';

@Injectable()
export class UserService{
	constructor(private http:Http, private authService:AuthService){

	}

	addPatient(user){
		return this.addUser(user,1);
	}

	addDoctor(user){
		return this.addUser(user,2);
	}

	addUser(user,type:Number){
		let headers = new Headers();
		headers.append('Authorization', 'bearer '+this.authService.userToken());
		return this.http.post(Config.BaseUrl+'users/'+type,user,{headers:headers}).map(res => res.json());
	}

	getPatients(){
		return this.getUsers(1);
	}

	getDoctors(){
		return this.getUsers(2);
	}

	getUsers(type:Number){
		let headers = new Headers();
		headers.append('Authorization', 'bearer '+this.authService.userToken());
		return this.http.get(Config.BaseUrl+'users/'+type,{headers:headers}).map(res => res.json());
	}

	getUserById(userId){
		let headers = new Headers();
		headers.append('Authorization', 'bearer '+this.authService.userToken());
		return this.http.get(Config.BaseUrl+'users/'+userId,{headers:headers}).map(res => res.json());
	}
}