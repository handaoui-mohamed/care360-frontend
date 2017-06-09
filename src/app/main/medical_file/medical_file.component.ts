import { Component } from "@angular/core";
import { AuthService } from "../../authentication/auth.service";
import { TraitementService } from "../traitement/traitement.service";
import { ActivatedRoute } from '@angular/router';
import { UserService,SampleService } from "../services";

@Component({
	moduleId: module.id,
	selector: "medical_file",
	templateUrl: "./medical_file.component.html",
	styleUrls: ['./medical_file.component.scss'],
	providers: [TraitementService,UserService,SampleService]
})
export class MedicalFile {
	user = {};
	patient = {};
	patientId: String;
	todos: any[] = [];
	samples:any[] = [];

	constructor(private authService: AuthService, private traitementService: TraitementService, private route: ActivatedRoute,
				private userService:UserService, private sampleService:SampleService) {
		this.route.params.subscribe(params => {
			this.patientId = params['patientId'];
			this.userService.getUserById(this.patientId).subscribe((data)=>{
				this.patient = data.element;
			},(error)=>{});
			this.sampleService.getSamples(this.patientId).subscribe((data)=>{
				this.samples = data.elements;
			},(error)=>{});
			this.traitementService.getTraitement(this.patientId).subscribe((data) => {
				this.todos = data.elements;
			}, (error) => { });
		});
		this.user = this.authService.getCurrentUser();
	}
}