import {Injectable} from 'angular2/core'

import {Hero} from '../objects/hero'

import {HEROES} from '../mocks/mock-heroes'

@Injectable()
export class HeroService {
  getHeroes() {
    return new Promise<Hero[]>((resolve)=>
      setTimeout(()=>resolve(HEROES), 500)
    );
  }
}