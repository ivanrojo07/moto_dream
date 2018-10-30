import { ContactosPage } from './../contactos/contactos';
import { ContactoFormPage } from './../contacto-form/contacto-form';
import { Storage } from '@ionic/storage';
import { ContactoProvider } from './../../providers/contacto/contacto';
import { CallNumber } from '@ionic-native/call-number';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, LoadingController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the EmergenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emergencia',
  templateUrl: 'emergencia.html',
  providers: [ContactoProvider]
})
export class EmergenciaPage {

  public contactos: any[];
  public smsFlag:boolean;

  public qrData: any[];
  public createdCode: any;
  public scannedCode: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private callNumber:CallNumber,
    private contactoProv: ContactoProvider,
    private storage: Storage,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private sms : SMS,
    private socialSharing: SocialSharing,
    public loadingCtrl: LoadingController,
    private barcodeScanner: BarcodeScanner,
  ) {
    // this.contRobo = [];
    this.sms.hasPermission().then(val=>{console.log('permiso',val)});
    this.qrData = null;
    this.createdCode = null;
    this.scannedCode = null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergenciaPage');
    this.contactosUser();
  }
  ionViewCanEnter(){
    this.ionViewDidLoad();
  }
  robo(){
    let loading = this.loadingCtrl.create({content:'Enviando SMS'});
    loading.present()
    this.contactos.forEach(contacto => {
      if (contacto['principal']) {
        this.sms.send(contacto['numero'], 'Hola ' + contacto['nombre'] + ', me robaron o extravie mi motocicleta. Por favor contactame');
        this.socialSharing.shareViaWhatsAppToReceiver('+52'+contacto['numero'], 'Hola ' + contacto['nombre'] + ', me robaron o extravie mi motocicleta.Por favor contactame');
        // this.socialSharing.shareViaSMS("Hola " + contacto["nombre"] + ", me robaron o extravie mi motocicleta.Por favor contactame", contacto['numero']);
      }
      if (contacto['robo']) {
        this.sms.send(contacto['numero'], 'Hola ' + contacto['nombre'] + ', me robaron o extravie mi motocicleta. Por favor contactame.');
        this.socialSharing.shareViaWhatsAppToReceiver('+52' + contacto['numero'], 'Hola ' + contacto['nombre'] + ', me robaron o extravie mi motocicleta.Por favor contactame');
      }
    });
    loading.dismiss();
  }

  averia(){
    let loading = this.loadingCtrl.create({ content: 'Enviando SMS' });
    loading.present()
    this.contactos.forEach(contacto=>{
      if(contacto['principal']){
        this.sms.send(contacto['numero'],'Hola '+contacto['nombre']+', se averio mi motocicleta, por favor contactame.');
        this.socialSharing.shareViaWhatsAppToReceiver('+52' + contacto['numero'], 'Hola ' + contacto['nombre'] + ', se averio mi motocicleta, por favor contactame.')
      }

      if(contacto['averia']){
        this.sms.send(contacto['numero'],'Hola '+contacto['nombre']+', se averio mi motocicleta, por favor contactame.');
        this.socialSharing.shareViaWhatsAppToReceiver("+52" + contacto["numero"], "Hola " + contacto["nombre"] + ", se averio mi motocicleta, por favor contactame.");
      }
    });
    loading.dismiss();
  }

  accidente(){
    let loading = this.loadingCtrl.create({ content: 'Enviando SMS' });
    loading.present()
    this.contactos.forEach(contacto => {
      if (contacto['principal']) {
        this.sms.send(contacto['numero'], 'Hola ' + contacto['nombre'] + ', sufri un accidente en mi motocicleta, por favor contactame.');
        this.socialSharing.shareViaWhatsAppToReceiver("+52" + contacto["numero"], "Hola " + contacto["nombre"] + ", sufri un accidente en mi motocicleta, por favor contactame.");
      }
      if (contacto['accidente']) {
        this.sms.send(contacto['numero'], 'Hola ' + contacto['nombre'] + ', sufri un accidente en mi motocicleta, por favor contactame.');
        this.socialSharing.shareViaWhatsAppToReceiver("+52" + contacto["numero"], "Hola " + contacto["nombre"] + ", sufri un accidente en mi motocicleta, por favor contactame.");
      }
    });
    loading.dismiss();
  }

  openPage() {
    this.navCtrl.push(ContactosPage);
    
  }
  contactosUser(){
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.contactoProv.getContactos(token).subscribe(res=>{
        this.contactos = res['contactos'];
        console.log(this.contactos);
        
        if(this.contactos.length == 0){
          this.modalCtrl.create(ContactoFormPage,{edit:false,firstcontact:true}).present();
            this.alertCtrl.create({
              title:'Agrega tu contacto de emergencia',
              subTitle:'Este contacto será alertado cuando estes en peligro o en caso de avería.',
              buttons:['De acuerdo']
  
            }).present();
        }
      },error=>{
        console.log(error);
      });
    })
    
  }
  emergencia(){
    this.callNumber.callNumber("911", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  public getCodeRobo(){
    let contactosRobo = [];
    this.contactos.forEach(contacto => {
      if (contacto['principal']) {
        contactosRobo.push(contacto);
      }
      if (!contacto['principal'] && contacto['robo']) {
        contactosRobo.push(contacto);
      }
    });
    this.createdCode = `${JSON.stringify(contactosRobo)}`;
    console.log(this.createdCode);

  }

  /**
   * scanCode
   */
  public scanCode() {
    this.barcodeScanner.scan().then(barcodeData=>{
      console.log(barcodeData);
      // this.scannedCode = ;
      this.scannedCode = JSON.parse(barcodeData.text);
      console.log(this.scannedCode);
    },err=>{
      // console.log('error barcode: ',err);
      // this.scannedCode = 'error '+err;
    })
  }

  /**
   * descargarQR
   */
  public descargarQR() {
    let dataurl = document.getElementById("qr").innerHTML;
    // console.log(dataurl);
    let myRegexp = /(?:^|\s)src=(.*?)(?:\s|$)/g;
    console.log('dataurl',dataurl);
    let match = myRegexp.exec(dataurl);
    console.log('match',match);
    let match1 = match[1].replace('></div>', '');
    // console.log(match1);
    let ImageURL = match1;
    console.log("ImageURL", ImageURL);

    let block = ImageURL.split(";");

    let contentType = block[0].split(":")[1];

    let realData = block[1].split(",")[1];

    let file = this.dataURLtoFile(JSON.parse(ImageURL), "qr.png");
    return file;
  }

  /**
   * dataURLtoFile
   */
  public dataURLtoFile(dataurl,filename) {
    var arr = dataurl.split(',');
    console.log(arr); 
    var mime = arr[0].match(/:(.*?);/)[1]

    var bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);

    while (n--) {

      u8arr[n] = bstr.charCodeAt(n);

    }

    return new File([u8arr], filename, { type: mime });
  }

}
