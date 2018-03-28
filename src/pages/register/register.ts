import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Usuario } from '../../models/usuario';
import { UsuarioProvider } from '../../providers/providers';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [UsuarioProvider]
})
export class RegisterPage {

  public errorMessage: string;
  public usuario: Usuario;
  public confirm_pass:string;
  public confirm:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _usuarioService:UsuarioProvider, public alertCtrl: AlertController) {
    this.usuario = new Usuario(null,'','','','','','','');
    this.confirm_pass = '';
    this.confirm = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  public onSubmit() {
    console.log(this.usuario + this.confirm_pass);
    if (this.usuario.password != this.confirm_pass) {
      console.log("NO-coinciden");
      this.alert('Error', 'Las contraseñas introducidas no coinciden, vuelve a verificarlas');
      this.usuario = new Usuario(null,'', '', '', '', '', '', '');
      this.confirm_pass = '';
    }
    else {
      // console.log("entra al else, coincide");
      if (this.usuario.password == this.confirm_pass) {
        this.alert('Success', "coinciden contraseñas" + this.usuario.name);
        this._usuarioService.addUsuario(this.usuario).subscribe(
          result => {
            if (!result.usuario) {
              this.alert('Error', 'Problemas con el servidor. Contacte con su administrador de red.');
              console.log(result);
            }
            else {
              if (result) {

                this.usuario = result.usuario;
                this.alert("Success", "Usuario creado correctamente. Por favor " + this.usuario.name + " " + this.usuario.appaterno + " introduce tus credenciales.");
                this.navCtrl.setRoot('HomePage');
              }
              else {
                console.log(result);
              }
            }
          },
          error => {
            this.errorMessage = <any>error;
            if (this.errorMessage != null) {
              console.log(this.errorMessage);
              this.alert('Error', 'Problemas con el servidor');
            }
          });


      }
    }
  }

  public alert(titulo:string, contenido:string ){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: contenido,
      buttons: ['OK']
    });
    alert.present();
  }

}
