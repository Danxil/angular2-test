import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

import {Hero} from '../../objects/hero'

import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

import {HeroService} from '../../services/hero.service'

var component = {
  selector: 'my-app',
  templateUrl: '/app/components/hero-list/hero-list.component.html',
  directives: [HeroDetailComponent],
  providers: [HeroService],
}

@Component(component)
export class HeroListComponent implements OnInit {
  constructor(private _heroService: HeroService) {}

  title = 'Tour of herose';
  heroes: Hero[];
  selectedHero:Hero;

  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }
  getHeroes() {
    this._heroService.getHeroes().then(result =>
      this.heroes = result
    );
  }

  ngOnInit() {
    this.getHeroes();
  }
}
