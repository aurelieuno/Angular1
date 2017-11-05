import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './HEROES';


@Injectable()
export class HeroService {
	getHeroes() : Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	getHeroesSlowly() : Promise<Hero[]> {
		return new Promise (resolve =>
			setTimeout(() => resolve(Promise.resolve(HEROES)), 2500))
	}

	getHero(id : number) : Promise<Hero> {
		return Promise.resolve(HEROES).then(result => result.find(el => el.id === id))

	}	getHero1(id : number) {
		return HEROES.find(el => el.id === id)

	}

}

/*@Injectable()
class MyService() {}
Declares that a class has dependencies that should be injected into the constructor when the dependency injector is creating an instance of this class.*/