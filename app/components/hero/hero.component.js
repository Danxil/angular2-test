System.register(['angular2/core', 'angular2/router', '../../helpers/app-injector', './hero-detail/hero-detail.component', '../../services/hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_injector_1, hero_detail_component_1, hero_service_1;
    var HeroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_injector_1_1) {
                app_injector_1 = app_injector_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroComponent = (function () {
                function HeroComponent(_routeData) {
                    this._routeData = _routeData;
                }
                HeroComponent.prototype.routerOnActivate = function (next) {
                    this.hero = this._routeData.get('hero');
                };
                HeroComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/components/hero/hero.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({
                            path: '/hero-detail',
                            name: 'HeroDetail',
                            component: hero_detail_component_1.HeroDetailComponent,
                            useAsDefault: true,
                        })
                    ]),
                    router_1.CanActivate(function (next) {
                        var heroService = app_injector_1.appInjector().get(hero_service_1.HeroService);
                        var promises = [
                            heroService.getHeroById(next.params.id)
                                .then(function (result) {
                                return next.routeData.data.hero = result;
                            })
                        ];
                        return Promise.all(promises).then();
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteData])
                ], HeroComponent);
                return HeroComponent;
            })();
            exports_1("HeroComponent", HeroComponent);
        }
    }
});
//# sourceMappingURL=hero.component.js.map