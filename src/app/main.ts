//vendors
import 'rxjs/Rx';
import {bootstrap} from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

//components
import {AppComponent} from './components/app.component'

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS
]);
