import { ContactosPage } from './../contactos/contactos';
import { ContactoFormPage } from './../contacto-form/contacto-form';
import { Storage } from '@ionic/storage';
import { ContactoProvider } from './../../providers/contacto/contacto';
import { CallNumber } from '@ionic-native/call-number';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, LoadingController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';

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
  ) {
    // this.contRobo = [];
    this.sms.hasPermission().then(val=>{console.log('permiso',val)});
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

}
