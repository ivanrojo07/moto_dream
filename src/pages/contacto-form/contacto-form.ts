import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { ContactoProvider } from '../../providers/providers';
import { Storage } from '@ionic/storage';
import { NgForm } from "@angular/forms";

/**
 * Generated class for the ContactoFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto-form',
  templateUrl: 'contacto-form.html',
  providers:[ContactoProvider],
})
export class ContactoFormPage {

  public edit: boolean;
  public contacto: any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private contactoProv:ContactoProvider,
     public alertCtrl: AlertController,
     private storage:Storage,
     public viewCtrl:ViewController,
    ) {
      this.edit = this.navParams.get('edit');
      console.log(this.edit);
      if(this.edit == true){
        this.contacto = this.navParams.get('contacto');
      }
      else{
        this.contacto = {
          id:'',
          nombre:'',
          numero:''
        };
      }
      console.log(this.contacto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoFormPage');
  }

  onSubmit(form:NgForm){
    if (!form.valid) {
      this.alert('Agregue un numero de telefono','El número telefonico es requerido y valido');
      if (this.edit) {
        form.setValue({
          _method: "PUT",
          nombre: this.contacto.nombre,
          telefono: this.contacto.numero,
        });
      }
    } else {
      var params = form.value;
      this.storage.get('access_token').then(val=>{
        let token = JSON.parse(val);
        if (this.edit == true) {
          this.contactoProv.updateContacto(this.contacto.id,params,token).subscribe(result=>{
            console.log(result);
            if(result['contacto']){
              this.alert('Creado', 'El contacto a sido creado');
              this.navCtrl.pop();
              // this.viewCtrl.dismiss();
            }
          },error=>{
            this.alert('Error','Se a presentado un error, por favor intentelo más tarde');
            form.setValue({
              _method: "PUT",
              nombre: this.contacto.nombre,
              telefono: this.contacto.numero,
            });
            console.log(error);
          });
        } else {
          this.contactoProv.setContacto(params,token).subscribe(result=>{
            if(result['contacto']){
              if(this.navParams.get('firstcontact')){
                this.viewCtrl.dismiss();
                this.alert('Creado','El contacto a sido creado');
              }
              else{
                this.navCtrl.pop();
                this.alert('Creado', 'El contacto a sido creado');
              }
            }
          },error=>{
            if (this.navParams.get('firstcontact')) {
              this.viewCtrl.dismiss();
              this.alert('Error', 'Se a presentado un error, por favor intentelo más tarde');
            }
            else {
              // this.navCtrl.pop();
              this.alert('Error', 'Se a presentado un error, por favor intentelo más tarde');
            }
          });
        }
      });
    }
  }
  
  alert(titulo: string, contenido: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: contenido,
      buttons: ['OK']
    });
    alert.present();
  }

  regresar(){
    
  }

}
