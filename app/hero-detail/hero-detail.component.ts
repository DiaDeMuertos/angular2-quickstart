import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'app-hero-detail',
    styleUrls: ['hero-detail.component.css'],
    templateUrl: 'hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(private heroService: HeroService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        window.history.back();
    }
}
