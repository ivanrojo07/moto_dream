import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { RegisterPage } from '../register/register';
import { UsuarioProvider } from '../../providers/providers';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { UserPage } from '../user/user';


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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _usuarioService:UsuarioProvider, 
    public alertCtrl: AlertController, 
    private storage: Storage) {

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
          
          this.ngOnInit();
        }
        else{
          console.log("Hecho :"+JSON.stringify(result));
          this._usuarioService.getToken(result,this.usuario.password).subscribe(res=>{
            this.alert('Bienvenido', 'Sessión exitosa');
            
            console.log("TOKEN: "+JSON.stringify(res.access_token));
            this.storage.set("access_token",JSON.stringify(res.access_token));
            this.storage.set("refresh_token",JSON.stringify(res.refresh_token));
            
            this.navCtrl.setRoot(UserPage);
            this.storage.get("access_token").then((val) => {
              console.log('Your access_token is '+ val);
            });
          },err=>{
            console.log("Error: "+err);
            this.alert("Error", JSON.stringify(err.failed));
          });
          // console.log(result);
          
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
