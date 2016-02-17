//vendors
import {
  Component,
  OnInit,
  Injector
} from 'angular2/core';

import {
  RouteParams,
  ComponentInstruction
} from 'angular2/router';

//components
import {HeroComponent} from '../hero.component'

//objects
import {Hero} from '../../../objects/hero';

//services
import {HeroesService} from '../../../services/heroes.service';

@Component({
  templateUrl: '/app/components/hero/hero-detail/hero-detail.component.html',
  inputs: [
    'hero'
  ],
})
export class HeroDetailComponent {
  constructor(
    private _heroesService: HeroesService,
    private _injector: Injector
  ) {}

  hero:Hero;

  routerOnActivate(next: ComponentInstruction) {
    var heroComponent = this._injector.get(HeroComponent);

    this.hero = heroComponent.hero
  }
}