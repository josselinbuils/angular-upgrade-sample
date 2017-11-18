import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';

declare const System: any;

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [
    {
      provide: 'visualizationApi',
      useFactory: ($injector: any) => $injector.get('visualizationApi'),
      deps: ['$injector']
    }
  ]
})
export class AppModule {

  constructor(private upgrade: UpgradeModule) {
  }

  async ngDoBootstrap(app: ApplicationRef) {

    // Allows to import RequireJS dependency
    await System.import('../3rdparty/visualization/visualization.js');

    // Bootstrap AngularJS app
    this.upgrade.bootstrap(document.body, ['visualization'], {strictDi: true});

    // Bootstrap Angular app
    app.bootstrap(AppComponent);
  }
}
