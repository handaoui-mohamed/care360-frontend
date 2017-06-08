import { Component } from "@angular/core";
import { UserService } from "../../services";

@Component({
	moduleId: module.id,
	selector: 'doctors-list',
	templateUrl: './doctors.component.html',
	providers: [UserService]
})
export class DoctorsList{
	doctors: any[] = [];

	constructor(private userService:UserService){
		this.userService.getDoctors().subscribe((data)=>{
			this.doctors = data.elements;
			console.log(this.doctors);
		},(error)=>{

		});
	}
}