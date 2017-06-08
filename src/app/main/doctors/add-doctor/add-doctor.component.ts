import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../services";
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'add-doctor',
    templateUrl: './add-doctor.component.html'
})
export class AddDoctor implements OnInit {
    doctor: any = {description:""};

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
        $('.mydatepicker').datepicker();
    }

    addDoctor() {
        this.userService.addPatient(this.doctor).subscribe((data) => {
            this.router.navigate(['doctors-list']);
        }, (error) => {

        });
    }
}