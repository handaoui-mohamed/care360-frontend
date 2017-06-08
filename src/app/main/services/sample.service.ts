import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { AuthService } from "../../authentication/auth.service";
import { Config } from '../../shared/config';

@Injectable()
export class SampleService{
	constructor(private http:Http, private authService:AuthService){}

	addSample(userId,sample){
		let headers = new Headers();
		headers.append('Authorization', 'bearer '+this.authService.userToken());
		return this.http.post(Config.BaseUrl+'samples/'+userId,sample,{headers:headers}).map(res => res.json());
	}

	getSamples(userId){
		let headers = new Headers();
		headers.append('Authorization', 'bearer '+this.authService.userToken());
		return this.http.get(Config.BaseUrl+'samples/'+userId,{headers:headers}).map(res => res.json());
	}
}