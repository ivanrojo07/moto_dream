import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { UsuarioProvider } from '../../providers/providers';
import { Storage } from '@ionic/storage';
import { ListPage } from '../list/list';
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
export class UserPage {

  public usuario: Usuario;
  public access_token: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _usuarioService: UsuarioProvider,
    private storage: Storage,
  ) {
    this.usuario = new Usuario(null,'','','','','','','');
  }
  ngOnInit(){
    this.storage.get("access_token").then((val)=>{
      // console.log("TOKEN: "+val);
      this.access_token = val;
      if(this.access_token == null || this.access_token == "" ){
        // console.log(this.access_token);
        
      }
      else{
        // console.log(this.access_token);
        this._usuarioService.getUsuario(this.access_token).subscribe(result=>{
        this.usuario.id = result.id;
        this.usuario.username = result.username;
        this.usuario.name = result.name;
        this.usuario.appaterno = result.appaterno;
        this.usuario.apmaterno = result.apmaterno;
        this.usuario.email = result.email;
        this.usuario.telefono = result.telefono;
        // this.usuario.name = result.name;

      });
      }
      console.log("USUARIO"+this.usuario);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
