//variables
declare var System: any

//vendors
import {Component} from 'angular2/core';
import {SourceModule} from 'angular2/compiler';
import {RouteConfig, Route, AsyncRoute, ROUTER_DIRECTIVES} from 'angular2/router';

//components
import {HeroComponent} from './hero/hero.component'
import {HeroesComponent} from './heroes/heroes.component'

//objects
import {Hero} from '../objects/hero';

@Component({
  selector: 'my-app',
  templateUrl: '/app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [],
})
@RouteConfig([
  new AsyncRoute({
    path: '/heroes',
    name: 'Heroes',
    loader: () => System.import('app/components/heroes/heroes.component')
      .then((result: any)=> result.HeroesComponent),
  }),
  new AsyncRoute({
    path: '/hero/:id/...',
    name: 'Hero',
    data: {
      hero: <Hero>null
    },
    loader: () => System.import('app/components/hero/hero.component')
      .then((result: any)=> result.HeroComponent),
  })
])
export class AppComponent {

}
