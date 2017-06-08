import { Component, AfterViewInit } from "@angular/core";
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'appointement',
	templateUrl: './appointement.component.html'
})
export class Appointement implements AfterViewInit {
	appointements: any[] = [];

	ngAfterViewInit() {
		$.getScript("assets/js/moment.min.js");
		$.getScript('assets/js/fullcalendar.min.js');
		$.getScript("assets/js/jquery.fullcalendar.js");
		$.getScript("assets/js/cal-init.js");
	}
}