//variables
declare var System: any

//vendors
import {Component, Injector} from 'angular2/core';
import {
  RouteConfig,
  Route,
  Router,
  AsyncRoute,
  ROUTER_DIRECTIVES
} from 'angular2/router';

//components
import {HeroComponent} from './hero/hero.component'
import {HeroesComponent} from './heroes/heroes.component'
import {AboutComponent} from './about/about.component'

//objects
import {Hero} from '../objects/hero';

//services
import {HeroesService} from '../services/heroes.service'

//helpers
import {appInjector} from '../helpers/app-injector'

@Component({
  selector: 'my-app',
  templateUrl: '/app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroesService
  ],
})
@RouteConfig([
  new AsyncRoute({
    path: '/heroes',
    name: 'Heroes',
    useAsDefault: true,
    loader: () => System.import('app/components/heroes/heroes.component')
      .then((result: any)=> result.HeroesComponent),
  }),
  new AsyncRoute({
    path: '/heroes/:heroId/...',
    name: 'Hero',
    loader: () => System.import('app/components/hero/hero.component')
      .then((result: any)=> result.HeroComponent),
  }),
  new AsyncRoute({
    path: '/about',
    name: 'About',
    loader: () => System.import('app/components/about/about.component')
      .then((result: any)=> result.AboutComponent),
  }),
])
export class AppComponent {
  constructor(
    private _injector: Injector,
    public router: Router
  ) {
    appInjector(this._injector)
  }
}
