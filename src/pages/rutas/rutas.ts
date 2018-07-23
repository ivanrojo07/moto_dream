import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  LatLng
} from '@ionic-native/google-maps';

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
})
export class RutasPage {

  @ViewChild('map') mapElement: ElementRef;
  public map: any;
  public currentMapTrack;
  public isTracking;
  public trackedRoute;
  public previousTracks;
  public positionSubscription:Subscription;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private plt: Platform,
    private geolocation: Geolocation,
    private storage: Storage,
  ) {
    this.currentMapTrack=null;
    this.isTracking=false;
    this.trackedRoute=[];
    this.previousTracks=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutasPage');
    this.plt.ready().then(()=>{
      
      // this.loadHistoricRoutes();
      
      let mapOptions: GoogleMapOptions = {
        zoom:13,
        
        mapTypeControl:false,
        streetViewControl:false,
        fullscreenControl:false
      };
      
      this.map = GoogleMaps.create(this.mapElement.nativeElement, mapOptions);
      
      this.geolocation.getCurrentPosition().then( (pos) =>{
        console.log(pos);
        let latLng = new LatLng(pos.coords.latitude, pos.coords.longitude);
        console.log(latLng);
        this.map.setCameraTarget(latLng);
        this.map.addMarker({
          title: '@ionic-native/google-maps',
          icon: 'blue',
          animation: 'DROP',
          position: latLng
          
        }
);
        this.map.setCameraZoom(16);
      }).catch(error=>{
        console.log('error tomando la locación',error);
      })
    })
  }

}
