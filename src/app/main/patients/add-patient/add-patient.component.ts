import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../services";
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'add-patient',
	templateUrl: './add-patient.component.html',
    providers: [UserService]
})
export class AddPatient implements OnInit {
	patient: any = {description:""};

    constructor(private userService:UserService,private router:Router){}
	ngOnInit() {
		$('.mydatepicker').datepicker();
	}

    addPatient(){
        this.userService.addPatient(this.patient).subscribe((data)=>{
            this.router.navigate(['patients-list']);
        },(error)=>{

        });
    }
}