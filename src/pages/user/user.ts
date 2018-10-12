import { Component,OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Nav } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { UsuarioProvider } from '../../providers/providers';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
  providers: [UsuarioProvider]
})
export class UserPage implements OnInit {
  @ViewChild(Nav) nav: Nav;
  
  public usuario: Usuario;
  public access_token: string;
  rootPage:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _usuarioService: UsuarioProvider,
    private storage: Storage,
    public loadingCtrl: LoadingController

    
  ) {
    this.usuario = new Usuario(null,'','','','','','','');

    
  }
  ngOnInit(){
    const loader = this.loadingCtrl.create({content:'Cargando...'});
    loader.present();
    this.storage.get("access_token").then((val)=>{
      this.access_token = val;
      if(this.access_token == null || this.access_token == "" ){

        
      }
      else{
        this._usuarioService.getUsuario(this.access_token)
            .subscribe(result=>{
              this.usuario.id = result.id;
              this.usuario.username = result.username;
              this.usuario.name = result.name;
              this.usuario.appaterno = result.appaterno;
              this.usuario.apmaterno = result.apmaterno;
              this.usuario.email = result.email;
              this.usuario.telefono = result.telefono;
              loader.dismiss();
            }
            ,error=>{
              console.log("error");
              this._usuarioService.logout();
              this.rootPage = HomePage;
              this.nav.setRoot(HomePage);
            });
    }
    // console.log(this.usuario);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
