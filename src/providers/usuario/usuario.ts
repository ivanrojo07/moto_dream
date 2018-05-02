import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../../models/usuario';

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

  constructor(public _http: Http) {
    console.log('Hello UsuarioProvider Provider');
    // this.url = 'http://byw.from-tn.com/motodream/api/';
    // this.oauthUrl = 'http://byw.from-tn.com/motodream/oauth/token';
    this.url = 'http://localhost/dream_moto_backend/public/api/';
    this.oauthUrl = 'http://localhost/dream_moto_backend/public/oauth/token';
  }

  login(usuario: Usuario) {
    let json = JSON.stringify(usuario);
    let params = json;
    // console.log(params);
    let headers = new Headers({  
      "Content-Type": "application/json",
      // "Accept": "application/json"
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
        client_secret: "BoEb7ne6IBWTJiHSsg64KAd7NQs7AmFNKvx46NnP",
        // client_secret: "IA3760dRZm4LN6tY47H9anfKK5DHKfsQrVX4NDcX",
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
      "Cache-Control" : "no-cache",
      "Accept": "application/json",
      "Authorization" : 'Bearer '+JSON.parse(access_token)
    });
    // console.log(headers);
    return this._http.get(this.url+'user',{ headers: headers}).map(res => res.json());
  }

}
