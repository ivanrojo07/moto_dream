import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { TarjetaProvider } from "../../providers/providers";
import { Storage } from "@ionic/storage";


/**
 * Generated class for the TarjetaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarjeta-form',
  templateUrl: 'tarjeta-form.html',
  providers: [TarjetaProvider]
})
export class TarjetaFormPage {

  date : any = new Date().toISOString();
  currentYear : any = (new Date()).getFullYear();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private tarjetaService: TarjetaProvider,
    public storage: Storage
  ) {
  }

  onSubmitCard(formTarjeta: NgForm) {
    if (!formTarjeta.valid) {
      this.alert("Formulario incompleto", "Por favor llene todos los campos requeridos");
    }
    else {
      console.log(formTarjeta.value);
      var params = formTarjeta.value;
      this.storage.get("access_token").then((val) => {
        let token = JSON.parse(val);
        this.tarjetaService.setTarjeta(token, params).subscribe(result => {
          if (!result) {
            this.alert("Error", "Problemas con el servidor");
          }
          else {
            if (result.failed) {
              this.alert("Error result", result.failed);
            }
            else {
              console.log(result.message);
              this.alert("Creada", "tarjeta agregada con éxito");

              this.navCtrl.pop();
            }
          }
        }, error => {
          let err = JSON.parse(error._body);

          // let errorMessage = JSON.parse(err._body);

          formTarjeta.setValue({
            tipo: "",
            numero: "",
            nombre: "",
            expira: "",
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

      });
    }
  }

  regresar() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarjetaFormPage');
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
