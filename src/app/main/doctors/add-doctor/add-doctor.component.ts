import { Component, OnInit } from "@angular/core";
declare var $:any;

@Component({
	moduleId: module.id,
	selector: 'add-doctor',
	templateUrl: './add-doctor.component.html'
})
export class AddDoctor implements OnInit{
	doctor: any = {};

	ngOnInit(){
        $('.mydatepicker').datepicker();
	}
}