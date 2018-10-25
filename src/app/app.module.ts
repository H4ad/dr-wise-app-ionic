import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AuthProvider } from '../providers/auth/auth';
import { WiseAuthInterceptor } from '../providers/wiseauth.interceptor';
import { BaseHttp } from '../providers/basehttp';
import { MainToolbarComponent } from '../components/main-toolbar/main-toolbar';
import { EmptyScheduleCardComponent } from '../components/empty-schedule-card/empty-schedule-card';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    MainToolbarComponent,
    EmptyScheduleCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'overlay'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: WiseAuthInterceptor, multi: true},
    AuthProvider,
    BaseHttp
  ]
})

export class AppModule {}
