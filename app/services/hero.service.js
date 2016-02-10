System.register(['angular2/core', '../mocks/mock-heroes'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_heroes_1;
    var _, HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            }],
        execute: function() {
            _ = require('lodash');
            HeroService = (function () {
                function HeroService() {
                    this._list = [];
                }
                HeroService.prototype._updateListWithItem = function (item) {
                    var existItemList = this._list.find(function (listItem) { return item.id == listItem.id; });
                    if (existItemList)
                        _.assign(existItemList, item);
                    else
                        this._list.push(item);
                };
                HeroService.prototype.loadHeroes = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () {
                            resolve(mock_heroes_1.HEROES);
                        }, 500);
                    });
                };
                HeroService.prototype.loadHeroById = function (id) {
                    return new Promise(function (resolve) {
                        return setTimeout(function () {
                            var hero = mock_heroes_1.HEROES.find(function (hero) { return hero.id == id; });
                            resolve(hero);
                        }, 500);
                    });
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HeroService);
                return HeroService;
            })();
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map