//variables
declare var System: any

//vendors
import {Component, Injector} from 'angular2/core';
import {RouteConfig, Route, AsyncRoute, ROUTER_DIRECTIVES} from 'angular2/router';

//components
import {HeroComponent} from './hero/hero.component'
import {HeroesComponent} from './heroes/heroes.component'

//objects
import {Hero} from '../objects/hero';

//services
import {HeroService} from '../services/hero.service'

//helpers
import {appInjector} from '../helpers/app-injector'

@Component({
  selector: 'my-app',
  templateUrl: '/app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService
  ],
})
@RouteConfig([
  new AsyncRoute({
    path: '/heroes',
    name: 'Heroes',
    loader: () => System.import('app/components/heroes/heroes.component')
      .then((result: any)=> result.HeroesComponent),
  }),
  new AsyncRoute({
    path: '/hero/:heroId/...',
    name: 'Hero',
    loader: () => System.import('app/components/hero/hero.component')
      .then((result: any)=> result.HeroComponent),
  })
])
export class AppComponent {
  constructor(
    private _injector: Injector
  ) {
    appInjector(this._injector)
  }
}
