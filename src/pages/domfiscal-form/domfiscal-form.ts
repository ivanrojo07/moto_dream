import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { DomicilioFiscalProvider } from '../../providers/providers';

/**
 * Generated class for the DomfiscalFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-domfiscal-form',
  templateUrl: 'domfiscal-form.html',
  providers: [DomicilioFiscalProvider]
})
export class DomfiscalFormPage {

  public edit: boolean;
  // public formDomicilio:NgForm;
  public domicilio: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public domicilioService: DomicilioFiscalProvider,
    public storage: Storage,
  ) {
    // console.log(this.formDomicilio.valid);
    if (navParams.get('edit')) {
      this.edit = navParams.get("edit");
      this.domicilio = navParams.get("domicilio");
    } else {
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
      };
    }
    console.log(this.edit);
  }
  onSubmit(formDomicilio: NgForm) {
    if (!formDomicilio.valid) {
      this.alert("Formulario incompleto", "Por favor llene los campos requeridos");
      if (this.edit) {
        formDomicilio.setValue({
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
    }
    else {
      console.log(formDomicilio.value);
      var params = formDomicilio.value;
      console.log(formDomicilio.value)
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

            formDomicilio.setValue({
              pais: this.domicilio.pais,
              estado: this.domicilio.estado,
              municipio: this.domicilio.municipio,
              ciudad: this.domicilio.ciudad,
              colonia: this.domicilio.colonia,
              calle: this.domicilio.calle,
              numext: this.domicilio.numext,
              numint: this.domicilio.numint,
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

            formDomicilio.setValue({
              pais: "",
              estado: "",
              municipio: "",
              ciudad: "",
              colonia: "",
              calle: "",
              numext: "",
              numint: "",
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
    console.log('ionViewDidLoad DomfiscalFormPage');
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
