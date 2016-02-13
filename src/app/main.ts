//vendors
import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';

//components
import {AppComponent} from './components/app.component'

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
]);
