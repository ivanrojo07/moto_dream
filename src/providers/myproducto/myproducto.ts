import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyproductoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyproductoProvider {

  public url: string;
  public urlfoto: string;

  constructor(public http: HttpClient) {
    this.url = "http://byw.from-tn.com/motodream/api/usuarioProductos";
    // this.url ="http://localhost/dream_moto_backend/public/api/productos";
    this.urlfoto = "http://byw.from-tn.com/motodream/api/productos";

    console.log('Hello ProductoProvider Provider');
  }

  getProductos(token) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    console.log(headers);
    return this.http.get(this.url, { headers: headers });

  }

  setProducto(token, params) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(this.url, params, { headers: headers });
  }

  deleteProducto(token, prod_id) {
    let params = {
      _method: "DELETE"
    }

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(this.url + '/' + prod_id, params, { headers: headers });
  }

  savePhotoProducto(token, prod_id, images) {

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.post(this.urlfoto + '/' + prod_id + '/fotoproducto', images, { headers: headers });
  }

  getFotos(product_id, token) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(this.urlfoto + '/' + product_id + '/foto', { headers: headers });
  }

  deleteImage(producto_id, token, foto_id) {
    let params = {
      _method: 'DELETE'
    };
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(this.urlfoto + '/' + producto_id + '/fotoproducto/' + foto_id, params, { headers: headers });
  }

}

