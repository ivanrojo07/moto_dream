import { Producto } from './../../models/producto';
import { ProductoFotosFormPage } from './../producto-fotos-form/producto-fotos-form';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductoFotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto-fotos',
  templateUrl: 'producto-fotos.html',
})
export class ProductoFotosPage {

  public producto: Producto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.producto = navParams.get('producto');
    // console.log(this.producto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoFotosPage');

  }

  openForm(){
    this.navCtrl.push(ProductoFotosFormPage,{'producto':this.producto});
  }
}
