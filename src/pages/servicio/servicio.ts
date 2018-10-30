import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/providers';

/**
 * Generated class for the ServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicio',
  templateUrl: 'servicio.html',
  providers:[ServiciosProvider]
})
export class ServicioPage {
  public servicio_id: number;
  public servicio: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public servicioProvider:ServiciosProvider,
    private storage:Storage,
    ) {
      this.servicio_id = this.navParams.get('servicio_id');
      console.log(this.servicio_id);
      this.servicio = null;
  }
  getServicio(){
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.servicioProvider.getServicio(this.servicio_id,token).subscribe(res=>{
        // console.log(res);
        this.servicio = res['servicio'];
        console.log(this.servicio);
      },error=>{
        console.log(error);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicioPage');
  }
  ionViewWillEnter(){
    this.getServicio();
  }

}
