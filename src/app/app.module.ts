import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Number8App } from './app.component';
import { HomePage } from '../pages/home/home';
import { Number8TaskComponent } from '../components/number8-task/number8-task';
import { CountriesProvider } from '../providers/countries/countries';

@NgModule({
  declarations: [
    Number8App,
    HomePage,
    Number8TaskComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Number8App),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Number8App,
    HomePage,
    Number8TaskComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CountriesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class Number8AppModule {}
