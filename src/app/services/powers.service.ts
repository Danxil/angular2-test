//vendors
import {Injectable} from 'angular2/core'

import {
    Http,
    Response
} from 'angular2/http';

import {Observable} from 'rxjs/Observable';

//objects
import {Power} from '../objects/power'
import {toPromise} from "rxjs/operator/toPromise";

@Injectable()
export class PowersService {
    constructor(
        private _http:Http
    ) {}

    private _powersUrl = 'app/mocks/mock-powers.json';

    private _list:Power[] = [];

    private _updateListWithItem(item:Power):Power {
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

    getPowers(powerId?:number): Promise<Power[]> {
        return this._http.get(this._powersUrl)
            .toPromise()
            .then((response):Power[]=> {
                this._list = response.json().data

                return this._list
            })
            .catch(this._errorHandler)
    }

    getPowerById(id:number): Promise<Power> {
        return this._http.get(this._powersUrl)
            .toPromise()
            .then((response):Power=> {
                var powers:Power[] = response.json().data

                var power:Power = powers.find((power)=> power.id == id);

                return this._updateListWithItem(power)
            })
            .catch(this._errorHandler)
    }

    getPowersFromCache(condition?):Power[] {
        return _.filter(this._list, condition)
    }

    getPowerByIdFromCache(id:number):Power {
        return this._list.find((power:Power)=> power.id == id)
    }
}