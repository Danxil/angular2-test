System.register(['angular2/platform/browser', 'angular2/router', './helpers/app-injector', './components/app.component', './services/hero.service'], function(exports_1) {
    var browser_1, router_1, app_injector_1, app_component_1, hero_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_injector_1_1) {
                app_injector_1 = app_injector_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                //angular providers
                router_1.ROUTER_PROVIDERS,
                //dev providers
                hero_service_1.HeroService
            ]).then(function (app) {
                app_injector_1.appInjector(app.injector);
            });
        }
    }
});
//# sourceMappingURL=main.js.map