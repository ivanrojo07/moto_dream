import { ContactoProvider } from './../../providers/providers';
import { ContactoFormPage } from './../contacto-form/contacto-form';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the ContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
  providers:[ContactoProvider]
})
export class ContactosPage {

  public contactos:any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private contProv:ContactoProvider,
    private storage:Storage,
    private platform:Platform
  ) {
    
  }

  ionViewDidLoad() {
    this.contactosUser();
  }
  ionViewCanEnter(){
   this.contactosUser();
  }
  contactosUser(){
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.contProv.getContactos(token).subscribe(result=>{
        this.contactos = result['contactos'];
        console.log(this.contactos);
      },error=>{
        console.log(error);

      });
    })
  }
  openForm(){
    this.navCtrl.push(ContactoFormPage,{edit:false});
  }
  delete(contacto_id){
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.contProv.deleteContacto(contacto_id,token).subscribe(result=>{
        if(result['contactos']){
          this.ionViewCanEnter();
        }
      },error=>{
        console.log(error);
      });

    })
  }
  editar(contacto){
    this.navCtrl.push(ContactoFormPage,{contacto:contacto,edit:true});

  }

}
