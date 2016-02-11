//vendors
import {Component} from 'angular2/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';

//components
import {HeroesComponent} from './heroes/heroes.component'
import {HeroComponent} from './hero/hero.component'

//objects
import {Hero} from '../objects/hero';

@Component({
  selector: 'my-app',
  templateUrl: '/app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [],
})
@RouteConfig([
  new Route({
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent,
  }),
  new Route({
    path: '/hero/:id/...',
    name: 'Hero',
    component: HeroComponent,
    data: {
      hero: <Hero>null
    }
  })
])
export class AppComponent {

}
