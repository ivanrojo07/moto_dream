import { Http,Response,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the MotoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MotoProvider {

  public url: string;
  public url_marca:string;
  public url_modelo:string;

  constructor(public http: Http) {
    console.log('Hello MotoProvider Provider');
    this.url = 'http://byw.from-tn.com/motodream/api/motos';
    this.url_marca = 'http://byw.from-tn.com/motodream/api/marcas';
    this.url_modelo = 'http://byw.from-tn.com/motodream/api/modelos';
  }

  getMotos(token){
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer '+token
    });
    return this.http.get(this.url,{headers : headers}).map(res=>res.json());
  }

  setMoto(token,params){
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer '+token
    });
    return this.http.post(this.url,params,{headers:headers}).map(res=>res.json());
  }

  kmMoto(token,params,moto_id){
    let method = {
      '_method' : 'PUT'
    };
    params = params.concat(method);
    console.log(params);
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer '+token
    });
    return this.http.post(this.url+"/"+moto_id,params,{headers:headers}).map(res=>res.json());
  }
  deleteMoto(token,moto_id){
    let params = {
      '_method' : 'DELETE'
    };
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer '+token
    });
    return this.http.post(this.url+'/'+moto_id,params,{headers:headers}).map(res=>res.json());
  }

  getMarcas(){
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.get(this.url_marca,{headers:headers}).map(res=>res.json());
  }

  getModelos(marca_id){
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.get(this.url_marca+'/'+marca_id+'/modelos',{headers:headers}).map(res=>res.json());
  }

  getVersiones(modelo_id){
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.get(this.url_modelo+'/'+modelo_id+'/versiones',{headers:headers}).map(res=>res.json());
  }

}
