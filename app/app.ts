import {App, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {provide} from 'angular2/core';
import {Http} from 'angular2/http'
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {AuthService} from './core/services/auth';

import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login-page/login-page';


@App({
  template: `<ion-nav id="nav" [root]="rootPage"></ion-nav>`,
  providers: [
      provide(AuthHttp, {
        useFactory: (http) => {
            return new AuthHttp(new AuthConfig(), http);
        },
        deps: [Http]
    }),
    AuthService
  ]
})
export class MyApp {
  rootPage: any = LoginPage;
  menu: any;

  constructor(platform: Platform, menu: MenuController) {
    this.menu = menu;
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}