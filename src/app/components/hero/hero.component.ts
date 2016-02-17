//vendors
import {
  Component,
  OnInit,
  Injector
} from 'angular2/core';

import {
  ComponentInstruction,
  RouteParams,
  RouteConfig,
  Route,
  CanActivate,
  OnActivate,
  ROUTER_DIRECTIVES
} from 'angular2/router';

//helpers
import {appInjector} from '../../helpers/app-injector'

//components
import {HeroDetailComponent} from './hero-detail/hero-detail.component'

//objects
import {Hero} from '../../objects/hero';

//services
import {HeroesService} from '../../services/heroes.service';

@Component({
  templateUrl: '/app/components/hero/hero.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  new Route({
    path: '/hero-detail',
    name: 'HeroDetail',
    component: HeroDetailComponent,
    useAsDefault: true
  })
])
@CanActivate((next)=> {
  var heroService = appInjector().get(HeroesService)

  var promises = [
    heroService.getHeroById(next.params['heroId'])
  ]

  return Promise.all(promises).then()
})
export class HeroComponent implements OnActivate {
  constructor(
    private _heroesService: HeroesService,
    private _routeParams: RouteParams
  ) {}

  hero:Hero

  routerOnActivate(next: ComponentInstruction) {
    this.hero = this._heroesService.getHeroByIdFromCache(parseInt(this._routeParams.get('heroId')))
  }
}
