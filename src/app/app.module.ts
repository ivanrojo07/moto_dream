import { HandbookPage } from './../pages/handbook/handbook';
import { MDtvPage } from './../pages/m-dtv/m-dtv';
import { EmergenciaPage } from './../pages/emergencia/emergencia';
import { MyproductosPage } from './../pages/myproductos/myproductos';
import { Camera } from '@ionic-native/camera';
import { Network } from '@ionic-native/network';
import { CallNumber } from '@ionic-native/call-number';


import { ProductoFotosFormPage } from './../pages/producto-fotos-form/producto-fotos-form';
import { ProductoFotosPage } from './../pages/producto-fotos/producto-fotos';
import { ProductosPage } from './../pages/productos/productos';
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
import { ProductoProvider } from '../providers/producto/producto';
import { HttpClientModule } from '@angular/common/http';
import { ProductosFormPage } from '../pages/productos-form/productos-form';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { MyproductoProvider } from '../providers/myproducto/myproducto';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { HandbookProvider } from '../providers/handbook/handbook';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Geolocation } from '@ionic-native/geolocation';
import { RutasPage } from '../pages/rutas/rutas';


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
    ProductosPage,
    MyproductosPage,
    ProductosFormPage,
    ProductoFotosPage,
    ProductoFotosFormPage,
    EmergenciaPage,
    MDtvPage,
    HandbookPage,
    RutasPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicImageViewerModule,
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
    ProductosPage,
    MyproductosPage,
    ProductosFormPage,
    ProductoFotosPage,
    ProductoFotosFormPage,
    EmergenciaPage,
    MDtvPage,
    HandbookPage,
    RutasPage,
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    TarjetaProvider,
    DomicilioEnvioProvider,
    DomicilioFiscalProvider,
    MotoProvider,
    ProductoProvider,
    Network,
    CallNumber,
    MyproductoProvider,
    YoutubeVideoPlayer,
    HandbookProvider,
    FileTransfer,
    File,
    Geolocation,
  ]
})
export class AppModule {}
