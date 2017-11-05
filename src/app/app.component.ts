import { Component } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'Tour of Heroes';
  hero1: Hero = new Hero(2, "Maria")//check why it doesnt work, instantiate hero with new
  heroes = [
  new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
];
  myHero = this.heroes[0];
  showHeading = true;
  toggleHeading() {
      this.showHeading = !this.showHeading;
    }
}

/*When you bootstrap with the AppComponent class (in main.ts), Angular looks for a <my-app> in the index.html,
finds it, instantiates an instance of AppComponent, and renders it inside the <my-app> tag.*/
