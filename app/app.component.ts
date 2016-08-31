import { Component } from '@angular/core';
import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';

@Component({
  providers: [HeroService],
  selector: 'app-root',
  styleUrls: ['./app/app.component.css'],
  templateUrl: './app/app.component.html',
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
   }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
