import { ProductoProvider } from './../../providers/producto/producto';
import { OnInit } from '@angular/core';
import { Producto } from './../../models/producto';
import { ProductoFotosFormPage } from './../producto-fotos-form/producto-fotos-form';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";

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
  providers: [ProductoProvider]
})
export class ProductoFotosPage implements OnInit {

  public producto: Producto;
  public fotos: Array<Object>;
  public url: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private productProvider:ProductoProvider,
    private storage:Storage
  ) {
    this.producto = navParams.get('producto');
    // console.log(this.producto);
    this.url = "http://byw.from-tn.com/motodream/storage/";
  }
  
  ngOnInit(){
    this.fotos=[];
    this.showFotos(this.producto.id);
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoFotosPage');

  }

  openForm(){
    this.navCtrl.push(ProductoFotosFormPage,{'producto':this.producto});
  }
  showFotos(id){
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.productProvider.getFotos(id,token).subscribe(result=>{
        console.log(result)
        // result.
        this.fotos = result['fotos'];
        console.log(this.fotos);
      },error=>{
        console.log(error);
      });
    });
  }
  deletePhoto(imagen:any){
    console.log(imagen);
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.productProvider.deleteImage(this.producto.id,token,imagen.id).subscribe(result=>{
        console.log(result);
        this.ngOnInit();
      },error=>{
        console.log(error);

      });
    });
  }
}
