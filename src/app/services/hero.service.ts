//vendors
import {Injectable} from 'angular2/core'

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

  getHeroes() {
    return new Promise<Hero[]>((resolve)=>
      setTimeout(()=>{
        resolve(this._list = HEROES)
      }, 500)
    );
  }
  getHeroById(id: number) {
    return new Promise<Hero>(resolve=>
      setTimeout(()=> {
        var hero = HEROES.find((hero)=> hero.id == id);

        this._updateListWithItem(hero)

        resolve(hero);
      }, 500)
    );
  }

  getHeroByIdFromCache(id: number) {
    return this._list.find((hero)=> hero.id == id)
  };
}