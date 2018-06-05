import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DomicilioFiscalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DomicilioFiscalProvider {

  public url: string;

  constructor(public http: Http) {
    console.log('Hello DomicilioFiscalProvider Provider');
    this.url = "http://byw.from-tn.com/motodream/api/fiscales";
  }

  getDomicilio(token) {
    console.log(token);
    let headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer " + token
    });
    console.log(headers);
    return this.http.get(this.url, { headers: headers }).map(res => res.json());
  }
  setDomicilio(token, form) {
    let params = form;
    let headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer " + token
    });
    console.log(headers);
    return this.http.post(this.url, params, { headers: headers }).map(res => res.json());
  }

  updateDomicilio(token, form, domfiscal_id) {
    let domicilio_id = domfiscal_id;
    let params = form;
    let headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer " + token
    });
    return this.http.post(this.url + '/' + domicilio_id, params, { headers: headers }).map(res => res.json());
  }
}
