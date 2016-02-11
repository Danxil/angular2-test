//vendors
import {Injectable} from 'angular2/core'

import _ = require('lodash')
console.log(_)
//objects
import {Hero} from '../objects/hero'

//mocks
import {HEROES} from '../mocks/mock-heroes'

@Injectable()
export class HeroService {
  private _list: Hero[] = []

  private _updateListWithItem(item: Hero) {
    var existItemList = this._list.find((listItem)=> item.id == listItem.id);

    if (existItemList)
      _.assign(existItemList, item);
    else
      this._list.push(item);
  }

  loadHeroes() {
    return new Promise<Hero[]>((resolve)=>
      setTimeout(()=>{
        this._list = HEROES

        resolve(HEROES)
      }, 500)
    );
  }
  loadHeroById(id: number) {
    return new Promise<Hero>((resolve)=>
      setTimeout(()=> {
        var hero = HEROES.find((hero)=> hero.id == id);

        resolve(hero);
      }, 500)
    );
  }
}