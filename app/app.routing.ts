import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const appRoutes: Routes = [
 {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    component: DashboardComponent,
    path: 'dashboard',
  },
  {
    component: HeroDetailComponent,
    path: 'detail/:id',
  },
  {
    component: HeroesComponent,
    path: 'heroes',
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
