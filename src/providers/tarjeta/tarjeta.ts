import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the TarjetaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TarjetaProvider {
  
  public url: string;

  constructor(public http: Http) {
    console.log('Hello TarjetaProvider Provider');
    this.url = 'http://byw.from-tn.com/motodream/api/cards';
  }
  getTarjetas(token){
    let headers = new Headers({
      "Content-Type": 'application/json',
      'Accept': 'application/json',
      'Authorization' : 'Bearer '+token
    });
    console.log(headers);
    return this.http.get(this.url,{headers : headers}).map(res=>res.json());
  }

  setTarjeta(token, formulario){
    let params = formulario;
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer '+token
    });
    return this.http.post(this.url,params,{headers:headers}).map(res=>res.json());
  }
  
  deleteTarjeta(token,tarjeta_id){
    let params = {
      '_method':'DELETE'
    };
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer '+token
    });
    return this.http.post(this.url+'/'+tarjeta_id,params,{headers:headers}).map(res=>res.json());
  }
}
