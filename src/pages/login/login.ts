import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  public errorMessage: string;
  public usuario: Usuario;
  public pushPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.pushPage = "HomePage";
    this.usuario = new Usuario(null,'','','','','','','');

  }
  ngOnInit(){
    this.usuario = new Usuario(null,'','','','','','','');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public onSubmit(){
    
  }

  public alert(titulo:string, contenido:string ){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: contenido,
      buttons: ['OK']
    });
    alert.present();


  }

  goToRegistroPage(){
    this.navCtrl.push(RegisterPage);
  }
  

}
