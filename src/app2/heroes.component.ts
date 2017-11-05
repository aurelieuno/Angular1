import { Hero } from './hero'
import { Component, OnInit } from '@angular/core'
import { HeroService } from './hero.service'


@Component({
	//selector: 'app-root',//not correct
	templateUrl: './heroes.html',
	providers: [HeroService]
})

export class HeroesComponent implements OnInit {

	selectedHero: Hero;
	heroes : Hero[];

	constructor(private heroService: HeroService) { }

	getHeroes(): void {
		this.heroService.getHeroes().then(result => this.heroes = result);//instance member 'this.heroService'
	}

	ngOnInit(): void {
		this.getHeroes()
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}

/*The next thing we need to code is the binding code. Binding code in Angular 2 is represented by something termed as “COMPONENTS”.
Angular 2 components has the logic which helps to bind the UI with the model.

How should the AppComponent acquire a runtime concrete HeroService instance?

Per the dependency injection pattern, the component must ask for the service in its constructor


*/