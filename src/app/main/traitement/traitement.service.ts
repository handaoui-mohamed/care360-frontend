import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { AuthService } from "../../authentication/auth.service";
import { Config } from "../../shared/config";

@Injectable()
export class TraitementService{
	constructor(private http:Http, private authService:AuthService){}

	getTraitement(userId){
		let headers = new Headers();
		headers.append('Authorization', 'bearer '+this.authService.userToken());
		return this.http.get(Config.BaseUrl+'traitements/'+userId,{headers:headers}).map(res => res.json());
	}

	addTraitement(userId,traitement){
		let headers = new Headers();
		headers.append('Authorization', 'bearer '+this.authService.userToken());
		return this.http.post(Config.BaseUrl+'traitements/'+userId,traitement,{headers:headers}).map(res => res.json());
	}

	deleteTraitement(traitementId){
		let headers = new Headers();
		headers.append('Authorization', 'bearer '+this.authService.userToken());
		return this.http.delete(Config.BaseUrl+'traitements/'+traitementId,{headers:headers}).map(res => res.json());
	}

	checkTraitement(traitement){
		let headers = new Headers();
		headers.append('Authorization', 'bearer '+this.authService.userToken());
		return this.http.put(Config.BaseUrl+'traitements/'+traitement.id,traitement,{headers:headers}).map(res => res.json());
	}
}