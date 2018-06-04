import { Component, OnInit } from "@angular/core";
import { TarjetaProvider } from "../../providers/providers";
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Tarjeta } from "../../models/tarjeta";
import { Storage } from "@ionic/storage";
import { TarjetaFormPage } from "../tarjeta-form/tarjeta-form";

/**
 * Generated class for the TarjetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarjeta',
  templateUrl: 'tarjeta.html',
  providers: [TarjetaProvider],
})
export class TarjetaPage implements OnInit {

  public tarjetas: Tarjeta[];
  public messageError: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tarjetaProvider: TarjetaProvider,
    public storage: Storage,
    public alertCtrl: AlertController
  ) {
    this.tarjetas = [];
    this.messageError = null
  }
  ngOnInit(){
    this.tarjetas = [];
    this.messageError = null;
    this.showTarjetas();
  }
  showTarjetas(){
    this.storage.get("access_token").then((val)=>{
      let token = JSON.parse(val);
      this.tarjetaProvider.getTarjetas(token).subscribe(result=>{
        this.tarjetas = result.tarjetas;
        this.messageError = null;
      },
      error=>{
        this.messageError = JSON.parse(error._body);
        console.log('Error'+JSON.stringify(this.messageError));
      });
    });
  }

  openForm(){
    this.navCtrl.push(TarjetaFormPage);
  }

  eliminarTarjeta(id){
    let alert = this.alertCtrl.create({
      title:"¿Seguro que deseas eliminar esta tarjeta?",
      message: "Si lo borras no podrás utilizar esta tarjeta después",
      buttons:[
        {
          text: 'Aceptar',
          handler: ()=>{
            console.log('Aceptar');
            this.storage.get("access_token").then((val)=>{
              let token = JSON.parse(val);
              this.tarjetaProvider.deleteTarjeta(token,id).subscribe(result=>{
                console.log(result);
                this.ngOnInit();
              },error=>{
                this.messageError = JSON.parse(error._body);
                console.log("Error"+JSON.stringify(this.messageError));
              });
            });
          }
        },
        {
          text: 'Cancelar',
          handler:()=>{
            console.log('cancel');
          }
        }
      ]
    });
    alert.present();

  }

  ionViewWillEnter() {
    console.log("hola tarjeta");
    this.ngOnInit();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarjetaPage');
  }


}
