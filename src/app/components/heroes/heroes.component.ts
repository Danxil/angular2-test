//vendors
import {Component, OnInit, Inject, Injector} from 'angular2/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';

//servcies
import {HeroesService} from '../../services/heroes.service'

//objects
import {Hero} from '../../objects/hero'

@Component({
  templateUrl: '/app/components/heroes/heroes.component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class HeroesComponent implements OnInit {
  constructor(
    private _heroesService: HeroesService
  ) {}

  heroes: Hero[];

  getHeroes() {
    this._heroesService.getHeroes().then(heroes =>
      this.heroes = heroes
    );
  }

  ngOnInit() {
    this.getHeroes();
  }
}
