import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciosProvider {
  
  public url : string;

  constructor(public http: HttpClient) {
    console.log('Hello ServiciosProvider Provider');
    this.url = "http://byw.from-tn.com/motodream/api/servicios";

  }


  getServicios(token){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(this.url,{headers:headers});
  }

  getServicio(servicio_id,token){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.url + `/${servicio_id}`, { headers: headers });
  }

  getMotoServicio(moto_id,token){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.url+`/moto/${moto_id}`, { headers: headers });
  }


}
