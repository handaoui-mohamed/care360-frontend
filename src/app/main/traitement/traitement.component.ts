import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../authentication/auth.service";
import { TraitementService } from "./traitement.service";
import { ActivatedRoute } from '@angular/router';
import { UserService } from "../services/user.service";
declare var $: any;
@Component({
	moduleId: module.id,
	selector: "traitement",
	templateUrl: "./traitement.component.html",
	styleUrls: ['./traitement.component.scss'],
	providers: [TraitementService,UserService]
})
export class Traitement implements OnInit {
	user = {};
	patient = {};
	patientId: String;
	newTodo: String;
	todos: any[] = [
		{ id: 0, 'name': "test" }
	];

	constructor(private authService: AuthService, private traitementService: TraitementService, private route: ActivatedRoute,
				private userService:UserService) {
		this.route.params.subscribe(params => {
			this.patientId = params['patientId'];
			this.userService.getUserById(this.patientId).subscribe((data)=>{
				this.patient = data.element;
			},(error)=>{});
			this.traitementService.getTraitement(this.patientId).subscribe((data) => {
				this.todos = data.element;
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
			console.log(this.todos);
		}, (error) => { });
	}

	removeTodo(traitementId, index) {
		this.traitementService.deleteTraitement(traitementId).subscribe((data) => {
			this.todos.splice(index, 1);
			console.log(this.todos);
		}, (error) => { });
	}
}