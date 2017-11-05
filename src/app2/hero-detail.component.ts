import { Component, Input } from '@angular/core'
import { Hero } from './hero'
import { Router } from '@angular/router';

@Component({
	selector: 'hero-detail',
	template: `
	<section *ngIf="hero">
	<p>{{hero.name | uppercase}} is my hero</p>
	<p>id: {{hero.id}}</p>
	<button [routerLink]="['/detail',hero.id]" routerLinkActive="active">View Details 1</button>
	<button (click)="gotoDetail()">View Details 2</button>
	</section>
	`
})

export class HeroDetailComponent {
	@Input() hero: Hero;

	constructor(
	  private router: Router) { }

	gotoDetail(): void {
	  this.router.navigate(['/detail', this.hero.id]);
	}
}

/*You must declare a target binding property to be an input property.
Otherwise, Angular rejects the binding and throws an error.
@Input() myProperty;
Declares an input property that you can update via property binding (example: <my-cmp [myProperty]="someExpression">)
Either way, the @Input decorator tells Angular that this property is public and available for binding by a parent component.
Without @Input, Angular refuses to bind to the property.

You've bound template HTML to component properties before and never used @Input. What's different?

The difference is a matter of trust. Angular treats a component's template as belonging to the component.
The component and its template trust each other implicitly. Therefore, the component's own template may bind
to any property of that component, with or without the @Input decorator.

But a component or directive shouldn't blindly trust other components and directives.
The properties of a component or directive are hidden from binding by default.
They are private from an Angular binding perspective. When adorned with the @Input decorator,
the property becomes public from an Angular binding perspective.
Only then can it be bound by some other component or directive.

All it does is receive a hero object through its hero input property and then bind to that property with its template.
*/