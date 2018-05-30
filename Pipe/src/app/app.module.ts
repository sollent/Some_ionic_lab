import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import {SuperPipe} from '../pipes/super/super';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MyCasePipe} from "../pipes/my-case/my-case";
import {MyBoostPipe} from "../pipes/my-boost/my-boost";
import {CalculatePage} from "../pages/calculate/calculate";
import { MadaPipe } from "../pipes/mada/mada";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    CalculatePage,
    TabsPage,
    SuperPipe,
    MyCasePipe,
    MyBoostPipe,
    MadaPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    CalculatePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
