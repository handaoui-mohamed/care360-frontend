import { Component } from '@angular/core';
import { UserService } from "../../services";

@Component({
	moduleId: module.id,
	selector: 'patients-list',
	templateUrl: './patients.component.html',
    providers: [UserService]
})
export class PatientsList{
	patients: any[] = [];

	constructor(private userService:UserService){
		this.userService.getPatients().subscribe((data)=>{
			this.patients = data.elements;
		},(error)=>{

		});
	}
}