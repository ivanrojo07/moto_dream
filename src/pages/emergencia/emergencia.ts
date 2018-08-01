import { ContactoFormPage } from './../contacto-form/contacto-form';
import { Storage } from '@ionic/storage';
import { ContactoProvider } from './../../providers/contacto/contacto';
import { CallNumber } from '@ionic-native/call-number';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

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


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private callNumber:CallNumber,
    private contactoProv: ContactoProvider,
    private storage: Storage,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergenciaPage');
  }
  ionViewCanEnter(){
   this.contactosUser();
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
