import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Calendar } from '@ionic-native/calendar';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AddEventPage } from '../pages/add-event/add-event';

import { JdPage } from '../pages/jd/jd';
import { JdDataProvider } from '../providers/jd-data/jd-data';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    AddEventPage,
    
    JdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    AddEventPage,
    
    JdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Calendar,
    JdDataProvider,
    HttpClientModule
  ]
})
export class AppModule {}
