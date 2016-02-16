//vendors
import {Component, OnInit, Inject, Injector} from 'angular2/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';

//servcies
import {HeroService} from '../../services/hero.service'

//objects
import {Hero} from '../../objects/hero'

@Component({
  templateUrl: '/app/components/heroes/heroes.component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class HeroesComponent implements OnInit {
  constructor(
    private _heroService: HeroService
  ) {}

  title = 'Tour of herose';
  heroes: Hero[];

  getHeroes() {
    this._heroService.getHeroes().then(heroes =>
      this.heroes = heroes
    );
  }

  ngOnInit() {
    this.getHeroes();
  }
}
