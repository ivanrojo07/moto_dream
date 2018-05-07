import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { Storage } from '@ionic/storage';


import { UsuarioProvider } from '../providers/providers';



// Interfaz del menú
export interface PageInterface {
  title: string;
  // name: string;
  component: any;
  // icon: string;
  // logsOut?: boolean;
  // index?: number;
  // tabName?: string;
  // tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  
  loggedInPages: PageInterface[] = [
    { title: 'Home', component: UserPage },
    { title: 'List', component: ListPage },
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Home', component: HomePage },
    { title: 'List', component: ListPage },
    { title: 'Registrate', component:RegisterPage},
    { title: 'Inicia sesión', component:LoginPage},
  ];

  rootPage: any;
  access_token: string ="";

  pages: Array<{title: string, component: any}>;
  authenticated: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    private storage: Storage, 
    private _usuarioService: UsuarioProvider,
    public menu: MenuController,
    public events: Events,
  ) {
    this.initializeApp();
    this.listenToLoginEvents();

    
    
    this.storage.get("access_token").then((val)=>{
      // console.log("TOKEN: "+val);
      this.access_token = val;
      if(this.access_token == null || this.access_token == "" ){
        this.rootPage = HomePage;
        this.enableMenu(false);
      }
      else{
        this.rootPage = UserPage;
        
        this._usuarioService.estaLogeado().then((hasLoggedIn) => {
          this.enableMenu(hasLoggedIn == true);
          console.log("logeado");
          
        });
        
      }
    });
    
    

    
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      console.log("eventlogin");
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn: boolean) {
    console.log("LoggedIn"+loggedIn);
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }
  
  

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
    this.nav.setRoot(page.component);
    
  }
}
