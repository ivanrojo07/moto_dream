import { MotoPage } from './../pages/moto/moto';
import { MotoFormPage } from './../pages/moto-form/moto-form';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';


import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { UserPage } from '../pages/user/user';
import { SettingPage } from '../pages/setting/setting';
import { TarjetaPage } from '../pages/tarjeta/tarjeta';
import { ContrasenaPage } from '../pages/contrasena/contrasena';
import { AboutPage } from '../pages/about/about';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { TarjetaProvider } from '../providers/tarjeta/tarjeta';
import { TarjetaFormPage } from '../pages/tarjeta-form/tarjeta-form';
import { DomicilioEnvioProvider } from '../providers/domicilio-envio/domicilio-envio';
import { DomicilioEnvioPage } from '../pages/domicilio-envio/domicilio-envio';
import { DomenvioFormPage } from '../pages/domenvio-form/domenvio-form';
import { DomicilioFiscalProvider } from '../providers/domicilio-fiscal/domicilio-fiscal';
import { DomicilioFiscalPage } from '../pages/domicilio-fiscal/domicilio-fiscal';
import { DomfiscalFormPage } from '../pages/domfiscal-form/domfiscal-form';
import { MotoProvider } from '../providers/moto/moto';
import { MotosPage } from '../pages/motos/motos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    LoginPage,
    UserPage,
    SettingPage,
    ContrasenaPage,
    TarjetaPage,
    TarjetaFormPage,
    AboutPage,
    DisclaimerPage,
    DomicilioEnvioPage,
    DomenvioFormPage,
    DomicilioFiscalPage,
    DomfiscalFormPage,
    MotosPage,
    MotoPage,
    MotoFormPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    LoginPage,
    UserPage,
    SettingPage,
    ContrasenaPage,
    TarjetaPage,
    TarjetaFormPage,
    AboutPage,
    DisclaimerPage,
    DomicilioEnvioPage,
    DomenvioFormPage,
    DomicilioFiscalPage,
    DomfiscalFormPage,
    MotosPage,
    MotoPage,
    MotoFormPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    TarjetaProvider,
    DomicilioEnvioProvider,
    DomicilioFiscalProvider,
    MotoProvider,
  ]
})
export class AppModule {}
