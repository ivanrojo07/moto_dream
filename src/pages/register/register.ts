import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Usuario } from '../../models/usuario';

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
})
export class RegisterPage {

  public errorMessage: string;
  public usuario: Usuario;
  public confirm_pass:string;
  public confirm:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.usuario = new Usuario(null,'','','','','','','');
    this.confirm_pass = '';
    this.confirm = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  public onSubmit(){
    console.log(this.usuario+this.confirm_pass);
    if (this.usuario.password != this.confirm_pass) {
      console.log("NO-coinciden");
      this.alert('Error','Las contraseñas introducidas no coinciden, vuelve a verificarlas');
      this.usuario = new Usuario(null,'','','','','','','');
      this.confirm_pass ='';
    } else {
      this.alert('Success', "coinciden contraseñas"+this.usuario.name);
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
