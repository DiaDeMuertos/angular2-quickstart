import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
    moduleId: module.id,
    selector: 'app-hero-detail',
    styleUrls: ['./hero-detail.component.css'],
    templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor() {}

    ngOnInit() {}
}
