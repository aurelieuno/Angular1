import { Hero } from './hero'
import { Component } from '@angular/core'



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})

export class AppComponent {
	title: string = "Tour of Heroes";

}

/*The next thing we need to code is the binding code. Binding code in Angular 2 is represented by something termed as “COMPONENTS”.
Angular 2 components has the logic which helps to bind the UI with the model.

*/