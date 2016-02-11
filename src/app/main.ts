//variables
declare var _: any;

//vendors
import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';

//helpers
import {appInjector} from './helpers/app-injector'

//components
import {AppComponent} from './components/app.component'

//servcies
import {HeroService} from './services/hero.service'

bootstrap(AppComponent, [
  //angular providers
  ROUTER_PROVIDERS,

  //dev providers
  HeroService
]).then((app)=> {
  appInjector(app.injector)
});
