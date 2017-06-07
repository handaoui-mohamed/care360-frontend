import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
	moduleId: module.id,
	selector: 'add-patient',
	templateUrl: './add-patient.component.html'
})
export class AddPatient implements OnInit{
	patient: any = {};


	ngOnInit(){
        $('.mydatepicker').datepicker();
	}
}