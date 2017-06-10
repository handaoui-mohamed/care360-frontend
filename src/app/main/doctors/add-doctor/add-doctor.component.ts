import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../services";
import { Config } from "../../../shared/config";
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'add-doctor',
    templateUrl: './add-doctor.component.html',
    providers: [UserService]
})
export class AddDoctor implements OnInit {
    doctor: any = {
        // first_name: "handaoui",
        // last_name: "mohamed",
        // email: "test@test.com",
        // address: "quelque part",
        // phone_number: "56465465465",
        // username: "doctor1",
        // birthday: "03/04/1994",
        // cases: [1],
        // password: "03041994"
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

    addDoctor() {
        this.doctor.cases = [];
        if (this.alzheimer) this.doctor.cases.push(1);
        if (this.pregnent) this.doctor.cases.push(2);
        if (this.diabetic) this.doctor.cases.push(3);
        this.userService.addDoctor(this.doctor).subscribe((data) => {
			this.toastr.success('Le médecin a été ajouter!', 'Succès!');
            this.router.navigate(['main/doctors-list']);
        }, (error) => {
            error = JSON.parse(error._body)["message"];
			this.toastr.warning(error[Object.keys(error)[0]], 'Erreur!');
        });
    }
}