import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moto',
  templateUrl: 'moto.html',
})
export class MotoPage {

  public moto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.moto = this.navParams.get("moto");
    console.log(this.moto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MotoPage');
  }

}
