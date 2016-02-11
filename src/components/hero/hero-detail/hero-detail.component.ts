//vendors
import {Component, OnInit} from 'angular2/core';
import {RouteParams, RouteData} from 'angular2/router';

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
    private _routeData: RouteData
  ) {}

  hero:Hero
}