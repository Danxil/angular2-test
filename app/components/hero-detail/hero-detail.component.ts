import {Component} from 'angular2/core';
import {Hero} from '../../objects/hero'

@Component({
  selector: 'my-hero-detail',
  templateUrl: '/app/components/hero-detail/hero-detail.component.html',
  inputs: [
    'hero'
  ]
})
export class HeroDetailComponent {
  public hero: Hero
}