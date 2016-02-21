//vendors
import {
    Component,
    OnInit,
    Injector
} from 'angular2/core';

import {
    RouteParams,
    CanActivate,
    ComponentInstruction
} from 'angular2/router';

//components
import {HeroComponent} from '../hero.component';

//objects
import {Power} from '../../../objects/power';

//services
import {PowersService} from '../../../services/powers.service';

//helpers
import {appInjector} from '../../../helpers/app-injector';

@Component({
    templateUrl: '/app/components/hero/hero-powers/hero-powers.component.html',
})
@CanActivate((next)=> {
    var powersService = appInjector().get(PowersService)
    //var heroComponent = appInjector().get(HeroComponent)

    var promises = [
        powersService.getPowers(next.params['heroId'])
    ]

    return Promise.all(promises).then()
})
export class HeroPowersComponent {
    constructor(private _powersService:PowersService) {
    }

    powers:Power[];

    routerOnActivate(next:ComponentInstruction) {
        this.powers = this._powersService.getPowersFromCache()
    }
}