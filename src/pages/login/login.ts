import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { RegisterPage } from '../register/register';
import { UsuarioProvider } from '../../providers/providers';
import { HomePage } from '../home/home';

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
  providers: [UsuarioProvider]
})
export class LoginPage implements OnInit {

  public errorMessage: string;
  public usuario: Usuario;
  public pushPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private _usuarioService:UsuarioProvider, public alertCtrl: AlertController) {

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
    console.log(this.usuario);
    this._usuarioService.login(this.usuario).subscribe(result=>{
      if(!result){
        this.alert('Error', 'Problemas con el servidor. Contacte con su administrador de red.');
      }
      else {
        if(result.failed){
          this.alert('Error', result.failed);
          console.log(result);
          this.ngOnInit();
        }
        else{
          this.alert('Bienvenido', 'Sessión exitosa');
          this._usuarioService.getToken(result).subscribe(res=>{

          },err=>{

          });
          console.log(result);
          this.navCtrl.push(HomePage);
        }
        // console.log(result.success);
      }
    },
    error=>{
      this.errorMessage = error;
      if (this.errorMessage !=null) {
        console.log(this.errorMessage);
        this.alert('Error', 'Problemas con el servidor');
      }

    });
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
