import { Producto } from './../../models/producto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductoProvider } from '../../providers/providers';
import { Storage } from '@ionic/storage';
import { NgForm } from "@angular/forms";

/**
 * Generated class for the ProductosFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos-form',
  templateUrl: 'productos-form.html',
  providers: [ProductoProvider]
})
export class ProductosFormPage {

  public edit: boolean;
  public producto: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    private productoProvider: ProductoProvider,
    public alertCtrl: AlertController,
  ) {
    if (this.navParams.get('edit')) {
      this.edit = this.navParams.get('edit');
      this.producto = this.navParams.get('producto');
    } else {
      this.edit = false;
      this.producto = {
        nombre: '',
        descripcion: '',
        precio:'',
        cantidad:''
      };
    }
  }

  onSubmit(form: NgForm){
    if (!form.valid){
      this.alert('Formulario incompleto','Por favor llene los campos requeridos');
      if(this.edit){
        form.setValue({
          _method: "PUT",
          nombre: this.producto.nombre,
          descripcion: this.producto.descripcion,
          cantidad: this.producto.cantidad,
          precio: this.producto.precio
        });
      }
    }
    else{
      console.log(form.value);
      var params = form.value;
      this.storage.get('access_token').then((val)=>{
        let token = JSON.parse(val);
        if (this.edit == true) {
          // TODO
        } else {
          this.productoProvider.setProducto(token,params).subscribe(result=>{
            console.log(result);
            if(result['producto']){
              this.alert('Producto agregadp','Producto agregado correctamente');
              this.navCtrl.pop();
            }
          });
        }
      });
      
    }
  }

  regresar(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosFormPage');
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
