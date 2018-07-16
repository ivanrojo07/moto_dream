import { ProductoFotosPage } from './../producto-fotos/producto-fotos';
import { Producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductoProvider } from '../../providers/providers';
import { Storage } from "@ionic/storage";
import { ProductosFormPage } from '../productos-form/productos-form';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
  providers: [ProductoProvider]
})
export class ProductosPage implements OnInit {

  public productos : any[];
  public messageError : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private productProvider:ProductoProvider,
    private storage: Storage,
    public alertCtrl: AlertController,
    private callNumber: CallNumber,

  ) {
    this.productos = [];
    this.messageError = null;
  }

  ngOnInit(){
    this.productos=[];
    this.messageError=null;
    this.showProductos();
  }
  ionViewWillEnter(){
   this.ngOnInit();
  }

  showProductos(){
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.productProvider.getProductos(token).subscribe(result=>{
        // console.log(result);
        this.productos = result['productos'];
        console.log(this.productos);
        this.messageError=null;
      },error=>{
        this.messageError = JSON.parse(error);
        console.log("Error "+JSON.stringify(this.messageError));
      });
    });
  }

  public showProducto(producto: Producto) {
    // console.log(producto);
    this.navCtrl.push(ProductoFotosPage, { 'producto': producto, 'delete': false });
  }
  

  llamar(numero){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
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