System.register(['angular2/platform/browser', './components/hero-list/hero-list.component'], function(exports_1) {
    var browser_1, hero_list_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(hero_list_component_1.HeroListComponent);
        }
    }
});
//# sourceMappingURL=main.js.map