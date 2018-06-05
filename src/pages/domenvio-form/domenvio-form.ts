import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DomicilioEnvioProvider } from '../../providers/providers';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the DomenvioFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-domenvio-form',
  templateUrl: 'domenvio-form.html',
  providers: [DomicilioEnvioProvider]
})
export class DomenvioFormPage {

  public edit: boolean;
  public domicilio: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public domicilioService: DomicilioEnvioProvider,
    public storage: Storage,
  ) {

    if (navParams.get('edit')) {
      this.edit = navParams.get("edit");
      this.domicilio = navParams.get("domicilio");
    }
    else {
      this.edit = false;
      this.domicilio = {
        pais: "",
        estado: "",
        municipio: "",
        ciudad: "",
        colonia: "",
        calle: "",
        numext: "",
        numint: "",
        entre1: "",
        entre2: "",
        referencia: "",
      }
    }
    console.log(this.edit);
  }

  onSubmit(formDirenvio: NgForm) {
    if (!formDirenvio.valid) {
      this.alert("Formulario incompleto", "Por favor llene los campos requeridos");
      if (this.edit) {
        formDirenvio.setValue({
          _method: "PUT",
          pais: this.domicilio.pais,
          estado: this.domicilio.estado,
          municipio: this.domicilio.municipio,
          ciudad: this.domicilio.ciudad,
          colonia: this.domicilio.colonia,
          calle: this.domicilio.calle,
          numext: this.domicilio.numext,
          numint: this.domicilio.numint,
        });
      }
    } else {
      console.log(formDirenvio.value);
      var params = formDirenvio.value;
      this.storage.get("access_token").then((val) => {
        let token = JSON.parse(val);
        if (this.edit == true) {
          this.domicilioService.updateDomicilio(token, params, this.domicilio.id).subscribe(result => {
            if (!result) {
              this.alert("Error", "Problemas con el servidor");
            }
            else {
              if (result.failed) {
                this.alert("Error result", result.failed);
              }
              else {
                console.log(result.message);
                this.alert("Creada", "Domicilio agregado con éxito");

                this.navCtrl.pop();
              }
            }
          }, error => {
            let err = JSON.parse(error._body);

            // let errorMessage = JSON.parse(err._body);

            formDirenvio.setValue({
              pais: this.domicilio.pais,
              estado: this.domicilio.estado,
              municipio: this.domicilio.municipio,
              ciudad: this.domicilio.ciudad,
              colonia: this.domicilio.colonia,
              calle: this.domicilio.calle,
              numext: this.domicilio.numext,
              numint: this.domicilio.numint,
              entre1: this.domicilio.entre1,
              entre2: this.domicilio.entre2,
              referencia: this.domicilio.referencia,
            });
            console.log("Error: " + JSON.stringify(err));
            console.log("ErrorMessage: " + JSON.stringify(err.error));
          });
        } else {
          this.domicilioService.setDomicilio(token, params).subscribe(result => {
            if (!result) {
              this.alert("Error", "Problemas con el servidor");
            }
            else {
              if (result.failed) {
                this.alert("Error result", result.failed);
              }
              else {
                console.log(result.message);
                this.alert("Creada", "Domicilio agregado con éxito");

                this.navCtrl.pop();
              }
            }
          }, error => {
            let err = JSON.parse(error._body);

            // let errorMessage = JSON.parse(err._body);

            formDirenvio.setValue({
              pais: "",
              estado: "",
              municipio: "",
              ciudad: "",
              colonia: "",
              calle: "",
              numext: "",
              numint: "",
              entre1: "",
              entre2: "",
              referencia: "",
            });
            console.log("Error: " + JSON.stringify(err));
            console.log("ErrorMessage: " + JSON.stringify(err.error));
          });
        }
      });
    }
  }

  regresar() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DomenvioFormPage');
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
