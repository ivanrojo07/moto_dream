import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { DomEnvio } from '../../models/domicilio-envio';
import { DomicilioEnvioProvider } from '../../providers/providers';
import { Storage } from '@ionic/storage';
import { DomenvioFormPage } from '../domenvio-form/domenvio-form';

/**
 * Generated class for the DomicilioEnvioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-domicilio-envio',
  templateUrl: 'domicilio-envio.html',
  providers: [DomicilioEnvioProvider],
})
export class DomicilioEnvioPage implements OnInit {

  public domicilios: DomEnvio[];
  public messageError: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public alertCtrl: AlertController,
    public direccionProvider: DomicilioEnvioProvider,
    public loadingCtrl: LoadingController

  ) {
    this.domicilios = [];
    this.messageError = null;
    // console.log(this.domicilios.length); 
  }

  ngOnInit() {
    this.domicilios = [];
    this.messageError = null;
    this.showDirecciones();
  }
  ionViewWillEnter() {
    console.log("hola tarjeta");
    this.ngOnInit();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DomicilioEnvioPage');
  }

  showDirecciones() {
    const loader = this.loadingCtrl.create({
      content:'Cargando...'
    });
    loader.present()
    this.storage.get("access_token").then((val) => {
      let token = JSON.parse(val);
      this.direccionProvider.getDomicilios(token).subscribe(result => {
        console.log(result);
        this.domicilios = result.domicilio;
        console.log(this.domicilios);
        loader.dismiss();
        this.messageError = null
      }, error => {
        this.messageError = JSON.parse(error._body)
        console.log("Error " + JSON.stringify(this.messageError));
        loader.dismiss();
      });
    });
  }

  showDireccion(id) {

    this.storage.get("access_token").then((val) => {
      let token = JSON.parse(val);
      this.direccionProvider.getDomicilio(token, id).subscribe(result => {
        console.log(result);
        this.alertPresentacion(result.domicilio);
      }, error => {
        console.log(JSON.stringify(error));
      });
    });
  }

  openForm() {
    this.navCtrl.push(DomenvioFormPage);
  }

  editDireccion(direccion: DomEnvio) {
    this.navCtrl.push(DomenvioFormPage, {
      edit: true,
      domicilio: direccion
    });
  }

  eliminarDireccion(id) {
    let alert = this.alertCtrl.create({
      title: 'Deseas eliminar esta direccion',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            console.log(data);
            this.storage.get("access_token").then((val) => {
              let token = JSON.parse(val);
              console.log(token);
              this.direccionProvider.deleteDomicilio(token, id).subscribe(result => {
                console.log(result);
                // this.tarjetas = result.tarjetas;
                // console.log(this.tarjetas);
                this.ionViewWillEnter();
              },
                error => {
                  this.messageError = JSON.parse(error._body)
                  console.log("Error " + JSON.stringify(this.messageError));

                });
            });
          }
        }
      ]
    });
    alert.present();
  }


  alertPresentacion(direccion) {
    let alert = this.alertCtrl.create({
      title: 'Domicilio',
      message: `<ion-card *ngFor="let direccion of domicilios; let i = index">
    <ion-card-content>
      <p>
        <strong>Pais: ${direccion.pais}</strong>  
      </p>
      <p>
        <strong>Estado: ${direccion.estado}</strong> 
      </p>
      <p>
        <strong>Ciudad: ${direccion.ciudad}</strong> 
      </p>
      <p>
        <strong>Municipio: ${direccion.municipio}</strong> 
      </p>
      <p>
        <strong>Calle: ${direccion.calle}</strong> 
      </p>
      <p>
        <strong>Número exterior: ${direccion.numext}</strong> 
      </p>
      <p>
        <strong>Número interior: ${direccion.numint}</strong> 
      </p>
      <p>
        <strong>Colonia: ${direccion.colonia}</strong>  
      </p>
      <p>
        <strong>Entre : ${direccion.entre1}</strong> 
      </p>
      <p>
        <strong>Y : ${direccion.entre2}</strong> 
      </p>
      <p>
        <strong>Referencia: ${direccion.referencia}</strong> 
      </p>
      
    </ion-card-content>

  </ion-card>`,
      buttons: ['OK']
    });
    alert.present();
  }

}
