import { MotoFormPage } from './../moto-form/moto-form';
import { MotoPage } from './../moto/moto';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { MotoProvider } from '../../providers/providers';
import { Moto } from "../../models/moto";
import { Storage } from "@ionic/storage";
/**
 * Generated class for the MotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-motos',
  templateUrl: 'motos.html',
  providers: [MotoProvider]
})
export class MotosPage implements OnInit{

  public motos: Moto[];
  public messageError: any;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: MotoProvider,
    private storage: Storage,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,

  ) {
    this.motos = [];
    this.messageError = null;
    
  }

  ngOnInit(){
    this.motos=[];
    this.messageError=null;
    this.showMotos();
  }

  ionViewWillEnter(){
    this.ngOnInit();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MotosPage');
  }

  showMotos(){
    const loader = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    loader.present();
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.provider.getMotos(token).subscribe(result =>{
        console.log(result);
        this.motos = result.motos;
        console.log(this.motos);
        loader.dismiss();
        this.messageError=null;
      },error=>{
        this.messageError = JSON.parse(error);
        console.log("Error "+JSON.stringify(this.messageError));
        loader.dismiss();
      });
    });
  }
  showMoto(moto){
    this.navCtrl.push(MotoPage,{
      moto: moto
    });
  }
  eliminarMoto(id){
    let alert = this.alertCtrl.create({
      title: '¿Deseas eliminar esta moto?',
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
              this.provider.deleteMoto(token, id).subscribe(result => {
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

  openForm(){
    console.log('Abrir formulario');
    this.navCtrl.push(MotoFormPage);
  }

}
