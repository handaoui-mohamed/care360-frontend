import { Component } from '@angular/core';
import { AuthService } from "../../authentication/auth.service";
import { SampleService } from "../services";
declare var $:any;
declare var swal:any;

@Component({
	moduleId: module.id,
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	providers: [SampleService]
})
export class DashboardComponent {
	user:any = {};
	newSample:any = {};

	constructor(private authService:AuthService, private sampleService:SampleService){
		this.user = this.authService.getCurrentUser();
	}

	ngOnInit() {
		// only for patients
		$('#glycemie-info').click(()=>{
			swal({
				title: "Confirmation",
				text: "Veuiller Confirmer le pélèvement",
				type: "info",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Confirmer",
				cancelButtonText: "Annuler",
				closeOnConfirm: false
			},()=>{
				swal("Envoyé!", "Le prélèvement a été envoyer avec succès.", "success");
				$("#glycemie").modal('hide');
				this.addNewSample("glycemie");
			});
		});

		$('#tension-info').click(()=>{
			swal({
				title: "Confirmation",
				text: "Veuiller Confirmer le pélèvement",
				type: "info",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Confirmer",
				cancelButtonText: "Annuler",
				closeOnConfirm: false
			},()=>{
				swal("Envoyé!", "Le prélèvement a été envoyer avec succès.", "success");
				$("#tension").modal('hide');
				this.addNewSample("tension");
			});
		});

		$('#poids-info').click(()=>{
			swal({
				title: "Confirmation",
				text: "Veuiller Confirmer le pélèvement",
				type: "info",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Confirmer",
				cancelButtonText: "Annuler",
				closeOnConfirm: false
			}, ()=>{
				swal("Envoyé!", "Le prélèvement a été envoyer avec succès.", "success");
				$("#poids").modal('hide');
				this.addNewSample("poids");
			});
		});

		$('#transport-info').click(()=>{
			swal({
				title: "Confirmation",
				text: "Veuiller Confirmer la réservation",
				type: "info",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Confirmer",
				cancelButtonText: "Annuler",
				closeOnConfirm: false
			},()=>{
				swal("Envoyé!", "La réservation a été envoyer avec succès.", "success");
				$("#transport").modal('hide');
			});
		});
	}

	getDate(){
		return new Date().toISOString().slice(0,10)+'  '+new Date().toTimeString().slice(0, 5);
	}

	addNewSample(type){
		this.newSample.type = type;
		console.log(this.newSample);
		this.sampleService.addSample(this.user.id,this.newSample).subscribe((data)=>{
			console.log(data.element);
			this.newSample = {};
		},(error)=>{});
	}
}
