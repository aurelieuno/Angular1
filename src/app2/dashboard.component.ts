import { Hero } from './hero'
import { Component, OnInit } from '@angular/core'
import { HeroService } from './hero.service'


@Component({
	//selector: 'app-root',//not correct
	templateUrl: './dashboard.html',
	providers: [HeroService]

})

export class DashboardComponent implements OnInit {

	heroes : Hero[];

	constructor(private heroService: HeroService) { }

	getHeroes(): void {
		this.heroService.getHeroes().then(result => this.heroes = result.slice(0,3));//instance member 'this.heroService'
	}

	ngOnInit(): void {
		this.getHeroes()
	}

}

/*The next thing we need to code is the binding code. Binding code in Angular 2 is represented by something termed as “COMPONENTS”.
Angular 2 components has the logic which helps to bind the UI with the model.

How should the Component acquire a runtime concrete HeroService instance?

Per the dependency injection pattern, the component must ask for the service in its constructor

Directive and component change detection and lifecycle hooks
ngOnInit() { ... }
Called after the constructor, initializing input properties, and the first call to ngOnChanges.

*/