import { Component } from "@angular/core";
import { UserService } from "../../services";

@Component({
	moduleId: module.id,
	selector: 'admins-list',
	templateUrl: './admins.component.html',
	providers: [UserService]
})
export class AdminsList{
	admins: any[] = [];

	constructor(private userService:UserService){
		this.userService.getAdmins().subscribe((data)=>{
			this.admins = data.elements;
		},(error)=>{});
	}
}