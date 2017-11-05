import { Component, OnInit } from '@angular/core'
import { Hero } from './hero'
import { HeroService } from './hero.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
	providers: [HeroService],
	template: `
	<h2>{{hero.name}} details!</h2>
	<div>
	<label>id: </label>{{hero.id}}
	</div>
	<label>name: </label> <input [(ngModel)]="hero.name">
	`
})

export class HeroDetailLinkComponent implements OnInit{

	id: number;
	hero: Hero;


	constructor(
		private route: ActivatedRoute,
		private heroService: HeroService)
		{}

	ngOnInit(): void {

		this.id = this.route.snapshot.params.id;

/*		this.hero = this.heroService.getHero1(this.route.snapshot.params.id);*/
		  this.route.paramMap
		    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
		    .subscribe(hero => this.hero = hero);
	}

}

/*ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.contactsService
          .getContact(id)
          .subscribe(contact => this.contact = contact);
      });
  }
}
Oh, look what we have here! Notice that we’re nesting two subscribe() calls?
This is usually an indicator that we can refactor our code using flatMap(),
or even better switchMap(), as we’re calling an asynchronous API and want to deal with out-of-order responses.
Let’s refactor our code:
ngOnInit() {
  this.route.params
    .map(params => params['id'])
    .switchMap(id => this.contactsService.getContact(id))
    .subscribe(contact => this.contact = contact);
}*/