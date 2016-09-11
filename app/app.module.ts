import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './models/in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './services/hero.service';
import { HeroSearchService } from './services/hero-search.service';
import { routing } from './app.routing';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, HeroSearchComponent ],
  providers: [ HeroService, HeroSearchService ],
  bootstrap: [ AppComponent ],
})

export class AppModule { }
