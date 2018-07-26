import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RutaUsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RutaUsuarioProvider {

  public url:string;

  constructor(public http: HttpClient) {
    this.url = "http://byw.from-tn.com/motodream/api/routes";
    console.log('Hello RutaUsuarioProvider Provider');
  }

  getRutasUsuario(token){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    });
    return this.http.get(this.url,{headers:headers});
  }

  setRutaUsuario(token, ruta){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(this.url,ruta,{headers:headers});
    
  }
  deleteRutaUsuario(token,ruta_id){
    let params = {
      _method: 'DELETE'
    };
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Authorization': 'Bearer '+token
    });
    return this.http.post(this.url+'/'+ruta_id,params,{headers:headers});
  }

}
