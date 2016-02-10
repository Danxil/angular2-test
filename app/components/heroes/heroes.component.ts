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
  selectedHero:Hero;

  getHeroes() {
    this._heroService.getHeroes().then(result =>
      this.heroes = result
    );
  }

  ngOnInit() {
    this.getHeroes();
  }
}
