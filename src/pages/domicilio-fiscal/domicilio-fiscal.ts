import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DomFiscal } from '../../models/domicilio-fiscal';
import { DomicilioFiscalProvider } from '../../providers/providers';
import { Storage } from '@ionic/storage';
import { DomfiscalFormPage } from '../domfiscal-form/domfiscal-form';
/**
 * Generated class for the DomicilioFiscalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-domicilio-fiscal',
  templateUrl: 'domicilio-fiscal.html',
  providers: [DomicilioFiscalProvider],
})
export class DomicilioFiscalPage implements OnInit {


  public dirFiscal: DomFiscal;
  public messageError: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    private domicilioProvider: DomicilioFiscalProvider,
    public alertCtrl: AlertController,
  ) {
    this.dirFiscal = new DomFiscal(null, "", "", "", "", "", "", "", "");
    this.messageError = null;

  }
  ngOnInit() {
    this.showDireccion();

  }
  ionViewWillEnter() {
    console.log("hola domicilio fiscal");
    this.ngOnInit();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DomicilioFiscalPage');
  }
  showDireccion() {
    this.storage.get("access_token").then((val) => {
      let token = JSON.parse(val);
      this.domicilioProvider.getDomicilio(token).subscribe(result => {
        console.log(result.domicilio);
        this.dirFiscal = result.domicilio;
        this.messageError == null
        console.log(this.dirFiscal)
      }, error => {
        this.messageError = JSON.parse(error._body)
        console.log("Error " + JSON.stringify(this.messageError));
      });
    });

  }
  openForm() {
    this.navCtrl.push(DomfiscalFormPage);
  }
  openFormEdit() {
    this.navCtrl.push(DomfiscalFormPage, {
      edit: true,
      domicilio: this.dirFiscal,
    });
  }



}
