import { RutasMapPage } from './../rutas-map/rutas-map';
import { Storage } from '@ionic/storage';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController, AlertController } from 'ionic-angular';
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
    public alertCtrl:AlertController
  ) {
    this.previousTracks=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutasPage');
    this.plt.ready().then(()=>{
      this.loadHistoricRoutes();

    })
  }



  loadHistoricRoutes() {
    this.storage.get('routes').then(data => {
      if (data) {
        this.previousTracks = data;
      }
    });
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.rutaProvider.getRutasUsuario(token).subscribe(res=>{
        console.log(res);
        this.previousTracks = res['rutas'];
        console.log(this.previousTracks);
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
  }
  deleteRoute(route_id){
    console.log(route_id);
    this.alertCtrl.create({
      title: 'Eliminar esta ruta',
      subTitle: '¿Estas seguro de eliminar esta ruta?',
      buttons:[
        {
          text: 'Eliminar',
          handler:()=>{
            // TODO
            this.storage.get('access_token').then(val=>{
              let token = JSON.parse(val);
              this.rutaProvider.deleteRutaUsuario(token,route_id)
              .subscribe(res=>{
                this.alertCtrl.create({
                  title: res['message'],
                  buttons:['ok']
                }).present();
                this.loadHistoricRoutes();

              },error=>{
                console.log(error);
                this.alertCtrl.create({
                  title: 'Error al eliminar la ruta',
                  subTitle: 'Por favor intentelo más tarde',
                  buttons:['OK']
                }).present();
                this.loadHistoricRoutes();

              });

            });
          }
        },
        {
          text: 'Cancelar',
          handler: ()=>{
            console.log('cancel')
          }
        },
      ]

    }).present();
  }
  crearRuta(){
    this.navCtrl.push(RutasMapPage, { tracking:null });

  }

}
