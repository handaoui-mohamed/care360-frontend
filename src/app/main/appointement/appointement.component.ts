import { Component, OnInit } from "@angular/core";
declare var $:any;

@Component({
	moduleId: module.id,
	selector: 'appointement',
	templateUrl: './appointement.component.html'
})
export class Appointement implements OnInit {
	appointements: any[] = [];

	//TODO: fixed load time
	ngOnInit() {
		$.CalendarApp.init()
	}
}