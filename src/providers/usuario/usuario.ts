import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../../models/usuario';

import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';


/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  public url: string;
  public oauthUrl: string;

  public usuario: Usuario;
  public var_token: any;

  HAS_LOGGED_IN = 'hasLoggedIn';


  constructor(
    public _http: Http, 
    public storage: Storage,
    public events: Events,
  ) {
   
    console.log('Hello UsuarioProvider Provider');
    this.url = 'http://byw.from-tn.com/motodream/api/';
    this.oauthUrl = 'http://byw.from-tn.com/motodream/oauth/token';
    // this.url = 'http://localhost/dream_moto_backend/public/api/';
    // this.oauthUrl = 'http://localhost/dream_moto_backend/public/oauth/token';
  }

  login(usuario: Usuario) {
    let json = JSON.stringify(usuario);
    let params = json;
    // console.log(params);
    let headers = new Headers({  
      "Content-Type": "application/json",
      "Accept": "application/json"
     });


    return this._http.post(this.url + 'login', params, { headers: headers }).map(res => res.json());

  }
  getToken(usuario: Usuario, password: string){
    let json = JSON.stringify(usuario);
    let params = json;
    let user = JSON.parse(params);
    // console.log("Params: "+params);
    
    var headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });

    let postData = {
        grant_type: "password",
        client_id: 2,
        // client_secret: "BoEb7ne6IBWTJiHSsg64KAd7NQs7AmFNKvx46NnP",
        client_secret: "IA3760dRZm4LN6tY47H9anfKK5DHKfsQrVX4NDcX",
        username: user.usuario.email,
        password: password,
        scope: ""
    }
    // console.log("postdata: "+JSON.stringify(postData));

    return this._http.post(this.oauthUrl, JSON.stringify(postData), {
        headers: headers
    })
        .map((res: Response) => res.json());
  }

  loginData(token: string,refresh:string): void {
    this.storage.set("access_token",JSON.stringify(token));
    this.storage.set("refresh_token",JSON.stringify(refresh));
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.events.publish('user:login');
  }

  addUsuario(usuario: Usuario) {
    let json = JSON.stringify(usuario);
    let params = json;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(params);
    return this._http.post(this.url + 'users', params, { headers: headers }).map(res => res.json());
  }

  getUsuario(access_token:string){
    let headers = new Headers({
      "Content-Type": "application/json",
      // "Cache-Control" : "no-cache",
      "Accept": "application/json",
      "Authorization" : 'Bearer '+JSON.parse(access_token)
    });
    // console.log(headers);
    return this._http.get(this.url+'user',{ headers: headers}).map(res => res.json());
  }

  estaLogeado() : Promise <boolean>{
    return this.storage.get(this.HAS_LOGGED_IN).then((value)=>{
      return value === true;
    });
  }

  logout():void {
    this.storage.remove(this.HAS_LOGGED_IN);
    // this.storage.remove('username');
    this.storage.remove('access_token');
    this.storage.remove('refresh_token');
    this.events.publish('user:logout');
  }

  changePass(access_token: string,params: any) {
    let json = JSON.stringify(params);
    console.log(access_token);
    let headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer " + access_token,
    });
    console.log(headers);
    console.log(params);
    return this._http.post(this.url + "password", json, { headers: headers }).map(res => res.json());
  }

}
