import { Producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductoProvider } from '../../providers/providers';
import { Storage } from "@ionic/storage";
import { ProductosFormPage } from '../productos-form/productos-form';
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

  public productos : Producto[];
  public messageError : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private productProvider:ProductoProvider,
    private storage: Storage,
    public alertCtrl: AlertController,

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
  openForm(){
    this.navCtrl.push(ProductosFormPage);
  }
  showProducto(producto:Producto){

  }
  eliminarProducto(prod_id){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

}