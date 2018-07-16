import { NgForm } from '@angular/forms';
import { Producto } from './../../models/producto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { MyproductoProvider } from '../../providers/providers';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProductoFotosFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Images{
  
  imagen:string
}


@IonicPage()
@Component({
  selector: 'page-producto-fotos-form',
  templateUrl: 'producto-fotos-form.html',
  providers: [MyproductoProvider]
})
export class ProductoFotosFormPage {

  public producto : Producto;
  aImages: Images[];

  constructor(public navCtrl: NavController, 
    private camera: Camera, 
    public navParams: NavParams,
    private productoProvider: MyproductoProvider,
    private storage: Storage,
    public alertCtrl: AlertController,

  ) 
  {
    this.producto = navParams.get('producto');
    console.log(this.producto);
    this.aImages=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoFotosFormPage');
  }
  public deletePhoto(index){
    console.log(index);
    this.aImages.splice(index,1);
  }

  public takePhotoGallery(){
    console.log('foto');

    const options: CameraOptions = {
      sourceType: 2,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1024,
      targetHeight: 1024
    }

    this.camera.getPicture(options).then((imageData) => {

      let picture = 'data:image/jpg;base64,' + imageData;

      // Push to array
      this.aImages.push({
        'imagen':picture
      });
      console.log(this.aImages);

    }, (err) => {
      // Handle error
    });
  }
  public takePhotoCamera(){
    const options: CameraOptions = {
      sourceType: 1,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1024,
      targetHeight: 1024
    }

    this.camera.getPicture(options).then((imageData) => {

      let picture = 'data:image/jpg;base64,' + imageData;

      // Push to array
      this.aImages.push({
        'imagen':picture
      });
      console.log(this.aImages);

    }, (err) => {
      // Handle error
    });
  }
  /**
   * save
   */
  public save(imagenes) {
    this.storage.get('access_token').then((val) => {
      let token = JSON.parse(val);
      this.productoProvider.savePhotoProducto(token,this.producto.id,imagenes).subscribe(result=>{
        console.log(result);
        if (!result) {
          this.alert("Error", "Problemas con el servidor");
        }
        else {
         
            console.log(result['message']);
            this.alert('', result['message']);

            this.navCtrl.pop();
        }
      }, error => {
        let err = JSON.parse(error._body);
        
        console.log("Error: " + JSON.stringify(err));
      });
    });
    
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
