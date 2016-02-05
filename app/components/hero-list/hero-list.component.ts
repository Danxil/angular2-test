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
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 10em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0em;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #EEE;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0em 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0px 0px 4px;
  }
`]
}

@Component(component)
export class HeroListComponent implements OnInit {
  constructor(private _heroService: HeroService) {}

  public title = 'Tour of herose';
  public heroes: Hero[];
  public selectedHero:Hero;

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
