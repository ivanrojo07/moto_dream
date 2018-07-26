import { RutasMapPage } from './../rutas-map/rutas-map';
import { Storage } from '@ionic/storage';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { RutaUsuarioProvider } from '../../providers/providers';
/**
 * Generated class for the RutasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-rutas',
  templateUrl: 'rutas.html',
  providers: [RutaUsuarioProvider]
})
export class RutasPage {

  
  public previousTracks;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private plt: Platform,
    private storage: Storage,
    public modalCtrl: ModalController,
    private rutaProvider: RutaUsuarioProvider,
  ) {
    this.previousTracks=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutasPage');
    this.plt.ready().then(()=>{
      // this.initMap();
      this.loadHistoricRoutes();
      
    })
  }


  
  loadHistoricRoutes() {
    this.storage.get('routes').then(data => {
      if (data) {
        this.previousTracks = data;
        console.log(this.previousTracks);
      }
    });
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.rutaProvider.getRutasUsuario(token).subscribe(res=>{
        console.log(res);
      },error=>{
        console.log(error);
      });
    })
  }
  
  ionViewCanEnter(){
   this.ionViewDidLoad();
  }
  openMap(route){
    this.navCtrl.push(RutasMapPage, { tracking: route });
    // this.modalCtrl.create(RutasMapPage,{tracking:route}).present();
  }
  crearRuta(){
    this.navCtrl.push(RutasMapPage, { tracking:null });
    // this.modalCtrl.create(RutasMapPage, { tracking: '' }).present();
  }

}
