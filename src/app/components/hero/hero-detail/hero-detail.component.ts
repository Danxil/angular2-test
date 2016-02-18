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

//directives
import {XEditableDirective} from '../../../directives/x-editable.directive'

//objects
import {Hero} from '../../../objects/hero';

@Component({
  templateUrl: '/app/components/hero/hero-detail/hero-detail.component.html',
  directives: [
    XEditableDirective
  ]
})
export class HeroDetailComponent {
  constructor(
    private _injector: Injector
  ) {}

  hero:Hero;

  routerOnActivate(next: ComponentInstruction) {
    var heroComponent = this._injector.get(HeroComponent);

    this.hero = heroComponent.hero
  }
}