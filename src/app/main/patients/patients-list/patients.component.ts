import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'patients-list',
	templateUrl: './patients.component.html'
})
export class PatientsList{
	patients: any[] = [];
}