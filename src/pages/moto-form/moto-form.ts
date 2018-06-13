import { MotoProvider } from './../../providers/providers';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the MotoFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moto-form',
  templateUrl: 'moto-form.html',
  providers: [MotoProvider]
})
export class MotoFormPage implements OnInit{

  public marcas: any[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public motoService: MotoProvider,
    public storage: Storage,

  ) {
    this.marcas = [];
  }
  ngOnInit(){
    this.listMarcas();
  }
  listMarcas(){
    this.motoService.getMarcas().subscribe(result=>{
      
      this.marcas = result.marcas;
      
    },error=>{
      console.log(error);
    });
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      this.alert('Formulario incompleto','Por favor llene los campos requeridos');
    }
    else{
      console.log(form.value);
      var params = form.value;
      this.storage.get('access_token').then(val=>{
        let token = JSON.parse(val);
        this.motoService.setMoto(token,params).subscribe(result=>{
          if (!result) {
            this.alert("Error", "Problemas con el servidor");
          }
          else {
            if (result.failed) {
              this.alert("Error result", result.failed);
            }
            else {
              console.log(result.moto);
              this.alert(result.moto.marca+" creada", "Tu moto fue agregada");

              this.navCtrl.pop();
            }
          }
        },error=>{
          let err = JSON.parse(error._body);
          form.setValue({
            marca: "",
            modelo: "",
            version: "",
            serie: "",
            km: "",
            anio: ""
          });
          console.log("Error: " + JSON.stringify(err));
        });
      });
    }
  }
  regresar(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MotoFormPage');
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
