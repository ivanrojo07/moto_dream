import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
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
import { filterQueryId } from '../../../node_modules/@angular/core/src/view/util';

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
      this.initMap();
      
    })
  }
  initMap(){
    this.loadHistoricRoutes();
      
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
        this.map.setCameraZoom(16);
        // this.map.addMarker({
        //   title: '@ionic-native/google-maps',
        //   icon: 'blue',
        //   animation: 'DROP',
        //   position: latLng
          
        // });
      }).catch(error=>{
        console.log('error tomando la locación',error);
      })
  }

  startTracking(){
    this.isTracking=true;
    this.trackedRoute=[];
    this.positionSubscription = this.geolocation.watchPosition()
      // .pipe(
      //   filter((p)=>{ p.coords == undefined})
      // )
      .subscribe(data=>{
        console.log(data);
        setTimeout(() => {
          this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
          this.redrawPath(this.trackedRoute);
          console.log(this.trackedRoute);
        }, 0);
      });
  }
  redrawPath(path){
    if (this.currentMapTrack) {
      // this.currentMapTrack.setMap(null);
    }

    if (path.length > 1) {
      this.currentMapTrack = this.map.addPolylineSync({
        points: path,
        color: '#AA00FF',
        width: 10,
        geodesic: true,
        strokeColor: '#ff00ff',
        strokeOpacity: 1.0,
        strokeWeight: 3
        // clickable: true  // clickable = false in default
      }) ;

      console.log(this.currentMapTrack);
      // new google.maps.Polyline({
      //   path: path,
      //   geodesic: true,
      //   strokeColor: '#ff00ff',
      //   strokeOpacity: 1.0,
      //   strokeWeight: 3
      // });
      // this.currentMapTrack.setMap(this.map);
    }
  }
  stopTracking(){
    let newRoute = { 
      finished: new Date().getTime(), 
      path: this.trackedRoute
    };
    this.previousTracks.push(newRoute);
    this.storage.set('routes', this.previousTracks);
    this.isTracking = false;
    this.positionSubscription.unsubscribe();
    this.map.clear();
    this.storage.get('routes').then(val=>{
      console.log(val);
    });

  }
  loadHistoricRoutes() {
    this.storage.get('routes').then(data => {
      if (data) {
        this.previousTracks = data;
      }
    });
  }
  showHistoryRoute(route) {
    this.map.clear();
    this.redrawPath(route);
  }
  ionViewCanEnter(){
   this.ionViewDidLoad();
  }

}
