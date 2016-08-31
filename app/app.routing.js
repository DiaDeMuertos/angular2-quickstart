"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var heroes_component_1 = require('./heroes/heroes.component');
var hero_detail_component_1 = require('./hero-detail/hero-detail.component');
var appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
    },
    {
        component: dashboard_component_1.DashboardComponent,
        path: 'dashboard',
    },
    {
        component: hero_detail_component_1.HeroDetailComponent,
        path: 'detail/:id',
    },
    {
        component: heroes_component_1.HeroesComponent,
        path: 'heroes',
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map