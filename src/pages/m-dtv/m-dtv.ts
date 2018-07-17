import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

/**
 * Generated class for the MDtvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-m-dtv',
  templateUrl: 'm-dtv.html',
})
export class MDtvPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private youtube: YoutubeVideoPlayer
  ) {
    this.youtube.openVideo('hr0zy3_Ruj4');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MDtvPage');
  }

}
