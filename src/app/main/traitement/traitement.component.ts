import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../authentication/auth.service";
import { TraitementService } from "./traitement.service";
import { ActivatedRoute } from '@angular/router';
import { UserService,SampleService } from "../services";
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

	constructor(private authService: AuthService, private traitementService: TraitementService, private route: ActivatedRoute,
				private userService:UserService, private sampleService:SampleService) {
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
			this.todos.push(data.element);
		}, (error) => { });
	}

	removeTodo(traitementId, index) {
		this.traitementService.deleteTraitement(traitementId).subscribe((data) => {
			this.todos.splice(index, 1);
		}, (error) => { });
	}

	checkTodo(traitement, index) {
		traitement.done = !traitement.done;
		this.traitementService.checkTraitement(traitement).subscribe((data) => {
			this.todos[index] = data.element;
		}, (error) => { traitement.done = !traitement.done; });
	}
}