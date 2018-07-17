import { HandbookPage } from './../pages/handbook/handbook';
import { MDtvPage } from './../pages/m-dtv/m-dtv';
import { EmergenciaPage } from './../pages/emergencia/emergencia';
import { ProductosPage } from './../pages/productos/productos';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, Events, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { Storage } from '@ionic/storage';


import { UsuarioProvider } from '../providers/providers';
import { SettingPage } from '../pages/setting/setting';
import { AboutPage } from '../pages/about/about';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { MotosPage } from '../pages/motos/motos';
import { Network } from '../../node_modules/@ionic-native/network';
import { MyproductosPage } from '../pages/myproductos/myproductos';



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
    // { title: 'List', component: ListPage },
    { title: 'MDtv', component: MDtvPage},
    { title: 'Handbook', component: HandbookPage},
    { title: "Ajustes", component: SettingPage},
    { title: "Acerca de nosotros", component: AboutPage},
    { title: "Aviso Legal y de privacidad", component: DisclaimerPage},
    { title: "Mis motos", component: MotosPage },
    { title: 'Mis productos', component: MyproductosPage},
    { title: 'Productos', component: ProductosPage },
    { title: 'Emergencias',component:EmergenciaPage},
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Home', component: HomePage },
    // { title: 'List', component: ListPage },
    { title: 'Registrate', component:RegisterPage},
    { title: 'Inicia sesión', component:LoginPage},
    { title: 'Acerca de nosotros', component: AboutPage},
    { title: "Aviso Legal y de privacidad", component: DisclaimerPage }
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
    private network: Network,
    private toastCtrl: ToastController,
   
  ) {
    this.initializeApp();
    this.listenToLoginEvents();
    // watch network for a disconnect
    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :(');
      let toast = this.toastCtrl.create({
        message: 'Te desconectaste de tu red de datos. Tus cambios no se podrán guardar, por favor conectate pronto',
        // duration: 3000,
        showCloseButton: true,
        closeButtonText: 'Ok',
        position: 'middle'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    });
    console.log(this.network);
    // watch network for a connection
    this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });

    

    
    
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

  logout(){
    this._usuarioService.logout();
    this.rootPage = HomePage;
    this.nav.setRoot(HomePage);
  }
}
