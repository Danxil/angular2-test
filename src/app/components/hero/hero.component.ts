//variables
declare var System:any

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
  AsyncRoute,
  Router,
  CanActivate,
  OnActivate,
  ROUTER_DIRECTIVES
} from 'angular2/router';

//helpers
import {appInjector} from '../../helpers/app-injector'

//components
import {HeroDetailComponent} from './hero-detail/hero-detail.component'
import {HeroPowersComponent} from './hero-powers/hero-powers.component'

//objects
import {Hero} from '../../objects/hero';

//services
import {HeroesService} from '../../services/heroes.service';

@Component({
  templateUrl: '/app/components/hero/hero.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  new AsyncRoute({
    path: '/hero-detail',
    name: 'HeroDetail',
    loader: () => System.import('app/components/hero/hero-detail/hero-detail.component')
        .then((result:any)=> result.HeroDetailComponent),
    useAsDefault: true
  }),
  new AsyncRoute({
    path: '/hero-powers',
    name: 'HeroPowers',
    loader: () => System.import('app/components/hero/hero-powers/hero-powers.component')
        .then((result:any)=> result.HeroPowersComponent),
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
    private _routeParams: RouteParams,
    public router: Router
  ) {
  }

  hero:Hero

  routerOnActivate(next: ComponentInstruction) {
    this.hero = this._heroesService.getHeroByIdFromCache(parseInt(this._routeParams.get('heroId')))
  }
}
