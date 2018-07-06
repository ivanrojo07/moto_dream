import { Producto } from './../../models/producto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the ProductoFotosFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto-fotos-form',
  templateUrl: 'producto-fotos-form.html',
})
export class ProductoFotosFormPage {

  public producto : Producto;
  aImages: any[];


  constructor(public navCtrl: NavController, 
    private camera: Camera, 
    public navParams: NavParams) 
  {
    this.producto = navParams.get('producto');
    console.log(this.producto);
    this.aImages = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoFotosFormPage');
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
        'image': picture
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
        'image': picture
      });
      console.log(this.aImages);

    }, (err) => {
      // Handle error
    });
  }
}
