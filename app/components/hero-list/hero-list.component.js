System.register(['angular2/core', '../hero-detail/hero-detail.component', '../../services/hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_detail_component_1, hero_service_1;
    var component, HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            component = {
                selector: 'my-app',
                templateUrl: '/app/components/hero-list/hero-list.component.html',
                directives: [hero_detail_component_1.HeroDetailComponent],
                providers: [hero_service_1.HeroService],
            };
            HeroListComponent = (function () {
                function HeroListComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = 'Tour of herose';
                }
                HeroListComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                HeroListComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (result) {
                        return _this.heroes = result;
                    });
                };
                HeroListComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroListComponent = __decorate([
                    core_1.Component(component), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], HeroListComponent);
                return HeroListComponent;
            })();
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});
//# sourceMappingURL=hero-list.component.js.map