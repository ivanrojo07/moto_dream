import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Producto } from '../../models/producto';
import { MyproductoProvider } from '../../providers/providers';
import { ProductosFormPage } from '../productos-form/productos-form';
import { ProductoFotosPage } from '../producto-fotos/producto-fotos';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the MyproductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myproductos',
  templateUrl: 'myproductos.html',
  providers: [MyproductoProvider]
})
export class MyproductosPage implements OnInit {

  public productos: Producto[];
  public messageError: any;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private productProvider: MyproductoProvider,
    private storage: Storage,
    public alertCtrl: AlertController,
  ) {
    this.productos = [];
    this.messageError = null;
  }

  ngOnInit() {
    this.productos = [];
    this.messageError = null;
    this.showProductos();
  }
  ionViewWillEnter() {
    this.ngOnInit();
  }

  showProductos() {
    this.storage.get('access_token').then(val => {
      let token = JSON.parse(val);
      this.productProvider.getProductos(token).subscribe(result => {
        // console.log(result);
        this.productos = result['productos'];
        console.log(this.productos);
        this.messageError = null;
      }, error => {
        this.messageError = JSON.parse(error);
        console.log("Error " + JSON.stringify(this.messageError));
      });
    });
  }
  openForm() {
    this.navCtrl.push(ProductosFormPage);
  }
  showProducto(producto: Producto) {
    // console.log(producto);
    this.navCtrl.push(ProductoFotosPage, { 'producto': producto, 'delete':'true' });
  }
  eliminarProducto(prod_id) {
    console.log(prod_id);
    let alert = this.alertCtrl.create({
      title: 'Deseas eliminar este producto',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            console.log(data);
            this.storage.get('access_token').then(val => {
              let token = JSON.parse(val);
              this.productProvider.deleteProducto(token, prod_id).subscribe(result => {
                console.log(result);
                if (result['message']) {
                  this.alert('Hecho', result['message']);
                }
                this.ionViewWillEnter();
              }, error => {
                this.messageError = JSON.parse(error._body)
                console.log("Error " + JSON.stringify(this.messageError));
              });
            });
          }
        }
      ]
    });
    alert.present();

  }

  public alert(titulo: string, contenido: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: contenido,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyproductosPage');
  }

}
