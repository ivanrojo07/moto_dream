import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContactoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactoProvider {

  public url:string;

  constructor(public http: HttpClient) {
    console.log('Hello ContactoProvider Provider');
    this.url = "http://byw.from-tn.com/motodream/api/contactos";
  }

  getContactos(token){
    let headers= new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Authorization': 'Bearer '+token
    });
    return this.http.get(this.url,{headers:headers});
  }

  setContacto(params,token){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.post(this.url,params,{headers:headers});
  }

  updateContacto(contacto_id,params,token){
    
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    });

    return this.http.post(this.url+'/'+contacto_id,params,{headers:headers});
  }
  deleteContacto(contacto_id,token){
    let params = {'_method':'DELETE'};
    let headers = new HttpHeaders({
      'Content.Type': 'application/json',
      'Accept':'application/json',
      'Authorization': 'Bearer '+token
    });

    return this.http.post(this.url+'/'+contacto_id,params,{headers:headers});
  }
}
