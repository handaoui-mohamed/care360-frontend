import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../services";
import { Config } from "../../../shared/config";
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'add-admin',
    templateUrl: './add-admin.component.html',
    providers: [UserService]
})
export class AddAdmin implements OnInit {
    admin: any = {
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
    toastr:any;

    constructor(private userService: UserService, private router: Router) {
        this.toastr = Config.toastr;
     }

    ngOnInit() {
        $('.mydatepicker').datepicker();
    }

    addadmin() {
        this.userService.addAdmin(this.admin).subscribe((data) => {
			this.toastr.success("L'administrateur a été ajouter!", 'Succès!');
            this.router.navigate(['main/admins-list']);
        }, (error) => {
            error = JSON.parse(error._body)["message"];
			this.toastr.warning(error[Object.keys(error)[0]], 'Erreur!');
        });
    }
}