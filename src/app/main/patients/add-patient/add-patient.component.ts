import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../services";
import { Config } from "../../../shared/config";
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'add-patient',
    templateUrl: './add-patient.component.html',
    providers: [UserService]
})
export class AddPatient implements OnInit {
    patient: any = {
        // first_name:"handaoui",
        // last_name:"mohamed",
        // email:"test@test.com",
        // address:"quelque part",
        // phone_number:"56465465465",
        // username:"mohamed1",
        // birthday:"03/04/1994",
        // password:"03041994"
    };
    alzheimer = false;
    pregnent  = false;
    diabetic  = false;
    toastr:any;
    constructor(private userService: UserService, private router: Router) {
		this.toastr = Config.toastr;
    }
    ngOnInit() {
        $('.mydatepicker').datepicker();
    }

    addPatient() {
        this.patient.cases = [];
        if (this.alzheimer) this.patient.cases.push(1);
        if (this.pregnent) this.patient.cases.push(2);
        if (this.diabetic) this.patient.cases.push(3);
        this.userService.addPatient(this.patient).subscribe((data) => {
			this.toastr.success('Le patient a été ajouter!', 'Succès!');
            this.router.navigate(['main/patients-list']);
        }, (error) => {
            error = JSON.parse(error._body)["message"];
			this.toastr.warning(error[Object.keys(error)[0]], 'Erreur!');
        });
    }
}