import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { UsuarioProvider } from '../../providers/providers';
import { HomePage } from '../home/home';
/**
 * Generated class for the ContrasenaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-contrasena',
  templateUrl: 'contrasena.html',
})
export class ContrasenaPage {


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private _usuarioService: UsuarioProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContrasenaPage');
  }

  onSubmit(formLogin: NgForm) {
    // TODO
    if (!formLogin.valid) {
      this.alert("Formulario incompleto", 'por favor llene todos los campos');
    }
    else {
      let params = formLogin.value;
      this._usuarioService.changePass(params).subscribe(result => {
        if (!result) {
          this.alert("Error", "Problemas con el servidor");
        }
        else {
          if (result.failed) {
            this.alert("Error result", result.failed);
          }
          else {
            console.log(result.message);
            this.alert("Actualizada", result.message);
            this._usuarioService.logout();
            this.navCtrl.setRoot(HomePage);
          }
        }
      }, error => {
        let err = JSON.parse(error._body);

        // let errorMessage = JSON.parse(err._body);

        formLogin.setValue({
          password: "",
          password_new: "",
          password_new_confirmation: ""
        });
        console.log("Error: " + JSON.stringify(err));
        console.log("ErrorMessage: " + JSON.stringify(err.error));

        if (err.errors) {
          if (err.errors.password_new) {

            this.alert("Tu contraseña nueva no coinciden", err.errors.password_new);
          }
        }
        else {
          this.alert("Error:", err.error);
        }
      });

      // console.log(params);

    }

  }
  regresar() {
    this.navCtrl.pop();
  }

  public alert(titulo: string, contenido: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: contenido,
      buttons: ['OK']
    });
    alert.present();


  }

}
