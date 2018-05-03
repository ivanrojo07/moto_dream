import { Component, ViewChild, DoCheck } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp implements DoCheck {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  access_token: string ="";

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage) {
  
    
    this.storage.get("access_token").then((val)=>{
      console.log("TOKEN: "+val);
      this.access_token = val;
      if(this.access_token == null || this.access_token == "" ){
        this.rootPage = HomePage;
        this.pages = [
          { title: 'Home', component: HomePage },
          { title: 'List', component: ListPage },
          { title: 'Registrate', component:RegisterPage},
          { title: 'Inicia sesión', component:LoginPage},
        ];
        console.log(this.access_token);
      }
      else{
        console.log(this.access_token);
        this.rootPage = UserPage;
        this.pages = [
          { title: 'Home', component: UserPage },
          { title: 'List', component: ListPage },
          
        ];
      }
    });
    
    this.initializeApp();

    // // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'List', component: ListPage },
    //   { title: 'Registrate', component:RegisterPage},
    //   { title: 'Inicia sesión', component:LoginPage},
    // ];

  }
  
  ngDoCheck(){
    this.storage.get("access_token").then((val)=>{
      console.log("TOKEN: "+val);
      this.access_token = val;
      if(this.access_token == null || this.access_token == "" ){
        this.rootPage = HomePage;
        this.pages = [
          { title: 'Home', component: HomePage },
          { title: 'List', component: ListPage },
          { title: 'Registrate', component:RegisterPage},
          { title: 'Inicia sesión', component:LoginPage},
        ];
        console.log(this.access_token);
      }
      else{
        console.log(this.access_token);
        this.rootPage = UserPage;
        this.pages = [
          { title: 'Home', component: UserPage },
          { title: 'List', component: ListPage },
          
        ];
      }
    });
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
