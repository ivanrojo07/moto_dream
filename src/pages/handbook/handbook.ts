import { OnInit } from '@angular/core';
import { HandbookProvider } from './../../providers/handbook/handbook';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, AlertController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


declare var cordova: any;

/**
 * Generated class for the HandbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-handbook',
  templateUrl: 'handbook.html',
  providers: [HandbookProvider],
})
export class HandbookPage implements OnInit {

  public handbooks : any[];
  public messageError: any;
  public storageDirectory: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private handbookProvider:HandbookProvider,
    public loadingController:LoadingController,
    private transfer: FileTransfer, 
    private file: File,
    public platform: Platform,
    public alertCtrl:AlertController,
  ) {
    this.handbooks=[];
    this.messageError=null;
    

    this.platform.ready().then(() => {
      // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
      if (!this.platform.is('cordova')) {
        return false;
      }

      if (this.platform.is('ios')) {
        this.storageDirectory = this.file.documentsDirectory;
      }
      else if (this.platform.is('android')) {
        this.storageDirectory = this.file.externalRootDirectory+'Download/';
        console.log(this.storageDirectory);
      }
      else {
        // exit otherwise, but you could add further types here e.g. Windows
        return false;
      }
    });
    
  }
  ngOnInit(){
    this.handbooks = [];
    this.messageError = null;
    this.showHandbooks();
  }
  ionViewDidLoad() {
  }
  ionViewWillEnter(){
   this.ngOnInit();
  }
  public showHandbooks(){
    const loader = this.loadingController.create({
      content: "Cargando.."
    });
    loader.present();
    this.handbookProvider.getHandbooks().subscribe(result=>{
      console.log(result);
      this.handbooks = result['handbooks'];
      loader.dismiss();
    },error=>{
      this.messageError = JSON.parse(error);
      console.log("Error " + JSON.stringify(this.messageError));
    });
  }
  public download(handbook:any){
    console.log(handbook);
    const loader = this.loadingController.create({
      content: "Descargando.."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'http://byw.from-tn.com/motodream/storage/handbook/' + handbook['path'];
    fileTransfer.download(url, this.storageDirectory+handbook['path']).then((entry) => {
      console.log('download complete: ' + entry.toURL());
      loader.dismiss();
      const alertSuccess = this.alertCtrl.create({
        title: `¡Descarga correcta!`,
        subTitle: `${handbook['path']} fue descargada correctamente en el directorio Download`,
        buttons: ['Ok']
      });

      alertSuccess.present();
    }, (error) => {
      // handle error
      console.log(error);
    });
  }
 
}
