import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../authentication/auth.service";
import { Config } from "../shared/config";
declare var $: any;
declare var swal: any;

@Component({
	moduleId: module.id,
	selector: 'main',
	templateUrl: './main.component.html',
	styles: ['./main.component.scss'],
	providers: [AuthService]
})

export class MainComponent implements OnInit {
	user = {};

	worker: Worker;
	timer: any;

	constructor(private router: Router, private authService: AuthService) {
		authService.init();
		this.user = Config.current_user;
		this.startTimer();
	}

	ngOnInit() {
		// only for patients
		$('#sa-warning').click(function () {
			swal({
				title: "Êtes-vous sûr?",
				text: "Vous ne pourrez pas revenir en arrière!",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Oui, Signaler!",
				cancelButtonText: "Annuler",
				closeOnConfirm: false
			}, function () {
				swal("Envoyé!", "L'alerte a été envoyer avec succès.", "success");
				$("#responsive-modal").modal('hide');
			});
		});
	}

	@HostListener('mousemove', ['$event'])
	onMouseMove(event) {
		this.stopTimer();
		this.startTimer();
	}

	startTimer() {
		var blob = new Blob([
			`var i = 0;

			function timedCount() {
				i = i + 1;
				postMessage(i);
				setTimeout("timedCount()",1000);
			}

			timedCount();`
		], { type: "text/javascript" });

		this.worker = new Worker(window.URL.createObjectURL(blob));
		this.worker.onmessage = (event) => {
			this.timer = event.data;
			if (this.timer === 120) {
				this.router.navigate(['/lockscreen']);
				this.stopTimer();
			}
		}
	}

	stopTimer() {
		this.worker.terminate();
		this.worker = undefined;
	}

	logout(){
		this.authService.logout();
		this.router.navigate(['/login']);
	}
}