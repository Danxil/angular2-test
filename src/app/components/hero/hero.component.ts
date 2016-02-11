//vendors
import {Component, OnInit, Injector} from 'angular2/core';
import {ComponentInstruction} from 'angular2/router';
import {
  RouteParams,
  RouteConfig,
  RouteData,
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
import {HeroService} from '../../services/hero.service';

@Component({
  templateUrl: '/app/components/hero/hero.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  new Route({
    path: '/hero-detail',
    name: 'HeroDetail',
    component: HeroDetailComponent,
    useAsDefault: true,
  })
])
@CanActivate((next)=> {
  var heroService = appInjector().get(HeroService)

  var promises = [
    heroService.getHeroById(next.params.id)
      .then((result: Hero)=> {
        return next.routeData.data.hero = <Hero>result
      })
  ]

  return Promise.all(promises).then()
})
export class HeroComponent implements OnActivate {
  constructor(
    private _routeData: RouteData
  ) {}

  hero:Hero

  routerOnActivate(next: ComponentInstruction) {
    this.hero = this._routeData.get('hero')
  }
}
