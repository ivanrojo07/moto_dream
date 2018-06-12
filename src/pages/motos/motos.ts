import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MotoProvider } from '../../providers/providers';
import { Moto } from "../../models/moto";
/**
 * Generated class for the MotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-motos',
  templateUrl: 'motos.html',
  providers: [MotoProvider]
})
export class MotosPage {

  public motos: Moto[];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: MotoProvider,
  ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MotosPage');
  }

}
