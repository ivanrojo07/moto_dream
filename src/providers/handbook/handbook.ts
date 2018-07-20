import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HandbookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HandbookProvider {
  public url: string;

  constructor(public http: HttpClient) {
    console.log('Hello HandbookProvider Provider');
    this.url ="http://byw.from-tn.com/motodream/api/handbooks";
  }

  getHandbooks(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept': 'application/json',
    });
    return this.http.get(this.url,{headers:headers});
  }

  downloadHandbook(path){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    return this.http.get(this.url+path,{headers:headers});
  }

}