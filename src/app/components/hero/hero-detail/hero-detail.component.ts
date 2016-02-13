//vendors
import {Component, OnInit, Injector} from 'angular2/core';
import {
  RouteParams,
  ComponentInstruction
} from 'angular2/router';

//objects
import {Hero} from '../../../objects/hero';

//services
import {HeroService} from '../../../services/hero.service';

@Component({
  templateUrl: '/app/components/hero/hero-detail/hero-detail.component.html',
  inputs: [
    'hero'
  ],
})
export class HeroDetailComponent {
  constructor(
    private _heroService: HeroService,
    private _injector: Injector
  ) {}

  hero:Hero

  routerOnActivate(next: ComponentInstruction) {
    console.log(this._injector)
    var heroRouteParams = this._injector.parent.parent.get(RouteParams)
    this.hero = this._heroService.getHeroByIdFromCache(parseInt(heroRouteParams.get('heroId')))
  }
}