import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/providers';
import { ServicioPage } from '../servicio/servicio';

/**
 * Generated class for the ServiciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicios',
  templateUrl: 'servicios.html',
  providers: [ServiciosProvider]
})
export class ServiciosPage {
  public servicios : any[];
  public moto_id : number;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public servicioProvider:ServiciosProvider,
    private storage:Storage,
    ) {
      this.servicios = [];
      if(this.navParams.get('moto_id')){
        this.moto_id = this.navParams.get('moto_id');
      }
      else{
        this.moto_id = null;
      }
      console.log(this.moto_id);

  }
  getServicios(){
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.servicioProvider.getServicios(token).subscribe(res=>{
        // console.log(res);
        this.servicios = res['servicios'];
        console.log(this.servicios);
      },error=>{
        console.log(error);
      });
    });
  }
  getMotoServicios(){
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.servicioProvider.getMotoServicio(this.moto_id,token).subscribe(res=>{
        this.servicios = res['servicios'];
        console.log(this.servicios)
      },error=>{ 
        console.log(error);
      })
    })
  }
  detailServicio(servicio_id){
    this.navCtrl.push(ServicioPage,{servicio_id:servicio_id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosPage');
  }
  ionViewWillEnter(){
    if(this.moto_id == null){
      this.getServicios();
    }
    else{
      this.getMotoServicios();
    }
  }
}
