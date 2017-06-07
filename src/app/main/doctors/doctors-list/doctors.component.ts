import { Component } from "@angular/core";

@Component({
	moduleId: module.id,
	selector: 'doctors-list',
	templateUrl: './doctors.component.html'
})
export class DoctorsList{
	doctors: any[] = [];
}