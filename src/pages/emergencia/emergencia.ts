import { CallNumber } from '@ionic-native/call-number';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmergenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emergencia',
  templateUrl: 'emergencia.html',
})
export class EmergenciaPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private callNumber:CallNumber,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergenciaPage');
  }
  emergencia(){
    this.callNumber.callNumber("911", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
