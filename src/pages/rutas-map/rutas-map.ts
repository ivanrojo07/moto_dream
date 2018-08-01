import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { filter } from 'rxjs/operators';
import { GoogleMaps, GoogleMapOptions, LatLng, Environment } from '@ionic-native/google-maps';
import { RutaUsuarioProvider } from '../../providers/providers';
// import { Content } from '../../../node_modules/ionic-angular/umd/navigation/nav-interfaces';

/**
 * Generated class for the RutasMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rutas-map',
  templateUrl: 'rutas-map.html',
  providers: [RutaUsuarioProvider],
})
export class RutasMapPage {

  @ViewChild('map') mapElement: ElementRef;
  public map: any;
  public currentMapTrack;
  public isTracking;
  public trackedRoute;
  public positionSubscription: Subscription;
  public enviroment:any;
  public tracking;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private plt: Platform,
    private geolocation: Geolocation,
    private storage: Storage,
    private rutasProvider:RutaUsuarioProvider,
  ) {
    this.currentMapTrack = null;
    this.isTracking = false;
    this.trackedRoute = [];
    this.tracking = this.navParams.get('tracking');
   console.log(this.tracking);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutasMapPage');
    this.plt.ready().then(() => {
      this.initMap();
    });

  }
  ionViewCanEnter(){
   this.ionViewDidLoad();
  }

  initMap() {

    let mapOptions: GoogleMapOptions = {
      zoom: 13,
      mapType: 'MAP_TYPE_HYBRID',

      controls: {
        'compass': true,
        'myLocationButton': true,
        'myLocation': true,   // (blue dot)
        'indoorPicker': true,
        // 'zoom': true,          // android only
        'mapToolbar': true     // android only
      },
      preferences: {
        // zoom: {
        //   minZoom: 15,
        //   maxZoom: 18
        // },

        padding: {
          left: 2,
          top: 2,
          bottom: 2,
          right: 2
        },

        building: true
      },
    };

    this.map = GoogleMaps.create(this.mapElement.nativeElement, mapOptions);
    // this.enviroment = new Environment();
    // this.enviroment.setBackgroundColor('white');
    this.geolocation.getCurrentPosition().then((pos) => {
      console.log(pos);
      let latLng = new LatLng(pos.coords.latitude, pos.coords.longitude);
      console.log(latLng);
      this.map.setCameraZoom(16);
      this.map.setCameraTarget(latLng);
      
    }).catch(error => {
      console.log('error tomando la locación', error);
    });
    if (this.tracking != null) {
      this.showHistoryRoute(this.tracking)
    }
  }

  salir(){
    this.viewCtrl.dismiss();
  }

  startTracking() {
    this.map.clear();
    this.isTracking = true;
    this.trackedRoute = [];
    this.positionSubscription = this.geolocation.watchPosition()
      .pipe(
        filter(p => p.coords !== undefined)
      )
      .subscribe(data => {
        console.log(data);
        setTimeout(() => {
          let latLng = new LatLng(data.coords.latitude, data.coords.longitude);
          console.log(latLng);
          this.map.setCameraTarget(latLng);
          this.map.setCameraZoom(20);
          this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
          this.redrawPath(this.trackedRoute);
          console.log(this.trackedRoute);
        }, 0);
      });
  }
  redrawPath(path) {
    if (this.currentMapTrack) {
      this.map.clear();
    }

    if (path.length > 1) {
      console.log(path);
      this.currentMapTrack = this.map.addPolylineSync({
        points: path,
        color: '#AA00FF',
        width: 10,
        geodesic: true,
        strokeColor: '#ff00ff',
        strokeOpacity: 1.0,
        strokeWeight: 3
      });
      this.map.setCameraTarget(path[path.length-1]);
      this.map.setCameraZoom(20);

      console.log(this.currentMapTrack);
    }
  }
  stopTracking() {
    if (this.trackedRoute.length != 0) {

      let newRoute = {
        finished: new Date().getTime(),
        path: this.trackedRoute
      };
      this.storage.get('access_token').then(val=>{
        let token = JSON.parse(val);
        this.rutasProvider.setRutaUsuario(token,newRoute).subscribe(result=>{
          console.log(result);
        },error=>{
          console.log(error);
        })
      });

    }
    this.isTracking = false;
    this.positionSubscription.unsubscribe();
    this.map.clear();
    this.salir();

  }

  showHistoryRoute(route) {
    this.map.clear();
    this.redrawPath(route);
  }

}
