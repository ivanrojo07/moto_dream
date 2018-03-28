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

  constructor(public _http: Http) {
    console.log('Hello UsuarioProvider Provider');
    this.url = 'http://localhost/dream_moto_backend/public/api/';
  }

  login(usuario: Usuario) {
    let json = JSON.stringify(usuario);
    let params = json;

    let headers = new Headers({ 'Accept': 'application/json'});


    return this._http.post(this.url + 'login', params, { headers: headers }).map(res => res.json());

  }

  addUsuario(usuario: Usuario) {
    let json = JSON.stringify(usuario);
    let params = json;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(params);
    return this._http.post(this.url + 'users', params, { headers: headers }).map(res => res.json());
  }

}
