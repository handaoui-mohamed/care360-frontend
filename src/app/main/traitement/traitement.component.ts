import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../authentication/auth.service";
import { TraitementService } from "./traitement.service";
import { ActivatedRoute } from '@angular/router';
import { UserService,SampleService } from "../services";
import { Config } from "../../shared/config";
declare var $: any;
@Component({
	moduleId: module.id,
	selector: "traitement",
	templateUrl: "./traitement.component.html",
	styleUrls: ['./traitement.component.scss'],
	providers: [TraitementService,UserService,SampleService]
})
export class Traitement implements OnInit {
	user = {};
	patient = {};
	patientId: String;
	newTodo: any = {};
	todos: any[] = [];
	samples:any[] = [];
	toastr:any;

	constructor(private authService: AuthService, private traitementService: TraitementService, private route: ActivatedRoute,
				private userService:UserService, private sampleService:SampleService) {
		this.toastr = Config.toastr;
		this.route.params.subscribe(params => {
			this.patientId = params['patientId'];
			this.userService.getUserById(this.patientId).subscribe((data)=>{
				this.patient = data.element;
			},(error)=>{});
			this.sampleService.getSamples(this.patientId).subscribe((data)=>{
				this.samples = data.elements;
				console.log(this.samples);
			},(error)=>{});
			this.traitementService.getTraitement(this.patientId).subscribe((data) => {
				this.todos = data.elements;
				console.log(this.todos)
			}, (error) => { });
		});
		this.user = this.authService.getCurrentUser();
	}
	ngOnInit() {
		$('.input-activate').on("click", function () {
			if (!$(this).hasClass("add-to-list-active")) {
				$(this).removeClass("add-to-list-deactive");
				$(this).addClass("add-to-list-active");
				$(".to-do-input-wrapper").slideToggle(400);
			} else {
				$(this).removeClass("add-to-list-active");
				$(this).addClass("add-to-list-deactive");
				$(".to-do-input-wrapper").slideToggle(400);
			}
		})
	}

	addTodo() {
		this.traitementService.addTraitement(this.patientId, this.newTodo).subscribe((data) => {
			this.toastr.success('Traitement a été ajouter!', 'Succès!');
			this.todos.push(data.element);
		}, (error) => {
			this.toastr.warning("Traitement n'est pas ajouté!", 'Erreur!');
		});
	}

	removeTodo(traitementId, index) {
		this.traitementService.deleteTraitement(traitementId).subscribe((data) => {
			this.toastr.success('Traitement a été supprimer!', 'Succès!');
			this.todos.splice(index, 1);
		}, (error) => { 
			this.toastr.warning("Traitement n'est pas supprimer!", 'Erreur!');
		});
	}

	checkTodo(traitement, index) {
		traitement.done = !traitement.done;
		this.traitementService.checkTraitement(traitement).subscribe((data) => {
			this.toastr.success('Traitement a été modifier!', 'Succès!');
			this.todos[index] = data.element;
		}, (error) => { 
			this.toastr.warning("Traitement n'est pas modifié!", 'Erreur!');
			traitement.done = !traitement.done; 
		});
	}
}