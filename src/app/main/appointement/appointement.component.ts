import { Component, AfterViewInit } from "@angular/core";
import { AuthService } from "../../authentication/auth.service";
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'appointement',
	templateUrl: './appointement.component.html'
})
export class Appointement implements AfterViewInit {
	appointements: any[] = [];
	user: any={};

	constructor(private authService:AuthService){
		this.user = authService.getCurrentUser();
	}

	ngAfterViewInit() {
		$.getScript("assets/js/moment.min.js");
		$.getScript('assets/js/fullcalendar.min.js');
		$.getScript("assets/js/jquery.fullcalendar.js");
		$.getScript("assets/js/cal-init.js");
	}
}