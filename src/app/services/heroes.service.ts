//vendors
import {Injectable} from 'angular2/core'

import {
  Http,
  Response
} from 'angular2/http';

import {Observable} from 'rxjs/Observable';

//objects
import {Hero} from '../objects/hero'
import {toPromise} from "rxjs/operator/toPromise";

@Injectable()
export class HeroesService {
  constructor(
    private http:Http
  ) {}

  private _heroesUrl = 'app/mocks/mock-heroes.json';

  private _list:Hero[] = [];

  private _updateListWithItem(item:Hero):Hero {
    var existItemList = this._list.find((listItem)=> item.id == listItem.id);

    if (existItemList)
      _.assign(existItemList, item);
    else
      this._list.push(item);

    return item
  }

  private _errorHandler(error) {
    console.log(error);

    return Promise.reject(error.json().error || 'Server error').then((data)=>data)
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this._heroesUrl)
      .toPromise()
      .then((response):Hero[]=> {
        this._list = response.json().data

        return this._list
      })
      .catch(this._errorHandler)
  }

  getHeroById(id:number): Promise<Hero> {
    return this.http.get(this._heroesUrl)
      .toPromise()
      .then((response):Hero=> {
        var heroes:Hero[] = response.json().data

        var hero:Hero = heroes.find((hero)=> hero.id == id);

        return this._updateListWithItem(hero)
      })
      .catch(this._errorHandler)
  }

  getHeroByIdFromCache(id:number):Hero {
    return this._list.find((hero:Hero)=> hero.id == id)
  };
}