import { Component } from '@angular/core';
import { AuthService } from "../../authentication/auth.service";
declare var $:any;
declare var swal:any;

@Component({
	moduleId: module.id,
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
	user = {};

	constructor(private authService:AuthService){
		this.user = this.authService.getCurrentUser();
	}

	ngOnInit() {
		
		// only for patients
		$('#glycemie-info').click(function () {
			swal({
				title: "Confirmation",
				text: "Veuiller Confirmer le pélèvement",
				type: "info",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Confirmer",
				cancelButtonText: "Annuler",
				closeOnConfirm: false
			}, function () {
				swal("Envoyé!", "Le prélèvement a été envoyer avec succès.", "success");
				$("#glycemie").modal('hide');
			});
		});

		$('#tension-info').click(function () {
			swal({
				title: "Confirmation",
				text: "Veuiller Confirmer le pélèvement",
				type: "info",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Confirmer",
				cancelButtonText: "Annuler",
				closeOnConfirm: false
			}, function () {
				swal("Envoyé!", "Le prélèvement a été envoyer avec succès.", "success");
				$("#tension").modal('hide');
			});
		});

		$('#poids-info').click(function () {
			swal({
				title: "Confirmation",
				text: "Veuiller Confirmer le pélèvement",
				type: "info",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Confirmer",
				cancelButtonText: "Annuler",
				closeOnConfirm: false
			}, function () {
				swal("Envoyé!", "Le prélèvement a été envoyer avec succès.", "success");
				$("#poids").modal('hide');
			});
		});

		$('#transport-info').click(function () {
			swal({
				title: "Confirmation",
				text: "Veuiller Confirmer la réservation",
				type: "info",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Confirmer",
				cancelButtonText: "Annuler",
				closeOnConfirm: false
			}, function () {
				swal("Envoyé!", "La réservation a été envoyer avec succès.", "success");
				$("#transport").modal('hide');
			});
		});
	}

	getDate(){
		return new Date().toISOString().slice(0,10)+'  '+new Date().toTimeString().slice(0, 5);
	}
}
