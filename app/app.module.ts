import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent, HeroDetailComponent ],
  imports:      [ BrowserModule, FormsModule ],
})
export class AppModule { }
