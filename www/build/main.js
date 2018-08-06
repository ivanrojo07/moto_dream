webpackJsonp([24],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ContactoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ContactoProvider = /** @class */ (function () {
    function ContactoProvider(http) {
        this.http = http;
        console.log('Hello ContactoProvider Provider');
        this.url = "http://byw.from-tn.com/motodream/api/contactos";
    }
    ContactoProvider.prototype.getContactos = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.get(this.url, { headers: headers });
    };
    ContactoProvider.prototype.setContacto = function (params, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.url, params, { headers: headers });
    };
    ContactoProvider.prototype.updateContacto = function (contacto_id, params, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.url + '/' + contacto_id, params, { headers: headers });
    };
    ContactoProvider.prototype.deleteContacto = function (contacto_id, token) {
        var params = { '_method': 'DELETE' };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content.Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.url + '/' + contacto_id, params, { headers: headers });
    };
    ContactoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ContactoProvider);
    return ContactoProvider;
}());

//# sourceMappingURL=contacto.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(id, username, name, appaterno, apmaterno, email, telefono, password) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.appaterno = appaterno;
        this.apmaterno = apmaterno;
        this.email = email;
        this.telefono = telefono;
        this.password = password;
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contacto_contacto__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ruta_usuario_ruta_usuario__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myproducto_myproducto__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__producto_producto__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_usuario__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tarjeta_tarjeta__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domicilio_envio_domicilio_envio__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__domicilio_fiscal_domicilio_fiscal__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__moto_moto__ = __webpack_require__(224);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__usuario_usuario__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__tarjeta_tarjeta__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__domicilio_envio_domicilio_envio__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__domicilio_fiscal_domicilio_fiscal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__moto_moto__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__producto_producto__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__myproducto_myproducto__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__ruta_usuario_ruta_usuario__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contacto_contacto__["a"]; });










//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandbookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_handbook_handbook__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HandbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HandbookPage = /** @class */ (function () {
    function HandbookPage(navCtrl, navParams, handbookProvider, loadingController, transfer, file, platform, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.handbookProvider = handbookProvider;
        this.loadingController = loadingController;
        this.transfer = transfer;
        this.file = file;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.storageDirectory = '';
        this.handbooks = [];
        this.messageError = null;
        this.platform.ready().then(function () {
            // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
            if (!_this.platform.is('cordova')) {
                return false;
            }
            if (_this.platform.is('ios')) {
                _this.storageDirectory = _this.file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = _this.file.externalRootDirectory + 'Download/';
                // console.log(this.storageDirectory);
            }
            else {
                // exit otherwise, but you could add further types here e.g. Windows
                return false;
            }
        });
    }
    HandbookPage.prototype.ngOnInit = function () {
        this.handbooks = [];
        this.messageError = null;
        this.showHandbooks();
    };
    HandbookPage.prototype.ionViewDidLoad = function () {
    };
    HandbookPage.prototype.ionViewWillEnter = function () {
        this.ngOnInit();
    };
    HandbookPage.prototype.showHandbooks = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Cargando.."
        });
        loader.present();
        this.handbookProvider.getHandbooks().subscribe(function (result) {
            console.log(result);
            _this.handbooks = result['handbooks'];
            loader.dismiss();
        }, function (error) {
            _this.messageError = JSON.parse(error);
            console.log("Error " + JSON.stringify(_this.messageError));
        });
    };
    HandbookPage.prototype.download = function (handbook) {
        var _this = this;
        console.log(handbook);
        var loader = this.loadingController.create({
            content: "Descargando.."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var url = 'http://byw.from-tn.com/motodream/storage/handbook/' + handbook['path'];
        fileTransfer.download(url, this.storageDirectory + handbook['path']).then(function (entry) {
            console.log('download complete: ' + entry.toURL());
            loader.dismiss();
            var alertSuccess = _this.alertCtrl.create({
                title: "\u00A1Descarga correcta!",
                subTitle: handbook['path'] + " fue descargada correctamente en el directorio Download",
                buttons: ['Ok']
            });
            alertSuccess.present();
        }, function (error) {
            // handle error
            loader.dismiss();
            var alertError = _this.alertCtrl.create({
                title: "\u00A1Error!",
                subTitle: "Error al descargar el manual, por favor intentelo m\u00E1s tarde",
                buttons: ['Ok']
            });
            console.log(error);
            alertError.present();
        });
    };
    HandbookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-handbook',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\handbook\handbook.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only class="menu">\n      <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n      <!-- <ion-icon></ion-icon> -->\n    </button>\n    <ion-title>Handbooks</ion-title>\n    <ion-buttons end>\n      <button ion-button clear end>\n        <ion-icon>\n          <img src="assets/imgs/dibujoarriba.png" alt="dream moto" width="25" height="25" />\n        </ion-icon>\n      </button>\n    </ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding scroll="false" class="backgroud">\n  <ion-card *ngFor="let handbook of handbooks" >\n    <ion-card-content>\n      <ion-card-header>\n        <ion-icon name="book"> {{handbook[\'nombre\']}}</ion-icon>\n      </ion-card-header>\n      <p>{{handbook[\'descripcion\']}}</p>\n      <ion-buttons end>\n        <a ion-button round icon-only end color="light" href="http://byw.from-tn.com/motodream/storage/handbook/{{handbook[\'path\']}}" target="_blank">\n          <ion-icon name="eye"></ion-icon>\n        </a>\n        <button ion-button round icon-only end color="light" (click)="download(handbook)">\n          <ion-icon name="download"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\handbook\handbook.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_handbook_handbook__["a" /* HandbookProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_handbook_handbook__["a" /* HandbookProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], HandbookPage);
    return HandbookPage;
}());

//# sourceMappingURL=handbook.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacto_form_contacto_form__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactosPage = /** @class */ (function () {
    function ContactosPage(navCtrl, navParams, contProv, storage, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contProv = contProv;
        this.storage = storage;
        this.platform = platform;
    }
    ContactosPage.prototype.ionViewDidLoad = function () {
        this.contactosUser();
    };
    ContactosPage.prototype.ionViewCanEnter = function () {
        this.contactosUser();
    };
    ContactosPage.prototype.contactosUser = function () {
        var _this = this;
        this.storage.get('access_token').then(function (val) {
            var token = JSON.parse(val);
            _this.contProv.getContactos(token).subscribe(function (result) {
                _this.contactos = result['contactos'];
                console.log(_this.contactos);
            }, function (error) {
                console.log(error);
            });
        });
    };
    ContactosPage.prototype.openForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__contacto_form_contacto_form__["a" /* ContactoFormPage */], { edit: false });
    };
    ContactosPage.prototype.delete = function (contacto_id) {
        var _this = this;
        this.storage.get('access_token').then(function (val) {
            var token = JSON.parse(val);
            _this.contProv.deleteContacto(contacto_id, token).subscribe(function (result) {
                if (result['contactos']) {
                    _this.ionViewCanEnter();
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    ContactosPage.prototype.editar = function (contacto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__contacto_form_contacto_form__["a" /* ContactoFormPage */], { contacto: contacto, edit: true });
    };
    ContactosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-contactos',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\contactos\contactos.html"*/'<!--\n  Generated template for the ContactosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Contactos</ion-title>\n    <ion-buttons end>\n      <button ion-button color="light" round icon-end icon-only end (click)="openForm()">\n        <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item *ngFor="let contacto of contactos">\n    <ion-label>{{contacto.nombre}} | {{contacto.numero}} | {{!!contacto.principal ? \'P\': \'\' }} {{!!contacto.averia ? \'A\': \'\' }} {{!!contacto.robo\n      ? \'RE\': \'\' }} {{!!contacto.accidente ? \'Ac\': \'\' }}</ion-label>\n      <button ion-button icon-only clear item-end (click)="editar(contacto)">\n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n      </button>\n      <button ion-button icon-only clear item-end (click)="delete(contacto.id)">\n        <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n      </button>\n  </ion-item>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title><p class="footer">P = Contacto Principal | A = Contacto por Avería | RE = Contacto por Robo o extravio | Ac = Contacto Accidente</p></ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\contactos\contactos.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_providers__["a" /* ContactoProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_providers__["a" /* ContactoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* Platform */]])
    ], ContactosPage);
    return ContactosPage;
}());

//# sourceMappingURL=contactos.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomenvioFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DomenvioFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DomenvioFormPage = /** @class */ (function () {
    function DomenvioFormPage(navCtrl, navParams, alertCtrl, domicilioService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.domicilioService = domicilioService;
        this.storage = storage;
        if (navParams.get('edit')) {
            this.edit = navParams.get("edit");
            this.domicilio = navParams.get("domicilio");
        }
        else {
            this.edit = false;
            this.domicilio = {
                pais: "",
                estado: "",
                municipio: "",
                ciudad: "",
                colonia: "",
                calle: "",
                numext: "",
                numint: "",
                entre1: "",
                entre2: "",
                referencia: "",
            };
        }
        console.log(this.edit);
    }
    DomenvioFormPage.prototype.onSubmit = function (formDirenvio) {
        var _this = this;
        if (!formDirenvio.valid) {
            this.alert("Formulario incompleto", "Por favor llene los campos requeridos");
            if (this.edit) {
                formDirenvio.setValue({
                    _method: "PUT",
                    pais: this.domicilio.pais,
                    estado: this.domicilio.estado,
                    municipio: this.domicilio.municipio,
                    ciudad: this.domicilio.ciudad,
                    colonia: this.domicilio.colonia,
                    calle: this.domicilio.calle,
                    numext: this.domicilio.numext,
                    numint: this.domicilio.numint,
                });
            }
        }
        else {
            console.log(formDirenvio.value);
            var params = formDirenvio.value;
            this.storage.get("access_token").then(function (val) {
                var token = JSON.parse(val);
                if (_this.edit == true) {
                    _this.domicilioService.updateDomicilio(token, params, _this.domicilio.id).subscribe(function (result) {
                        if (!result) {
                            _this.alert("Error", "Problemas con el servidor");
                        }
                        else {
                            if (result.failed) {
                                _this.alert("Error result", result.failed);
                            }
                            else {
                                console.log(result.message);
                                _this.alert("Creada", "Domicilio agregado con éxito");
                                _this.navCtrl.pop();
                            }
                        }
                    }, function (error) {
                        var err = JSON.parse(error._body);
                        // let errorMessage = JSON.parse(err._body);
                        formDirenvio.setValue({
                            pais: _this.domicilio.pais,
                            estado: _this.domicilio.estado,
                            municipio: _this.domicilio.municipio,
                            ciudad: _this.domicilio.ciudad,
                            colonia: _this.domicilio.colonia,
                            calle: _this.domicilio.calle,
                            numext: _this.domicilio.numext,
                            numint: _this.domicilio.numint,
                            entre1: _this.domicilio.entre1,
                            entre2: _this.domicilio.entre2,
                            referencia: _this.domicilio.referencia,
                        });
                        console.log("Error: " + JSON.stringify(err));
                        console.log("ErrorMessage: " + JSON.stringify(err.error));
                    });
                }
                else {
                    _this.domicilioService.setDomicilio(token, params).subscribe(function (result) {
                        if (!result) {
                            _this.alert("Error", "Problemas con el servidor");
                        }
                        else {
                            if (result.failed) {
                                _this.alert("Error result", result.failed);
                            }
                            else {
                                console.log(result.message);
                                _this.alert("Creada", "Domicilio agregado con éxito");
                                _this.navCtrl.pop();
                            }
                        }
                    }, function (error) {
                        var err = JSON.parse(error._body);
                        // let errorMessage = JSON.parse(err._body);
                        formDirenvio.setValue({
                            pais: "",
                            estado: "",
                            municipio: "",
                            ciudad: "",
                            colonia: "",
                            calle: "",
                            numext: "",
                            numint: "",
                            entre1: "",
                            entre2: "",
                            referencia: "",
                        });
                        console.log("Error: " + JSON.stringify(err));
                        console.log("ErrorMessage: " + JSON.stringify(err.error));
                    });
                }
            });
        }
    };
    DomenvioFormPage.prototype.regresar = function () {
        this.navCtrl.pop();
    };
    DomenvioFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DomenvioFormPage');
    };
    DomenvioFormPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    DomenvioFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-domenvio-form',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\domenvio-form\domenvio-form.html"*/'<!--\n  Generated template for the DomenvioFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agrega tu domicilio\n      <br> de envio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <form action="ngSubmit" #formDirenvio="ngForm" (ngSubmit)="onSubmit(formDirenvio)">\n      <ion-input *ngIf="edit == true" type="hidden" name="_method" ngModel="PUT" #_method="ngModel" required></ion-input>\n      <ion-item>\n        <ion-input type="text" name="pais" ngModel="{{ domicilio.pais }}" #pais="ngModel" placeholder="Pais" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="estado" ngModel="{{ domicilio.estado }}" #estado="ngModel" placeholder="Estado" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="ciudad" ngModel="{{ domicilio.ciudad }}" #ciudad="ngModel" placeholder="Ciudad" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="municipio" ngModel="{{ domicilio.municipio }}" #municipio="ngModel" placeholder="Delegación o municipío"\n          required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="calle" ngModel="{{ domicilio.calle }}" #calle="ngModel" placeholder="Calle" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="numext" ngModel="{{ domicilio.numext }}" #numext="ngModel" placeholder="Número exterior" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="numint" ngModel="{{ domicilio.numint }}" #numint="ngModel" placeholder="Número interior"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="colonia" ngModel="{{ domicilio.colonia }}" #colonia="ngModel" placeholder="Colonia o población"\n          required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="entre1" ngModel="{{ domicilio.entre1 }}" #entre1="ngModel" placeholder="Entre calle"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="entre2" ngModel="{{ domicilio.entre2 }}" #entre2="ngModel" placeholder="Y calle"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-textarea type="text" name="referencia" ngModel="{{ domicilio.referencia }}" #referencia="ngModel" placeholder="Referencia adicional"></ion-textarea>\n      </ion-item>\n\n      <button ion-button color="primary" type="submit" block>Guardar domicilio</button>\n\n    </form>\n\n    <button ion-button color="light" (click)="regresar()" block>Cancelar</button>\n\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\domenvio-form\domenvio-form.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* DomicilioEnvioProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* DomicilioEnvioProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], DomenvioFormPage);
    return DomenvioFormPage;
}());

//# sourceMappingURL=domenvio-form.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomfiscalFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DomfiscalFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DomfiscalFormPage = /** @class */ (function () {
    function DomfiscalFormPage(navCtrl, navParams, alertCtrl, domicilioService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.domicilioService = domicilioService;
        this.storage = storage;
        // console.log(this.formDomicilio.valid);
        if (navParams.get('edit')) {
            this.edit = navParams.get("edit");
            this.domicilio = navParams.get("domicilio");
        }
        else {
            this.edit = false;
            this.domicilio = {
                pais: "",
                estado: "",
                municipio: "",
                ciudad: "",
                colonia: "",
                calle: "",
                numext: "",
                numint: "",
            };
        }
        console.log(this.edit);
    }
    DomfiscalFormPage.prototype.onSubmit = function (formDomicilio) {
        var _this = this;
        if (!formDomicilio.valid) {
            this.alert("Formulario incompleto", "Por favor llene los campos requeridos");
            if (this.edit) {
                formDomicilio.setValue({
                    _method: "PUT",
                    pais: this.domicilio.pais,
                    estado: this.domicilio.estado,
                    municipio: this.domicilio.municipio,
                    ciudad: this.domicilio.ciudad,
                    colonia: this.domicilio.colonia,
                    calle: this.domicilio.calle,
                    numext: this.domicilio.numext,
                    numint: this.domicilio.numint,
                });
            }
        }
        else {
            console.log(formDomicilio.value);
            var params = formDomicilio.value;
            console.log(formDomicilio.value);
            this.storage.get("access_token").then(function (val) {
                var token = JSON.parse(val);
                if (_this.edit == true) {
                    _this.domicilioService.updateDomicilio(token, params, _this.domicilio.id).subscribe(function (result) {
                        if (!result) {
                            _this.alert("Error", "Problemas con el servidor");
                        }
                        else {
                            if (result.failed) {
                                _this.alert("Error result", result.failed);
                            }
                            else {
                                console.log(result.message);
                                _this.alert("Creada", "Domicilio agregado con éxito");
                                _this.navCtrl.pop();
                            }
                        }
                    }, function (error) {
                        var err = JSON.parse(error._body);
                        // let errorMessage = JSON.parse(err._body);
                        formDomicilio.setValue({
                            pais: _this.domicilio.pais,
                            estado: _this.domicilio.estado,
                            municipio: _this.domicilio.municipio,
                            ciudad: _this.domicilio.ciudad,
                            colonia: _this.domicilio.colonia,
                            calle: _this.domicilio.calle,
                            numext: _this.domicilio.numext,
                            numint: _this.domicilio.numint,
                        });
                        console.log("Error: " + JSON.stringify(err));
                        console.log("ErrorMessage: " + JSON.stringify(err.error));
                    });
                }
                else {
                    _this.domicilioService.setDomicilio(token, params).subscribe(function (result) {
                        if (!result) {
                            _this.alert("Error", "Problemas con el servidor");
                        }
                        else {
                            if (result.failed) {
                                _this.alert("Error result", result.failed);
                            }
                            else {
                                console.log(result.message);
                                _this.alert("Creada", "Domicilio agregado con éxito");
                                _this.navCtrl.pop();
                            }
                        }
                    }, function (error) {
                        var err = JSON.parse(error._body);
                        // let errorMessage = JSON.parse(err._body);
                        formDomicilio.setValue({
                            pais: "",
                            estado: "",
                            municipio: "",
                            ciudad: "",
                            colonia: "",
                            calle: "",
                            numext: "",
                            numint: "",
                        });
                        console.log("Error: " + JSON.stringify(err));
                        console.log("ErrorMessage: " + JSON.stringify(err.error));
                    });
                }
            });
        }
    };
    DomfiscalFormPage.prototype.regresar = function () {
        this.navCtrl.pop();
    };
    DomfiscalFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DomfiscalFormPage');
    };
    DomfiscalFormPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    DomfiscalFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-domfiscal-form',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\domfiscal-form\domfiscal-form.html"*/'<!--\n  Generated template for the DomfiscalFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agregar tu domicilio fiscal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <form action="ngSubmit" #formDirfiscal="ngForm" (ngSubmit)="onSubmit(formDirfiscal)">\n\n      <ion-input *ngIf="edit == true" type="hidden" name="_method" ngModel="PUT" #_method="ngModel" required></ion-input>\n      <ion-item>\n        <ion-input type="text" name="pais" ngModel="{{ domicilio.pais }}" #pais="ngModel" placeholder="Pais" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="estado" ngModel="{{ domicilio.estado }}" #estado="ngModel" placeholder="Estado" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="ciudad" ngModel="{{ domicilio.ciudad }}" #ciudad="ngModel" placeholder="Ciudad" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="municipio" ngModel="{{ domicilio.municipio }}" #municipio="ngModel" placeholder="Delegación o municipío"\n          required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="calle" ngModel="{{ domicilio.calle }}" #calle="ngModel" placeholder="Calle" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="numext" ngModel="{{ domicilio.numext }}" #numext="ngModel" placeholder="Número exterior" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="numint" ngModel="{{ domicilio.numint }}" #numint="ngModel" placeholder="Número interior"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="colonia" ngModel="{{ domicilio.colonia }}" #colonia="ngModel" placeholder="Colonia o población"\n          required></ion-input>\n      </ion-item>\n      <!-- <ion-item>\n          <ion-input type="number" name="cp" ngModel #cp="ngModel" value="{{ domicilio. }}" placeholder="Codigo Postal" required></ion-input>\n        </ion-item> -->\n\n      <button ion-button color="primary" type="submit" block>Guardar tarjeta</button>\n    </form>\n    <button ion-button color="light" (click)="regresar()" block>Cancelar</button>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\domfiscal-form\domfiscal-form.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* DomicilioFiscalProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* DomicilioFiscalProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], DomfiscalFormPage);
    return DomfiscalFormPage;
}());

//# sourceMappingURL=domfiscal-form.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomicilioEnvioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domenvio_form_domenvio_form__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DomicilioEnvioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DomicilioEnvioPage = /** @class */ (function () {
    function DomicilioEnvioPage(navCtrl, navParams, storage, alertCtrl, direccionProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.direccionProvider = direccionProvider;
        this.loadingCtrl = loadingCtrl;
        this.domicilios = [];
        this.messageError = null;
        // console.log(this.domicilios.length); 
    }
    DomicilioEnvioPage.prototype.ngOnInit = function () {
        this.domicilios = [];
        this.messageError = null;
        this.showDirecciones();
    };
    DomicilioEnvioPage.prototype.ionViewWillEnter = function () {
        console.log("hola tarjeta");
        this.ngOnInit();
    };
    DomicilioEnvioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DomicilioEnvioPage');
    };
    DomicilioEnvioPage.prototype.showDirecciones = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loader.present();
        this.storage.get("access_token").then(function (val) {
            var token = JSON.parse(val);
            _this.direccionProvider.getDomicilios(token).subscribe(function (result) {
                console.log(result);
                _this.domicilios = result.domicilio;
                console.log(_this.domicilios);
                loader.dismiss();
                _this.messageError = null;
            }, function (error) {
                _this.messageError = JSON.parse(error._body);
                console.log("Error " + JSON.stringify(_this.messageError));
                loader.dismiss();
            });
        });
    };
    DomicilioEnvioPage.prototype.showDireccion = function (id) {
        var _this = this;
        this.storage.get("access_token").then(function (val) {
            var token = JSON.parse(val);
            _this.direccionProvider.getDomicilio(token, id).subscribe(function (result) {
                console.log(result);
                _this.alertPresentacion(result.domicilio);
            }, function (error) {
                console.log(JSON.stringify(error));
            });
        });
    };
    DomicilioEnvioPage.prototype.openForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__domenvio_form_domenvio_form__["a" /* DomenvioFormPage */]);
    };
    DomicilioEnvioPage.prototype.editDireccion = function (direccion) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__domenvio_form_domenvio_form__["a" /* DomenvioFormPage */], {
            edit: true,
            domicilio: direccion
        });
    };
    DomicilioEnvioPage.prototype.eliminarDireccion = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Deseas eliminar esta direccion',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function (data) {
                        console.log(data);
                        _this.storage.get("access_token").then(function (val) {
                            var token = JSON.parse(val);
                            console.log(token);
                            _this.direccionProvider.deleteDomicilio(token, id).subscribe(function (result) {
                                console.log(result);
                                // this.tarjetas = result.tarjetas;
                                // console.log(this.tarjetas);
                                _this.ionViewWillEnter();
                            }, function (error) {
                                _this.messageError = JSON.parse(error._body);
                                console.log("Error " + JSON.stringify(_this.messageError));
                            });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DomicilioEnvioPage.prototype.alertPresentacion = function (direccion) {
        var alert = this.alertCtrl.create({
            title: 'Domicilio',
            message: "<ion-card *ngFor=\"let direccion of domicilios; let i = index\">\n    <ion-card-content>\n      <p>\n        <strong>Pais: " + direccion.pais + "</strong>  \n      </p>\n      <p>\n        <strong>Estado: " + direccion.estado + "</strong> \n      </p>\n      <p>\n        <strong>Ciudad: " + direccion.ciudad + "</strong> \n      </p>\n      <p>\n        <strong>Municipio: " + direccion.municipio + "</strong> \n      </p>\n      <p>\n        <strong>Calle: " + direccion.calle + "</strong> \n      </p>\n      <p>\n        <strong>N\u00FAmero exterior: " + direccion.numext + "</strong> \n      </p>\n      <p>\n        <strong>N\u00FAmero interior: " + direccion.numint + "</strong> \n      </p>\n      <p>\n        <strong>Colonia: " + direccion.colonia + "</strong>  \n      </p>\n      <p>\n        <strong>Entre : " + direccion.entre1 + "</strong> \n      </p>\n      <p>\n        <strong>Y : " + direccion.entre2 + "</strong> \n      </p>\n      <p>\n        <strong>Referencia: " + direccion.referencia + "</strong> \n      </p>\n      \n    </ion-card-content>\n\n  </ion-card>",
            buttons: ['OK']
        });
        alert.present();
    };
    DomicilioEnvioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-domicilio-envio',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\domicilio-envio\domicilio-envio.html"*/'<!--\n  Generated template for the DomicilioEnvioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Domicilios de envio</ion-title>\n    <ion-buttons end>\n      <button ion-button color="light" round icon-end icon-only end (click)="openForm()">\n        <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="domicilios.length == 0">\n    <ion-card-content>\n      <ion-card-title>\n        Dirección envio\n      </ion-card-title>\n      <p>\n        Aun no tienes direcciones agregadas\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngFor="let direccion of domicilios; let i = index">\n    <ion-card-content>\n      <ion-card-title>\n        Dirección de envios {{i+1}}\n      </ion-card-title>\n      <p>\n        <strong>Pais: </strong> {{direccion.pais}}\n      </p>\n      <p>\n        <strong>Estado: </strong> {{direccion.estado}}\n      </p>\n      <p>\n        <strong>Municipio: </strong> {{direccion.municipio}}\n      </p>\n      <p>\n        <strong>Colonia: </strong> {{direccion.colonia}}\n      </p>\n      <ion-buttons end>\n        <button ion-button color="light" round icon-only end (click)="showDireccion(direccion.id)">\n          <!-- Advanced: explicity set the icon for each platform -->\n          <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n        </button>\n        <button ion-button color="light" round icon-only end (click)="editDireccion(direccion)">\n          <!-- Advanced: explicity set the icon for each platform -->\n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n        </button>\n        <button ion-button color="light" round icon-only end (click)="eliminarDireccion(direccion.id)">\n          <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\domicilio-envio\domicilio-envio.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* DomicilioEnvioProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* DomicilioEnvioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], DomicilioEnvioPage);
    return DomicilioEnvioPage;
}());

//# sourceMappingURL=domicilio-envio.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmergenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contactos_contactos__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacto_form_contacto_form__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_contacto_contacto__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sms__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the EmergenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmergenciaPage = /** @class */ (function () {
    function EmergenciaPage(navCtrl, navParams, callNumber, contactoProv, storage, alertCtrl, modalCtrl, sms, socialSharing, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.contactoProv = contactoProv;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.sms = sms;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        // this.contRobo = [];
        this.sms.hasPermission().then(function (val) { console.log('permiso', val); });
    }
    EmergenciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmergenciaPage');
        this.contactosUser();
    };
    EmergenciaPage.prototype.ionViewCanEnter = function () {
        this.ionViewDidLoad();
    };
    EmergenciaPage.prototype.robo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Enviando SMS' });
        loading.present();
        this.contactos.forEach(function (contacto) {
            if (contacto['principal']) {
                _this.sms.send(contacto['numero'], 'Hola ' + contacto['nombre'] + ', me robaron o extravie mi motocicleta. Por favor contactame');
                _this.socialSharing.shareViaWhatsAppToReceiver('+52' + contacto['numero'], 'Hola ' + contacto['nombre'] + ', me robaron o extravie mi motocicleta.Por favor contactame');
                // this.socialSharing.shareViaSMS("Hola " + contacto["nombre"] + ", me robaron o extravie mi motocicleta.Por favor contactame", contacto['numero']);
            }
            if (contacto['robo']) {
                _this.sms.send(contacto['numero'], 'Hola ' + contacto['nombre'] + ', me robaron o extravie mi motocicleta. Por favor contactame.');
                _this.socialSharing.shareViaWhatsAppToReceiver('+52' + contacto['numero'], 'Hola ' + contacto['nombre'] + ', me robaron o extravie mi motocicleta.Por favor contactame');
            }
        });
        loading.dismiss();
    };
    EmergenciaPage.prototype.averia = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Enviando SMS' });
        loading.present();
        this.contactos.forEach(function (contacto) {
            if (contacto['principal']) {
                _this.sms.send(contacto['numero'], 'Hola ' + contacto['nombre'] + ', se averio mi motocicleta, por favor contactame.');
                _this.socialSharing.shareViaWhatsAppToReceiver('+52' + contacto['numero'], 'Hola ' + contacto['nombre'] + ', se averio mi motocicleta, por favor contactame.');
            }
            if (contacto['averia']) {
                _this.sms.send(contacto['numero'], 'Hola ' + contacto['nombre'] + ', se averio mi motocicleta, por favor contactame.');
                _this.socialSharing.shareViaWhatsAppToReceiver("+52" + contacto["numero"], "Hola " + contacto["nombre"] + ", se averio mi motocicleta, por favor contactame.");
            }
        });
        loading.dismiss();
    };
    EmergenciaPage.prototype.accidente = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Enviando SMS' });
        loading.present();
        this.contactos.forEach(function (contacto) {
            if (contacto['principal']) {
                _this.sms.send(contacto['numero'], 'Hola ' + contacto['nombre'] + ', sufri un accidente en mi motocicleta, por favor contactame.');
                _this.socialSharing.shareViaWhatsAppToReceiver("+52" + contacto["numero"], "Hola " + contacto["nombre"] + ", sufri un accidente en mi motocicleta, por favor contactame.");
            }
            if (contacto['accidente']) {
                _this.sms.send(contacto['numero'], 'Hola ' + contacto['nombre'] + ', sufri un accidente en mi motocicleta, por favor contactame.');
                _this.socialSharing.shareViaWhatsAppToReceiver("+52" + contacto["numero"], "Hola " + contacto["nombre"] + ", sufri un accidente en mi motocicleta, por favor contactame.");
            }
        });
        loading.dismiss();
    };
    EmergenciaPage.prototype.openPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__contactos_contactos__["a" /* ContactosPage */]);
    };
    EmergenciaPage.prototype.contactosUser = function () {
        var _this = this;
        this.storage.get('access_token').then(function (val) {
            var token = JSON.parse(val);
            _this.contactoProv.getContactos(token).subscribe(function (res) {
                _this.contactos = res['contactos'];
                console.log(_this.contactos);
                if (_this.contactos.length == 0) {
                    _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__contacto_form_contacto_form__["a" /* ContactoFormPage */], { edit: false, firstcontact: true }).present();
                    _this.alertCtrl.create({
                        title: 'Agrega tu contacto de emergencia',
                        subTitle: 'Este contacto será alertado cuando estes en peligro o en caso de avería.',
                        buttons: ['De acuerdo']
                    }).present();
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    EmergenciaPage.prototype.emergencia = function () {
        this.callNumber.callNumber("911", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    EmergenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-emergencia',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\emergencia\emergencia.html"*/'<!--\n  Generated template for the EmergenciaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-navbar>\n  <button ion-button menuToggle icon-only class="menu">\n    <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n    <!-- <ion-icon></ion-icon> -->\n  </button>\n  <ion-title>Emergencias</ion-title>\n  <ion-buttons end>\n    <button ion-button clear end>\n      <ion-icon>\n        <img src="assets/imgs/dibujoarriba.png" alt="dream moto" width="25" height="25" />\n      </ion-icon>\n    </button>\n  </ion-buttons>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button round color="danger" full (click)="emergencia()">Llamar a emergencias</button>\n  <button ion-button round color="danger" full (click)="robo()">Robo o extravio</button>\n  <button ion-button round color="danger" full (click)="averia()">Averia</button>\n  <button ion-button round color="danger" full (click)="accidente()">Accidente</button>\n  <button ion-button round color="danger" full (click)="openPage()">Mis contactos de emergencia</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\emergencia\emergencia.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_contacto_contacto__["a" /* ContactoProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["s" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["s" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["t" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["t" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_contacto_contacto__["a" /* ContactoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_contacto_contacto__["a" /* ContactoProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* ModalController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_sms__["a" /* SMS */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_sms__["a" /* SMS */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* LoadingController */]) === "function" && _k || Object])
    ], EmergenciaPage);
    return EmergenciaPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=emergencia.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomicilioFiscalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_domicilio_fiscal__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domfiscal_form_domfiscal_form__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DomicilioFiscalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DomicilioFiscalPage = /** @class */ (function () {
    function DomicilioFiscalPage(navCtrl, navParams, storage, domicilioProvider, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.domicilioProvider = domicilioProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dirFiscal = new __WEBPACK_IMPORTED_MODULE_2__models_domicilio_fiscal__["a" /* DomFiscal */](null, "", "", "", "", "", "", "", "");
        this.messageError = null;
    }
    DomicilioFiscalPage.prototype.ngOnInit = function () {
        this.showDireccion();
    };
    DomicilioFiscalPage.prototype.ionViewWillEnter = function () {
        console.log("hola domicilio fiscal");
        this.ngOnInit();
    };
    DomicilioFiscalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DomicilioFiscalPage');
    };
    DomicilioFiscalPage.prototype.showDireccion = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loader.present();
        this.storage.get("access_token").then(function (val) {
            var token = JSON.parse(val);
            _this.domicilioProvider.getDomicilio(token).subscribe(function (result) {
                console.log(result.domicilio);
                _this.dirFiscal = result.domicilio;
                loader.dismiss();
                _this.messageError == null;
                console.log(_this.dirFiscal);
            }, function (error) {
                _this.messageError = JSON.parse(error._body);
                loader.dismiss();
                console.log("Error " + JSON.stringify(_this.messageError));
            });
        });
    };
    DomicilioFiscalPage.prototype.openForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__domfiscal_form_domfiscal_form__["a" /* DomfiscalFormPage */]);
    };
    DomicilioFiscalPage.prototype.openFormEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__domfiscal_form_domfiscal_form__["a" /* DomfiscalFormPage */], {
            edit: true,
            domicilio: this.dirFiscal,
        });
    };
    DomicilioFiscalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-domicilio-fiscal',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\domicilio-fiscal\domicilio-fiscal.html"*/'<!--\n  Generated template for the DomicilioFiscalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Dirección Fiscal</ion-title>\n    <ion-buttons end>\n      <button ion-button color="light" round icon-end icon-only end *ngIf="messageError" (click)="openForm()">\n        <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngIf="messageError != null && dirFiscal.id == null">\n    <ion-card-content>\n      <ion-card-title>\n        Dirección Fiscal\n      </ion-card-title>\n      <p>\n        {{ messageError.message }}\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="dirFiscal.id !=null">\n    <ion-card-content>\n      <ion-card-title>\n        Dirección Fiscal\n      </ion-card-title>\n      <p>\n        <strong>Pais: </strong> {{dirFiscal.pais}}\n      </p>\n      <p>\n        <strong>Estado: </strong> {{dirFiscal.estado}}\n      </p>\n      <p>\n        <strong>Ciudad: </strong> {{dirFiscal.ciudad}}\n      </p>\n      <p>\n        <strong>Delegación o Municipio: </strong> {{dirFiscal.municipio}}\n      </p>\n      <p>\n        <strong>Colonia o población: </strong> {{dirFiscal.colonia}}\n      </p>\n      <p>\n        <strong>Calle: </strong> {{dirFiscal.calle}}\n      </p>\n      <p>\n        <strong>Número exterior: </strong> {{dirFiscal.numext}}\n      </p>\n      <p>\n        <strong>Número interio: </strong> {{dirFiscal.numint}}\n      </p>\n      <ion-buttons end>\n        <button ion-button color="light" round icon-only end *ngIf="!messageError" (click)="openFormEdit()">\n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\domicilio-fiscal\domicilio-fiscal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* DomicilioFiscalProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* DomicilioFiscalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], DomicilioFiscalPage);
    return DomicilioFiscalPage;
}());

//# sourceMappingURL=domicilio-fiscal.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDtvPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_youtube_video_player__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MDtvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MDtvPage = /** @class */ (function () {
    function MDtvPage(navCtrl, navParams, youtube) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.youtube = youtube;
        this.youtube.openVideo('hr0zy3_Ruj4');
    }
    MDtvPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MDtvPage');
    };
    MDtvPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-m-dtv',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\m-dtv\m-dtv.html"*/'<!--\n  Generated template for the MDtvPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle icon-only class="menu">\n      <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n      <!-- <ion-icon></ion-icon> -->\n    </button>\n    <ion-title>MDtv</ion-title>\n    <ion-buttons end>\n      <button ion-button clear end>\n        <ion-icon>\n          <img src="assets/imgs/dibujoarriba.png" alt="dream moto" width="25" height="25" />\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Acerca de MDtv\n    </ion-card-header>\n    <ion-card-content>\n      MDtv es un proyecto con el cual conoceras todo lo necesario sobre motocicletas.\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\m-dtv\m-dtv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */]])
    ], MDtvPage);
    return MDtvPage;
}());

//# sourceMappingURL=m-dtv.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MotoPage = /** @class */ (function () {
    function MotoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(this.moto);
        this.moto = this.navParams.get("moto");
        console.log(this.moto);
    }
    MotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MotoPage');
    };
    MotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-moto',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\moto\moto.html"*/'<!--\n\n  Generated template for the MotoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>MotoPage</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      {{ moto.marca }}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p *ngIf="moto.modelo"><strong>Modelo: {{moto.modelo}} </strong></p>\n\n      <p *ngIf="moto.version"><strong>Versión: {{moto.version}}</strong></p>\n\n      <p *ngIf="moto.serie"><strong>Número de serie: {{moto.serie}}</strong></p>\n\n      <p *ngIf="moto.km"><strong>Kilometros: {{moto.km}}</strong></p>\n\n      <p *ngIf="moto.anio"><strong>Año: {{moto.anio}}</strong></p>\n\n      <button ion-button color="primary" block>Subir Foto(s)</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\moto\moto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], MotoPage);
    return MotoPage;
}());

//# sourceMappingURL=moto.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotoFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MotoFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MotoFormPage = /** @class */ (function () {
    function MotoFormPage(navCtrl, navParams, alertCtrl, motoService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.motoService = motoService;
        this.storage = storage;
        this.marcas = [];
    }
    MotoFormPage.prototype.ngOnInit = function () {
        this.listMarcas();
    };
    MotoFormPage.prototype.listMarcas = function () {
        var _this = this;
        this.motoService.getMarcas().subscribe(function (result) {
            _this.marcas = result.marcas;
        }, function (error) {
            console.log(error);
        });
    };
    MotoFormPage.prototype.onSubmit = function (form) {
        var _this = this;
        if (!form.valid) {
            this.alert('Formulario incompleto', 'Por favor llene los campos requeridos');
        }
        else {
            console.log(form.value);
            var params = form.value;
            this.storage.get('access_token').then(function (val) {
                var token = JSON.parse(val);
                _this.motoService.setMoto(token, params).subscribe(function (result) {
                    if (!result) {
                        _this.alert("Error", "Problemas con el servidor");
                    }
                    else {
                        if (result.failed) {
                            _this.alert("Error result", result.failed);
                        }
                        else {
                            console.log(result.moto);
                            _this.alert(result.moto.marca + " creada", "Tu moto fue agregada");
                            _this.navCtrl.pop();
                        }
                    }
                }, function (error) {
                    var err = JSON.parse(error._body);
                    form.setValue({
                        marca: "",
                        modelo: "",
                        version: "",
                        serie: "",
                        km: "",
                        anio: ""
                    });
                    console.log("Error: " + JSON.stringify(err));
                });
            });
        }
    };
    MotoFormPage.prototype.regresar = function () {
        this.navCtrl.pop();
    };
    MotoFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MotoFormPage');
    };
    MotoFormPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    MotoFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-moto-form',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\moto-form\moto-form.html"*/'<!--\n\n  Generated template for the MotoFormPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Agrega tu moto</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <form action="ngSubmit" #formMoto="ngForm" (ngSubmit)="onSubmit(formMoto)">\n\n      <ion-item>\n\n        <ion-select name="marca" ngModel placeholder="Marca" required>\n\n          <ion-option *ngFor="let marca of marcas" value="{{marca.nombre}}">{{marca.nombre}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="text" name="modelo" ngModel placeholder="Modelo"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="text" name="version" ngModel placeholder="Versión"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="number" name="serie" ngModel placeholder="Número de Serie"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="number" name="anio" ngModel placeholder="Año" required></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="number" name="km" ngModel placeholder="Kilometros recorridos"></ion-input>\n\n      </ion-item>\n\n      <button ion-button color="primary" type="submit" block>Guardar domicilio</button>\n\n    </form>\n\n    <button ion-button color="light" (click)="regresar()" block>Cancelar</button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\moto-form\moto-form.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_providers__["d" /* MotoProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_providers__["d" /* MotoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], MotoFormPage);
    return MotoFormPage;
}());

//# sourceMappingURL=moto-form.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moto_form_moto_form__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moto_moto__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MotosPage = /** @class */ (function () {
    function MotosPage(navCtrl, navParams, provider, storage, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.motos = [];
        this.messageError = null;
    }
    MotosPage.prototype.ngOnInit = function () {
        this.motos = [];
        this.messageError = null;
        this.showMotos();
    };
    MotosPage.prototype.ionViewWillEnter = function () {
        this.ngOnInit();
    };
    MotosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MotosPage');
    };
    MotosPage.prototype.showMotos = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loader.present();
        this.storage.get('access_token').then(function (val) {
            var token = JSON.parse(val);
            _this.provider.getMotos(token).subscribe(function (result) {
                console.log(result);
                _this.motos = result.motos;
                console.log(_this.motos);
                loader.dismiss();
                _this.messageError = null;
            }, function (error) {
                _this.messageError = JSON.parse(error);
                console.log("Error " + JSON.stringify(_this.messageError));
                loader.dismiss();
            });
        });
    };
    MotosPage.prototype.showMoto = function (moto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__moto_moto__["a" /* MotoPage */], {
            moto: moto
        });
    };
    MotosPage.prototype.eliminarMoto = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Deseas eliminar esta moto?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function (data) {
                        console.log(data);
                        _this.storage.get("access_token").then(function (val) {
                            var token = JSON.parse(val);
                            console.log(token);
                            _this.provider.deleteMoto(token, id).subscribe(function (result) {
                                console.log(result);
                                // this.tarjetas = result.tarjetas;
                                // console.log(this.tarjetas);
                                _this.ionViewWillEnter();
                            }, function (error) {
                                _this.messageError = JSON.parse(error._body);
                                console.log("Error " + JSON.stringify(_this.messageError));
                            });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MotosPage.prototype.openForm = function () {
        console.log('Abrir formulario');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__moto_form_moto_form__["a" /* MotoFormPage */]);
    };
    MotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-motos',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\motos\motos.html"*/'<!--\n\n  Generated template for the MotosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle icon-only class="menu">\n\n      <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n\n      <!-- <ion-icon></ion-icon> -->\n\n    </button>\n\n    <ion-title>Mis Motos</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button color="light" round icon-end icon-only end (click)="openForm()">\n\n        <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngIf="motos.length == 0 || messageError != null">\n\n    \n\n    <ion-card-header>\n\n      Motos\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      No tienes motos agregadas por el momento.\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n  <ion-card *ngFor="let moto of motos">\n\n    <ion-card-header>\n\n      {{ moto.marca }}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p *ngIf="moto.modelo"><strong>Modelo: {{moto.modelo}} </strong></p>\n\n      <p *ngIf="moto.version"><strong>Versión: {{moto.version}}</strong></p>\n\n      <p *ngIf="moto.serie"><strong>Número de serie: {{moto.serie}}</strong></p>\n\n      <p *ngIf="moto.km"><strong>Kilometros: {{moto.km}}</strong></p>\n\n      <p *ngIf="moto.anio"><strong>Año: {{moto.anio}}</strong></p>\n\n      <ion-buttons end>\n\n        <button ion-button color="light" round icon-only end (click)="showMoto(moto)">\n\n          <!-- Advanced: explicity set the icon for each platform -->\n\n          <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n\n        </button>\n\n        <!-- <button ion-button color="light" round icon-only end (click)="editMoto(moto)"> -->\n\n          <!-- Advanced: explicity set the icon for each platform -->\n\n          <!-- <ion-icon ios="ios-create" md="md-create"></ion-icon> -->\n\n        <!-- </button> -->\n\n        <button ion-button color="light" round icon-only end (click)="eliminarMoto(moto.id)">\n\n          <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\motos\motos.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MotoProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MotoProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* LoadingController */]])
    ], MotosPage);
    return MotosPage;
}());

//# sourceMappingURL=motos.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoFotosFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductoFotosFormPage = /** @class */ (function () {
    function ProductoFotosFormPage(navCtrl, camera, navParams, productoProvider, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.navParams = navParams;
        this.productoProvider = productoProvider;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.producto = navParams.get('producto');
        console.log(this.producto);
        this.aImages = [];
    }
    ProductoFotosFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductoFotosFormPage');
    };
    ProductoFotosFormPage.prototype.deletePhoto = function (index) {
        console.log(index);
        this.aImages.splice(index, 1);
    };
    ProductoFotosFormPage.prototype.takePhotoGallery = function () {
        var _this = this;
        console.log('foto');
        var options = {
            sourceType: 2,
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            correctOrientation: true,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 1024,
            targetHeight: 1024
        };
        this.camera.getPicture(options).then(function (imageData) {
            var picture = 'data:image/jpg;base64,' + imageData;
            // Push to array
            _this.aImages.push({
                'imagen': picture
            });
            console.log(_this.aImages);
        }, function (err) {
            // Handle error
        });
    };
    ProductoFotosFormPage.prototype.takePhotoCamera = function () {
        var _this = this;
        var options = {
            sourceType: 1,
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            correctOrientation: true,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 1024,
            targetHeight: 1024
        };
        this.camera.getPicture(options).then(function (imageData) {
            var picture = 'data:image/jpg;base64,' + imageData;
            // Push to array
            _this.aImages.push({
                'imagen': picture
            });
            console.log(_this.aImages);
        }, function (err) {
            // Handle error
        });
    };
    /**
     * save
     */
    ProductoFotosFormPage.prototype.save = function (imagenes) {
        var _this = this;
        this.storage.get('access_token').then(function (val) {
            var token = JSON.parse(val);
            _this.productoProvider.savePhotoProducto(token, _this.producto.id, imagenes).subscribe(function (result) {
                console.log(result);
                if (!result) {
                    _this.alert("Error", "Problemas con el servidor");
                }
                else {
                    console.log(result['message']);
                    _this.alert('', result['message']);
                    _this.navCtrl.pop();
                }
            }, function (error) {
                var err = JSON.parse(error._body);
                console.log("Error: " + JSON.stringify(err));
            });
        });
    };
    ProductoFotosFormPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    ProductoFotosFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-producto-fotos-form',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\producto-fotos-form\producto-fotos-form.html"*/'<!--\n  Generated template for the ProductoFotosFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agregar fotos a {{producto.nombre}}</ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-fab bottom right>\n    <button ion-fab mini>\n      <ion-icon name="add"></ion-icon>\n    </button>\n    <ion-fab-list side=\'left\'>\n      <button ion-fab (click)="takePhotoGallery()">\n        <ion-icon name="albums"></ion-icon>\n      </button>\n      <button ion-fab (click)="takePhotoCamera()">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n\n  \n\n  <!-- <button ion-button block (click)="takePhotoGallery()"><ion-icon name="albums"></ion-icon>Galeria</button>\n  <button ion-button block (click)="takePhotoCamera()"><ion-icon name="camera"></ion-icon> Foto</button> -->\n  <ion-card *ngFor="let imagen of aImages; let i = index">\n    \n    <ion-buttons>\n      <ion-fab right top class="delete">\n        <button ion-fab color="danger" mini (click)="deletePhoto(i)">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-fab>\n    </ion-buttons>\n    \n    <!-- <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons> -->\n    <ion-card-content>\n      <img [src]="imagen.imagen">\n      \n\n    </ion-card-content>\n  </ion-card>\n<button ion-button block (click)="save(aImages)" [disabled]="aImages.length == 0">\n    Guardar</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\producto-fotos-form\producto-fotos-form.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_providers__["e" /* MyproductoProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["e" /* MyproductoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductoFotosFormPage);
    return ProductoFotosFormPage;
}());

//# sourceMappingURL=producto-fotos-form.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProductosFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductosFormPage = /** @class */ (function () {
    function ProductosFormPage(navCtrl, navParams, storage, productoProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.productoProvider = productoProvider;
        this.alertCtrl = alertCtrl;
        if (this.navParams.get('edit')) {
            this.edit = this.navParams.get('edit');
            this.producto = this.navParams.get('producto');
        }
        else {
            this.edit = false;
            this.producto = {
                nombre: '',
                descripcion: '',
                precio: '',
                cantidad: ''
            };
        }
    }
    ProductosFormPage.prototype.onSubmit = function (form) {
        var _this = this;
        if (!form.valid) {
            this.alert('Formulario incompleto', 'Por favor llene los campos requeridos');
            if (this.edit) {
                form.setValue({
                    _method: "PUT",
                    nombre: this.producto.nombre,
                    descripcion: this.producto.descripcion,
                    cantidad: this.producto.cantidad,
                    precio: this.producto.precio
                });
            }
        }
        else {
            console.log(form.value);
            var params = form.value;
            this.storage.get('access_token').then(function (val) {
                var token = JSON.parse(val);
                if (_this.edit == true) {
                    // TODO
                }
                else {
                    _this.productoProvider.setProducto(token, params).subscribe(function (result) {
                        console.log(result);
                        if (result['producto']) {
                            _this.alert('Producto agregado', 'Producto agregado correctamente, no olvides agregar fotos del producto');
                            _this.navCtrl.pop();
                        }
                    });
                }
            });
        }
    };
    ProductosFormPage.prototype.regresar = function () {
        this.navCtrl.pop();
    };
    ProductosFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductosFormPage');
    };
    ProductosFormPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    ProductosFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productos-form',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\productos-form\productos-form.html"*/'<!--\n\n  Generated template for the ProductosFormPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Nuevo Producto</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <form action="ngSubmit" #formProducto="ngForm" (ngSubmit)="onSubmit(formProducto)">\n\n      <ion-input *ngIf="edit" type="hidden" name="_method" ngModel="PUT" #_method="ngModel" required></ion-input>\n\n      <ion-item>\n\n        <ion-input type="text" name="nombre" ngModel="{{producto.nombre}}" #nombre="ngModel" placeholder="Nombre del producto" required></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-textarea type="text" name="descripcion" ngModel="{{producto.descripcion}}" #descripcion="ngModel" placeholder="Descripción del producto"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="number" min="1" name="cantidad" ngModel="{{producto.cantidad}}" #cantidad="ngModel" placeholder="Cantidad" required></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="number" min="0" step="0.01" name="precio" ngModel="{{producto.precio}}" #precio="ngModel" placeholder="Precio" required></ion-input>\n\n      </ion-item>\n\n      <button ion-button color="primary" type="submit" block>Guardar producto</button>\n\n    </form>\n\n    <button ion-button color="light" (click)="regresar()" block>Cancelar</button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\productos-form\productos-form.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* MyproductoProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* MyproductoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductosFormPage);
    return ProductosFormPage;
}());

//# sourceMappingURL=productos-form.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__producto_fotos_producto_fotos__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductosPage = /** @class */ (function () {
    function ProductosPage(navCtrl, navParams, productProvider, storage, alertCtrl, callNumber, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productProvider = productProvider;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.callNumber = callNumber;
        this.loadingCtrl = loadingCtrl;
        this.productos = [];
        this.messageError = null;
    }
    ProductosPage.prototype.ngOnInit = function () {
        this.productos = [];
        this.messageError = null;
        this.showProductos();
    };
    ProductosPage.prototype.ionViewWillEnter = function () {
        this.ngOnInit();
    };
    ProductosPage.prototype.showProductos = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Cargando...",
        });
        loader.present();
        this.storage.get('access_token').then(function (val) {
            var token = JSON.parse(val);
            _this.productProvider.getProductos(token).subscribe(function (result) {
                // console.log(result);
                _this.productos = result['productos'];
                console.log(_this.productos);
                loader.dismiss();
                _this.messageError = null;
            }, function (error) {
                _this.messageError = JSON.parse(error);
                console.log("Error " + JSON.stringify(_this.messageError));
                loader.dismiss();
            });
        });
    };
    ProductosPage.prototype.showProducto = function (producto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__producto_fotos_producto_fotos__["a" /* ProductoFotosPage */], { 'producto': producto, 'delete': false });
    };
    ProductosPage.prototype.llamar = function (numero) {
        var _this = this;
        console.log(JSON.stringify(numero));
        var confirm = this.alertCtrl.create({
            title: '¿Llamar al vendedor?',
            message: '¿Desea contactar a este vendedor?',
            buttons: [
                {
                    text: 'NO',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'SI',
                    handler: function () {
                        _this.callNumber.callNumber(JSON.stringify(numero), true)
                            .then(function (res) { return console.log('Launched dialer!', res); })
                            .catch(function (err) { return console.log('Error launching dialer', err); });
                    }
                }
            ]
        });
        confirm.present();
    };
    ProductosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductosPage');
    };
    ProductosPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    ProductosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-productos',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\productos\productos.html"*/'<!--\n\n  Generated template for the ProductosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle icon-only class="menu">\n\n      <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n\n      <!-- <ion-icon></ion-icon> -->\n\n    </button>\n\n    <ion-title>Productos</ion-title>\n\n    \n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngIf="productos.length == 0 || messageError != null">\n\n    \n\n    <ion-card-header>\n\n      Productos\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      No tienes productos agregados por el momento.\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n  <ion-card *ngFor="let producto of productos">\n\n    <ion-card-header>\n\n      {{ producto.nombre }}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p *ngIf="producto.descripcion"><strong>{{producto.descripcion}}</strong></p>\n\n      <p><strong>Cantidad: {{producto.cantidad}}</strong></p>\n\n      <p><strong>Precio: ${{producto.precio}}</strong></p>\n\n      <p *ngIf="producto.producto.nombre">\n\n        <strong>Tienda: {{producto.producto.nombre}}</strong>\n\n      </p> \n\n      <p *ngIf="producto.producto.username">\n\n        <strong>Vendedor: {{producto.producto.username}} ({{producto.producto.name}} {{producto.producto.appaterno}} {{producto.producto.apmaterno}})</strong>\n\n      </p>\n\n      <ion-buttons end>\n\n        <button ion-button color="light" round icon-only end (click)="showProducto(producto)">\n\n          <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n\n        </button>\n\n        <button ion-button color="light" round icon-only end (click)="llamar(producto.producto.telefono)">\n\n          <ion-icon ios="ios-call" md="md-call"></ion-icon>\n\n        </button>\n\n        <!-- <button ion-button color="light" round icon-only end (click)="eliminarProducto(producto.id)">\n\n          <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n        </button> -->\n\n      </ion-buttons>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\productos\productos.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_providers__["f" /* ProductoProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["f" /* ProductoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* LoadingController */]])
    ], ProductosPage);
    return ProductosPage;
}());

//# sourceMappingURL=productos.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutasMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { Content } from '../../../node_modules/ionic-angular/umd/navigation/nav-interfaces';
/**
 * Generated class for the RutasMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RutasMapPage = /** @class */ (function () {
    function RutasMapPage(navCtrl, navParams, viewCtrl, plt, geolocation, storage, rutasProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.plt = plt;
        this.geolocation = geolocation;
        this.storage = storage;
        this.rutasProvider = rutasProvider;
        this.currentMapTrack = null;
        this.isTracking = false;
        this.trackedRoute = [];
        this.tracking = this.navParams.get('tracking');
        console.log(this.tracking);
    }
    RutasMapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RutasMapPage');
        this.plt.ready().then(function () {
            _this.initMap();
        });
    };
    RutasMapPage.prototype.ionViewCanEnter = function () {
        this.ionViewDidLoad();
    };
    RutasMapPage.prototype.initMap = function () {
        var _this = this;
        var mapOptions = {
            zoom: 13,
            mapType: 'MAP_TYPE_HYBRID',
            controls: {
                'compass': true,
                'myLocationButton': true,
                'myLocation': true,
                'indoorPicker': true,
                // 'zoom': true,          // android only
                'mapToolbar': true // android only
            },
            preferences: {
                // zoom: {
                //   minZoom: 15,
                //   maxZoom: 18
                // },
                padding: {
                    left: 2,
                    top: 2,
                    bottom: 2,
                    right: 2
                },
                building: true
            },
        };
        this.map = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* GoogleMaps */].create(this.mapElement.nativeElement, mapOptions);
        // this.enviroment = new Environment();
        // this.enviroment.setBackgroundColor('white');
        this.geolocation.getCurrentPosition().then(function (pos) {
            console.log(pos);
            var latLng = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["b" /* LatLng */](pos.coords.latitude, pos.coords.longitude);
            console.log(latLng);
            _this.map.setCameraZoom(16);
            _this.map.setCameraTarget(latLng);
        }).catch(function (error) {
            console.log('error tomando la locación', error);
        });
        if (this.tracking != null) {
            this.showHistoryRoute(this.tracking);
        }
    };
    RutasMapPage.prototype.salir = function () {
        this.viewCtrl.dismiss();
    };
    RutasMapPage.prototype.startTracking = function () {
        var _this = this;
        this.map.clear();
        this.isTracking = true;
        this.trackedRoute = [];
        this.positionSubscription = this.geolocation.watchPosition()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["filter"])(function (p) { return p.coords !== undefined; }))
            .subscribe(function (data) {
            console.log(data);
            setTimeout(function () {
                var latLng = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["b" /* LatLng */](data.coords.latitude, data.coords.longitude);
                console.log(latLng);
                _this.map.setCameraTarget(latLng);
                _this.map.setCameraZoom(20);
                _this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
                _this.redrawPath(_this.trackedRoute);
                console.log(_this.trackedRoute);
            }, 0);
        });
    };
    RutasMapPage.prototype.redrawPath = function (path) {
        if (this.currentMapTrack) {
            this.map.clear();
        }
        if (path.length > 1) {
            console.log(path);
            this.currentMapTrack = this.map.addPolylineSync({
                points: path,
                color: '#AA00FF',
                width: 10,
                geodesic: true,
                strokeColor: '#ff00ff',
                strokeOpacity: 1.0,
                strokeWeight: 3
            });
            this.map.setCameraTarget(path[path.length - 1]);
            this.map.setCameraZoom(20);
            console.log(this.currentMapTrack);
        }
    };
    RutasMapPage.prototype.stopTracking = function () {
        var _this = this;
        if (this.trackedRoute.length != 0) {
            var newRoute_1 = {
                finished: new Date().getTime(),
                path: this.trackedRoute
            };
            this.storage.get('access_token').then(function (val) {
                var token = JSON.parse(val);
                _this.rutasProvider.setRutaUsuario(token, newRoute_1).subscribe(function (result) {
                    console.log(result);
                }, function (error) {
                    console.log(error);
                });
            });
        }
        this.isTracking = false;
        this.positionSubscription.unsubscribe();
        this.map.clear();
        this.salir();
    };
    RutasMapPage.prototype.showHistoryRoute = function (route) {
        this.map.clear();
        this.redrawPath(route);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], RutasMapPage.prototype, "mapElement", void 0);
    RutasMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rutas-map',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\rutas-map\rutas-map.html"*/'<!--\n  Generated template for the RutasMapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>Ruta</ion-title>\n    <ion-buttons left *ngIf="tracking == null">\n    \n      <button ion-button icon-left color="secondary" (click)="startTracking()" *ngIf="!isTracking">\n        <ion-icon name="locate"></ion-icon>\n        Iniciar Ruta\n      </button>\n      <button ion-button color="danger" icon-left (click)="stopTracking()" *ngIf="isTracking">\n        <ion-icon name="hand"></ion-icon>\n        Parar Ruta\n      </button>\n    \n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only end (click)="salir()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div #map id="map"></div>\n\n  <ion-buttons class="button" *ngIf="tracking == null">\n\n    <button ion-button full icon-left (click)="startTracking()" *ngIf="!isTracking">\n      <ion-icon name="locate"></ion-icon>\n      Start Tracking\n    </button>\n    <button ion-button full color="danger" icon-left (click)="stopTracking()" *ngIf="isTracking">\n      <ion-icon name="hand"></ion-icon>\n      Stop Tracking\n    </button>\n\n  </ion-buttons>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\rutas-map\rutas-map.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__providers_providers__["g" /* RutaUsuarioProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_providers__["g" /* RutaUsuarioProvider */]])
    ], RutasMapPage);
    return RutasMapPage;
}());

//# sourceMappingURL=rutas-map.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarjetaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tarjeta_form_tarjeta_form__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TarjetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TarjetaPage = /** @class */ (function () {
    function TarjetaPage(navCtrl, navParams, tarjetaProvider, storage, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tarjetaProvider = tarjetaProvider;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.tarjetas = [];
        this.messageError = null;
    }
    TarjetaPage.prototype.ngOnInit = function () {
        this.tarjetas = [];
        this.messageError = null;
        this.showTarjetas();
    };
    TarjetaPage.prototype.showTarjetas = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: 'Cargando...' });
        loader.present();
        this.storage.get("access_token").then(function (val) {
            var token = JSON.parse(val);
            _this.tarjetaProvider.getTarjetas(token).subscribe(function (result) {
                _this.tarjetas = result.tarjetas;
                _this.messageError = null;
                loader.dismiss();
            }, function (error) {
                _this.messageError = JSON.parse(error._body);
                console.log('Error' + JSON.stringify(_this.messageError));
                loader.dismiss();
            });
        });
    };
    TarjetaPage.prototype.openForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tarjeta_form_tarjeta_form__["a" /* TarjetaFormPage */]);
    };
    TarjetaPage.prototype.eliminarTarjeta = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "¿Seguro que deseas eliminar esta tarjeta?",
            message: "Si lo borras no podrás utilizar esta tarjeta después",
            buttons: [
                {
                    text: 'Aceptar',
                    handler: function () {
                        console.log('Aceptar');
                        _this.storage.get("access_token").then(function (val) {
                            var token = JSON.parse(val);
                            _this.tarjetaProvider.deleteTarjeta(token, id).subscribe(function (result) {
                                console.log(result);
                                _this.ngOnInit();
                            }, function (error) {
                                _this.messageError = JSON.parse(error._body);
                                console.log("Error" + JSON.stringify(_this.messageError));
                            });
                        });
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('cancel');
                    }
                }
            ]
        });
        alert.present();
    };
    TarjetaPage.prototype.ionViewWillEnter = function () {
        console.log("hola tarjeta");
        this.ngOnInit();
    };
    TarjetaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TarjetaPage');
    };
    TarjetaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tarjeta',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\tarjeta\tarjeta.html"*/'<!--\n  Generated template for the TarjetaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tarjetas</ion-title>\n    <ion-buttons end>\n      <button ion-button color="light" round icon-end icon-only end (click)="openForm()">\n        <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngIf="messageError != null && tarjetas.length == 0">\n    <ion-card-content>\n      <ion-card-title>\n        Tarjetas\n      </ion-card-title>\n      <p>\n        {{ messageError.message }}\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let tarjeta of tarjetas; let i = index">\n    <ion-card-content>\n      <ion-card-title>\n        Tarjeta {{i+1}}\n      </ion-card-title>\n      <p>\n        <strong>Tipo:</strong> {{tarjeta.tipo}}\n      </p>\n      <p>\n        <strong>Nombre:</strong> {{tarjeta.nombre}}\n      </p>\n      <p>\n        <strong>Tarjeta:</strong> ************{{tarjeta.numero | slice:-4}}\n      </p>\n      <ion-buttons end>\n        <button ion-button color="light" round icon-only end (click)="eliminarTarjeta(tarjeta.id)">\n          <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\tarjeta\tarjeta.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_providers__["h" /* TarjetaProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_providers__["h" /* TarjetaProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* LoadingController */]])
    ], TarjetaPage);
    return TarjetaPage;
}());

//# sourceMappingURL=tarjeta.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarjetaFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TarjetaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TarjetaFormPage = /** @class */ (function () {
    function TarjetaFormPage(navCtrl, navParams, alertCtrl, tarjetaService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.tarjetaService = tarjetaService;
        this.storage = storage;
        this.date = new Date().toISOString();
        this.currentYear = (new Date()).getFullYear();
    }
    TarjetaFormPage.prototype.onSubmitCard = function (formTarjeta) {
        var _this = this;
        if (!formTarjeta.valid) {
            this.alert("Formulario incompleto", "Por favor llene todos los campos requeridos");
        }
        else {
            console.log(formTarjeta.value);
            var params = formTarjeta.value;
            this.storage.get("access_token").then(function (val) {
                var token = JSON.parse(val);
                _this.tarjetaService.setTarjeta(token, params).subscribe(function (result) {
                    if (!result) {
                        _this.alert("Error", "Problemas con el servidor");
                    }
                    else {
                        if (result.failed) {
                            _this.alert("Error result", result.failed);
                        }
                        else {
                            console.log(result.message);
                            _this.alert("Creada", "tarjeta agregada con éxito");
                            _this.navCtrl.pop();
                        }
                    }
                }, function (error) {
                    var err = JSON.parse(error._body);
                    formTarjeta.setValue({
                        tipo: "",
                        numero: "",
                        nombre: "",
                        expira: "",
                    });
                    console.log("Error: " + JSON.stringify(err));
                    console.log("ErrorMessage: " + JSON.stringify(err.error));
                    if (err.errors) {
                        if (err.errors.password_new) {
                            _this.alert("Tu contraseña nueva no coinciden", err.errors.password_new);
                        }
                    }
                    else {
                        _this.alert("Error:", err.error);
                    }
                });
            });
        }
    };
    TarjetaFormPage.prototype.regresar = function () {
        this.navCtrl.pop();
    };
    TarjetaFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TarjetaFormPage');
    };
    TarjetaFormPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    TarjetaFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tarjeta-form',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\tarjeta-form\tarjeta-form.html"*/'<!--\n  Generated template for the TarjetaFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nueva tarjeta </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-list>\n   <form action="" #formTarjeta="ngForm" (ngSubmit)="onSubmitCard(formTarjeta)">\n     <ion-item>\n       <ion-input type="text" name="tipo" ngModel #tipo="ngModel" required placeholder="Tipo de tarjeta"></ion-input>\n     </ion-item>\n      <ion-item>\n        <ion-input type="number" name="numero" ngModel #numero="ngModel" required placeholder="Número de tarjeta"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" name="nombre" ngModel #nombre="ngModel" required placeholder="Nombre del propietario de la tarjeta"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-datetime displayFormat="MM/YY" name="expira" ngModel #expira="ngModel" min="{{ currentYear }}" max="{{ currentYear+20 }}"\n          required placeholder="Fecha de expiración"></ion-datetime>\n        <!-- <ion-input type="date" name"tipo" ngModel #password="ngModel" required placeholder="Tipo de tarjeta"></ion-input> -->\n      </ion-item>\n      <button ion-button color="primary" type="submit" block>Guardar tarjeta</button>\n   </form>\n    <button ion-button color="light" (click)="regresar()" block>Cancelar</button>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\tarjeta-form\tarjeta-form.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* TarjetaProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* TarjetaProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], TarjetaFormPage);
    return TarjetaFormPage;
}());

//# sourceMappingURL=tarjeta-form.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyproductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productos_form_productos_form__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__producto_fotos_producto_fotos__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MyproductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyproductosPage = /** @class */ (function () {
    function MyproductosPage(navCtrl, navParams, productProvider, storage, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productProvider = productProvider;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.productos = [];
        this.messageError = null;
    }
    MyproductosPage.prototype.ngOnInit = function () {
        this.productos = [];
        this.messageError = null;
        this.showProductos();
    };
    MyproductosPage.prototype.ionViewWillEnter = function () {
        this.ngOnInit();
    };
    MyproductosPage.prototype.showProductos = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Cargando...",
        });
        loader.present();
        this.storage.get('access_token').then(function (val) {
            var token = JSON.parse(val);
            _this.productProvider.getProductos(token).subscribe(function (result) {
                // console.log(result);
                _this.productos = result['productos'];
                loader.dismiss();
                console.log(_this.productos);
                _this.messageError = null;
            }, function (error) {
                _this.messageError = JSON.parse(error);
                console.log("Error " + JSON.stringify(_this.messageError));
                loader.dismiss();
            });
        });
    };
    MyproductosPage.prototype.openForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__productos_form_productos_form__["a" /* ProductosFormPage */]);
    };
    MyproductosPage.prototype.showProducto = function (producto) {
        // console.log(producto);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__producto_fotos_producto_fotos__["a" /* ProductoFotosPage */], { 'producto': producto, 'delete': 'true' });
    };
    MyproductosPage.prototype.eliminarProducto = function (prod_id) {
        var _this = this;
        console.log(prod_id);
        var alert = this.alertCtrl.create({
            title: 'Deseas eliminar este producto',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function (data) {
                        console.log(data);
                        _this.storage.get('access_token').then(function (val) {
                            var token = JSON.parse(val);
                            _this.productProvider.deleteProducto(token, prod_id).subscribe(function (result) {
                                console.log(result);
                                if (result['message']) {
                                    _this.alert('Hecho', result['message']);
                                }
                                _this.ionViewWillEnter();
                            }, function (error) {
                                _this.messageError = JSON.parse(error._body);
                                console.log("Error " + JSON.stringify(_this.messageError));
                            });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MyproductosPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    MyproductosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyproductosPage');
    };
    MyproductosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myproductos',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\myproductos\myproductos.html"*/'<!--\n  Generated template for the MyproductosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar>\n    <button ion-button menuToggle icon-only class="menu">\n      <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n      <!-- <ion-icon></ion-icon> -->\n    </button>\n    <ion-title>Mis Productos</ion-title>\n    <ion-buttons end>\n      <button ion-button color="light" round icon-end icon-only end (click)="openForm()">\n        <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="productos.length == 0 || messageError != null">\n\n    <ion-card-header>\n      Productos\n    </ion-card-header>\n    <ion-card-content>\n      No tienes productos agregados por el momento.\n    </ion-card-content>\n\n  </ion-card>\n  <ion-card *ngFor="let producto of productos">\n    <ion-card-header>\n      {{ producto.nombre }}\n    </ion-card-header>\n    <ion-card-content>\n      <p *ngIf="producto.descripcion">\n        <strong>{{producto.descripcion}}</strong>\n      </p>\n      <p>\n        <strong>Cantidad: {{producto.cantidad}}</strong>\n      </p>\n      <p>\n        <strong>Precio: ${{producto.precio}}</strong>\n      </p>\n      <ion-buttons end>\n        <button ion-button color="light" round icon-only end (click)="showProducto(producto)">\n          <!-- Advanced: explicity set the icon for each platform -->\n          <!-- Advanced: explicity set the icon for each platform -->\n          <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n        </button>\n        <!-- <button ion-button color="light" round icon-only end (click)="editMoto(moto)"> -->\n        <!-- Advanced: explicity set the icon for each platform -->\n        <!-- <ion-icon ios="ios-create" md="md-create"></ion-icon> -->\n        <!-- </button> -->\n        <button ion-button color="light" round icon-only end (click)="eliminarProducto(producto.id)">\n          <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\myproductos\myproductos.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* MyproductoProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* MyproductoProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], MyproductosPage);
    return MyproductosPage;
}());

//# sourceMappingURL=myproductos.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rutas_map_rutas_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RutasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RutasPage = /** @class */ (function () {
    function RutasPage(navCtrl, navParams, plt, storage, modalCtrl, rutaProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.rutaProvider = rutaProvider;
        this.alertCtrl = alertCtrl;
        this.previousTracks = [];
    }
    RutasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RutasPage');
        this.plt.ready().then(function () {
            _this.loadHistoricRoutes();
        });
    };
    RutasPage.prototype.loadHistoricRoutes = function () {
        var _this = this;
        this.storage.get('routes').then(function (data) {
            if (data) {
                _this.previousTracks = data;
            }
        });
        this.storage.get('access_token').then(function (val) {
            var token = JSON.parse(val);
            _this.rutaProvider.getRutasUsuario(token).subscribe(function (res) {
                console.log(res);
                _this.previousTracks = res['rutas'];
                console.log(_this.previousTracks);
            }, function (error) {
                console.log(error);
            });
        });
    };
    RutasPage.prototype.ionViewCanEnter = function () {
        this.ionViewDidLoad();
    };
    RutasPage.prototype.openMap = function (route) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__rutas_map_rutas_map__["a" /* RutasMapPage */], { tracking: route });
    };
    RutasPage.prototype.deleteRoute = function (route_id) {
        var _this = this;
        console.log(route_id);
        this.alertCtrl.create({
            title: 'Eliminar esta ruta',
            subTitle: '¿Estas seguro de eliminar esta ruta?',
            buttons: [
                {
                    text: 'Eliminar',
                    handler: function () {
                        // TODO
                        _this.storage.get('access_token').then(function (val) {
                            var token = JSON.parse(val);
                            _this.rutaProvider.deleteRutaUsuario(token, route_id)
                                .subscribe(function (res) {
                                _this.alertCtrl.create({
                                    title: res['message'],
                                    buttons: ['ok']
                                }).present();
                                _this.loadHistoricRoutes();
                            }, function (error) {
                                console.log(error);
                                _this.alertCtrl.create({
                                    title: 'Error al eliminar la ruta',
                                    subTitle: 'Por favor intentelo más tarde',
                                    buttons: ['OK']
                                }).present();
                                _this.loadHistoricRoutes();
                            });
                        });
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('cancel');
                    }
                },
            ]
        }).present();
    };
    RutasPage.prototype.crearRuta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__rutas_map_rutas_map__["a" /* RutasMapPage */], { tracking: null });
    };
    RutasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-rutas',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\rutas\rutas.html"*/'<!--\n  Generated template for the RutasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only class="menu" *ngIf="!isTracking">\n      <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n      <!-- <ion-icon></ion-icon> -->\n    </button>\n    <ion-title>Rutas</ion-title>\n    <ion-buttons end>\n      <button ion-button clear end (click)="crearRuta()">\n        <ion-icon>\n          <img src="assets/imgs/dibujoarriba.png" alt="dream moto" width="25" height="25" />\n        </ion-icon>\n      </button>\n    </ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding scroll="false">\n  <!-- <div #map id="map"></div> -->\n  <div class="background">\n\n\n    <ion-list>\n      <ion-list-header>Previous Tracks</ion-list-header>\n      <ion-item *ngFor="let route of previousTracks">\n        {{ route.nombre | date }}, {{ route.coordenadas.length }} Puntos\n        <button ion-button clear item-end (click)="openMap(route.coordenadas)">Ver</button>\n        <button ion-button clear item-end (click)="deleteRoute(route.id)">Eliminar</button>\n\n      </ion-item>\n    </ion-list>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\rutas\rutas.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* RutaUsuarioProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* RutaUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], RutasPage);
    return RutasPage;
}());

//# sourceMappingURL=rutas.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandbookProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HandbookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HandbookProvider = /** @class */ (function () {
    function HandbookProvider(http) {
        this.http = http;
        console.log('Hello HandbookProvider Provider');
        this.url = "http://byw.from-tn.com/motodream/api/handbooks";
    }
    HandbookProvider.prototype.getHandbooks = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this.http.get(this.url, { headers: headers });
    };
    HandbookProvider.prototype.downloadHandbook = function (path) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        return this.http.get(this.url + path, { headers: headers });
    };
    HandbookProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HandbookProvider);
    return HandbookProvider;
}());

//# sourceMappingURL=handbook.js.map

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contacto-form/contacto-form.module": [
		466,
		23
	],
	"../pages/contactos/contactos.module": [
		467,
		22
	],
	"../pages/domenvio-form/domenvio-form.module": [
		468,
		21
	],
	"../pages/domfiscal-form/domfiscal-form.module": [
		469,
		20
	],
	"../pages/domicilio-envio/domicilio-envio.module": [
		470,
		19
	],
	"../pages/domicilio-fiscal/domicilio-fiscal.module": [
		472,
		18
	],
	"../pages/emergencia/emergencia.module": [
		471,
		17
	],
	"../pages/handbook/handbook.module": [
		473,
		16
	],
	"../pages/login/login.module": [
		474,
		15
	],
	"../pages/m-dtv/m-dtv.module": [
		475,
		14
	],
	"../pages/moto-form/moto-form.module": [
		477,
		13
	],
	"../pages/moto/moto.module": [
		476,
		12
	],
	"../pages/motos/motos.module": [
		478,
		11
	],
	"../pages/myproductos/myproductos.module": [
		488,
		10
	],
	"../pages/producto-fotos-form/producto-fotos-form.module": [
		479,
		9
	],
	"../pages/producto-fotos/producto-fotos.module": [
		480,
		8
	],
	"../pages/productos-form/productos-form.module": [
		481,
		7
	],
	"../pages/productos/productos.module": [
		482,
		6
	],
	"../pages/register/register.module": [
		483,
		5
	],
	"../pages/rutas-map/rutas-map.module": [
		484,
		4
	],
	"../pages/rutas/rutas.module": [
		489,
		3
	],
	"../pages/tarjeta-form/tarjeta-form.module": [
		486,
		2
	],
	"../pages/tarjeta/tarjeta.module": [
		485,
		1
	],
	"../pages/user/user.module": [
		487,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutaUsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RutaUsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RutaUsuarioProvider = /** @class */ (function () {
    function RutaUsuarioProvider(http) {
        this.http = http;
        this.url = "http://byw.from-tn.com/motodream/api/routes";
        console.log('Hello RutaUsuarioProvider Provider');
    }
    RutaUsuarioProvider.prototype.getRutasUsuario = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.get(this.url, { headers: headers });
    };
    RutaUsuarioProvider.prototype.setRutaUsuario = function (token, ruta) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.url, ruta, { headers: headers });
    };
    RutaUsuarioProvider.prototype.deleteRutaUsuario = function (token, ruta_id) {
        var params = {
            _method: 'DELETE'
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.url + '/' + ruta_id, params, { headers: headers });
    };
    RutaUsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RutaUsuarioProvider);
    return RutaUsuarioProvider;
}());

//# sourceMappingURL=ruta-usuario.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyproductoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MyproductoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MyproductoProvider = /** @class */ (function () {
    function MyproductoProvider(http) {
        this.http = http;
        this.url = "http://byw.from-tn.com/motodream/api/usuarioProductos";
        // this.url ="http://localhost/dream_moto_backend/public/api/productos";
        this.urlfoto = "http://byw.from-tn.com/motodream/api/productos";
        console.log('Hello ProductoProvider Provider');
    }
    MyproductoProvider.prototype.getProductos = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        console.log(headers);
        return this.http.get(this.url, { headers: headers });
    };
    MyproductoProvider.prototype.setProducto = function (token, params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.url, params, { headers: headers });
    };
    MyproductoProvider.prototype.deleteProducto = function (token, prod_id) {
        var params = {
            _method: "DELETE"
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.url + '/' + prod_id, params, { headers: headers });
    };
    MyproductoProvider.prototype.savePhotoProducto = function (token, prod_id, images) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.urlfoto + '/' + prod_id + '/fotoproducto', images, { headers: headers });
    };
    MyproductoProvider.prototype.getFotos = function (product_id, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.get(this.urlfoto + '/' + product_id + '/foto', { headers: headers });
    };
    MyproductoProvider.prototype.deleteImage = function (producto_id, token, foto_id) {
        var params = {
            _method: 'DELETE'
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.urlfoto + '/' + producto_id + '/fotoproducto/' + foto_id, params, { headers: headers });
    };
    MyproductoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MyproductoProvider);
    return MyproductoProvider;
}());

//# sourceMappingURL=myproducto.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ProductoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductoProvider = /** @class */ (function () {
    function ProductoProvider(http) {
        this.http = http;
        this.url = "http://byw.from-tn.com/motodream/api/productos";
        // this.url ="http://localhost/dream_moto_backend/public/api/productos";
        console.log('Hello ProductoProvider Provider');
    }
    ProductoProvider.prototype.getProductos = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        console.log(headers);
        return this.http.get(this.url, { headers: headers });
    };
    ProductoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProductoProvider);
    return ProductoProvider;
}());

//# sourceMappingURL=producto.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuarioProvider = /** @class */ (function () {
    function UsuarioProvider(_http, storage, events) {
        this._http = _http;
        this.storage = storage;
        this.events = events;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        console.log('Hello UsuarioProvider Provider');
        this.url = 'http://byw.from-tn.com/motodream/api/';
        this.oauthUrl = 'http://byw.from-tn.com/motodream/oauth/token';
        // this.url = 'http://localhost/dream_moto_backend/public/api/';
        // this.oauthUrl = 'http://localhost/dream_moto_backend/public/oauth/token';
    }
    UsuarioProvider.prototype.login = function (usuario) {
        var json = JSON.stringify(usuario);
        var params = json;
        // console.log(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });
        return this._http.post(this.url + 'login', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioProvider.prototype.getToken = function (usuario, password) {
        var json = JSON.stringify(usuario);
        var params = json;
        var user = JSON.parse(params);
        // console.log("Params: "+params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });
        var postData = {
            grant_type: "password",
            client_id: 2,
            // client_secret: "BoEb7ne6IBWTJiHSsg64KAd7NQs7AmFNKvx46NnP",
            client_secret: "IA3760dRZm4LN6tY47H9anfKK5DHKfsQrVX4NDcX",
            username: user.usuario.email,
            password: password,
            scope: ""
        };
        // console.log("postdata: "+JSON.stringify(postData));
        return this._http.post(this.oauthUrl, JSON.stringify(postData), {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    UsuarioProvider.prototype.loginData = function (token, refresh) {
        this.storage.set("access_token", JSON.stringify(token));
        this.storage.set("refresh_token", JSON.stringify(refresh));
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.events.publish('user:login');
    };
    UsuarioProvider.prototype.addUsuario = function (usuario) {
        var json = JSON.stringify(usuario);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        console.log(params);
        return this._http.post(this.url + 'users', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioProvider.prototype.getUsuario = function (access_token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            // "Cache-Control" : "no-cache",
            "Accept": "application/json",
            "Authorization": 'Bearer ' + JSON.parse(access_token)
        });
        // console.log(headers);
        return this._http.get(this.url + 'user', { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioProvider.prototype.estaLogeado = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    UsuarioProvider.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        // this.storage.remove('username');
        this.storage.remove('access_token');
        this.storage.remove('refresh_token');
        this.events.publish('user:logout');
    };
    UsuarioProvider.prototype.changePass = function (access_token, params) {
        var json = JSON.stringify(params);
        console.log(access_token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + access_token,
        });
        console.log(headers);
        console.log(params);
        return this._http.post(this.url + "password", json, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Events */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarjetaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TarjetaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TarjetaProvider = /** @class */ (function () {
    function TarjetaProvider(http) {
        this.http = http;
        console.log('Hello TarjetaProvider Provider');
        this.url = 'http://byw.from-tn.com/motodream/api/cards';
    }
    TarjetaProvider.prototype.getTarjetas = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            "Content-Type": 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        console.log(headers);
        return this.http.get(this.url, { headers: headers }).map(function (res) { return res.json(); });
    };
    TarjetaProvider.prototype.setTarjeta = function (token, formulario) {
        var params = formulario;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.url, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    TarjetaProvider.prototype.deleteTarjeta = function (token, tarjeta_id) {
        var params = {
            '_method': 'DELETE'
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.url + '/' + tarjeta_id, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    TarjetaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], TarjetaProvider);
    return TarjetaProvider;
}());

//# sourceMappingURL=tarjeta.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomicilioEnvioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DomicilioEnvioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DomicilioEnvioProvider = /** @class */ (function () {
    function DomicilioEnvioProvider(http) {
        this.http = http;
        console.log('Hello DomicilioEnvioProvider Provider');
        this.url = "http://byw.from-tn.com/motodream/api/domicilios";
    }
    DomicilioEnvioProvider.prototype.getDomicilios = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        });
        return this.http.get(this.url, { headers: headers }).map(function (res) { return res.json(); });
    };
    DomicilioEnvioProvider.prototype.getDomicilio = function (token, domicilio_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        });
        return this.http.get(this.url + "/" + domicilio_id, { headers: headers }).map(function (res) { return res.json(); });
    };
    DomicilioEnvioProvider.prototype.setDomicilio = function (token, form) {
        var params = form;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        });
        return this.http.post(this.url, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    DomicilioEnvioProvider.prototype.updateDomicilio = function (token, form, domicilio_id) {
        var params = form;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        });
        return this.http.post(this.url + '/' + domicilio_id, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    DomicilioEnvioProvider.prototype.deleteDomicilio = function (token, domicilio_id) {
        var params = {
            "_method": "DELETE"
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        });
        return this.http.post(this.url + "/" + domicilio_id, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    DomicilioEnvioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DomicilioEnvioProvider);
    return DomicilioEnvioProvider;
}());

//# sourceMappingURL=domicilio-envio.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomicilioFiscalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DomicilioFiscalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DomicilioFiscalProvider = /** @class */ (function () {
    function DomicilioFiscalProvider(http) {
        this.http = http;
        console.log('Hello DomicilioFiscalProvider Provider');
        this.url = "http://byw.from-tn.com/motodream/api/fiscales";
    }
    DomicilioFiscalProvider.prototype.getDomicilio = function (token) {
        console.log(token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        });
        console.log(headers);
        return this.http.get(this.url, { headers: headers }).map(function (res) { return res.json(); });
    };
    DomicilioFiscalProvider.prototype.setDomicilio = function (token, form) {
        var params = form;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        });
        console.log(headers);
        return this.http.post(this.url, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    DomicilioFiscalProvider.prototype.updateDomicilio = function (token, form, domfiscal_id) {
        var domicilio_id = domfiscal_id;
        var params = form;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        });
        return this.http.post(this.url + '/' + domicilio_id, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    DomicilioFiscalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DomicilioFiscalProvider);
    return DomicilioFiscalProvider;
}());

//# sourceMappingURL=domicilio-fiscal.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MotoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MotoProvider = /** @class */ (function () {
    function MotoProvider(http) {
        this.http = http;
        console.log('Hello MotoProvider Provider');
        this.url = 'http://byw.from-tn.com/motodream/api/motos';
        this.url_marca = 'http://byw.from-tn.com/motodream/api/marcas';
        this.url_modelo = 'http://byw.from-tn.com/motodream/api/modelos';
    }
    MotoProvider.prototype.getMotos = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.get(this.url, { headers: headers }).map(function (res) { return res.json(); });
    };
    MotoProvider.prototype.setMoto = function (token, params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.url, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    MotoProvider.prototype.kmMoto = function (token, params, moto_id) {
        var method = {
            '_method': 'PUT'
        };
        params = params.concat(method);
        console.log(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.url + "/" + moto_id, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    MotoProvider.prototype.deleteMoto = function (token, moto_id) {
        var params = {
            '_method': 'DELETE'
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.url + '/' + moto_id, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    MotoProvider.prototype.getMarcas = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return this.http.get(this.url_marca, { headers: headers }).map(function (res) { return res.json(); });
    };
    MotoProvider.prototype.getModelos = function (marca_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return this.http.get(this.url_marca + '/' + marca_id + '/modelos', { headers: headers }).map(function (res) { return res.json(); });
    };
    MotoProvider.prototype.getVersiones = function (modelo_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return this.http.get(this.url_modelo + '/' + modelo_id + '/versiones', { headers: headers }).map(function (res) { return res.json(); });
    };
    MotoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], MotoProvider);
    return MotoProvider;
}());

//# sourceMappingURL=moto.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contrasena_contrasena__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tarjeta_tarjeta__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domicilio_envio_domicilio_envio__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domicilio_fiscal_domicilio_fiscal__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SettingPages = [
            { title: "Cambiar contraseña", component: __WEBPACK_IMPORTED_MODULE_2__contrasena_contrasena__["a" /* ContrasenaPage */] },
            { title: "Tarjetas", component: __WEBPACK_IMPORTED_MODULE_3__tarjeta_tarjeta__["a" /* TarjetaPage */] },
            { title: "Domicilio de entrega", component: __WEBPACK_IMPORTED_MODULE_4__domicilio_envio_domicilio_envio__["a" /* DomicilioEnvioPage */] },
            { title: "Domicilio fiscal", component: __WEBPACK_IMPORTED_MODULE_5__domicilio_fiscal_domicilio_fiscal__["a" /* DomicilioFiscalPage */] },
        ];
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.openPage = function (page) {
        this.navCtrl.push(page.component);
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\setting\setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle icon-only class="menu">\n      <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n      <!-- <ion-icon></ion-icon> -->\n    </button>\n    <ion-title>\n      Ajustes\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button clear end>\n        <ion-icon>\n          <img src="assets/imgs/dibujoarriba.png" alt="dream moto" width="25" height="25" />\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-list>\n      <button ion-item color="secondary" *ngFor="let p of SettingPages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContrasenaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ContrasenaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContrasenaPage = /** @class */ (function () {
    function ContrasenaPage(navCtrl, navParams, alertCtrl, _usuarioService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this._usuarioService = _usuarioService;
        this.storage = storage;
    }
    ContrasenaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContrasenaPage');
    };
    ContrasenaPage.prototype.onSubmit = function (formLogin) {
        var _this = this;
        // TODO
        if (!formLogin.valid) {
            this.alert("Formulario incompleto", 'por favor llene todos los campos');
        }
        else {
            var params_1 = formLogin.value;
            this.storage.get('access_token').then(function (val) {
                var token = JSON.parse(val);
                _this._usuarioService.changePass(token, params_1).subscribe(function (result) {
                    if (!result) {
                        _this.alert("Error", "Problemas con el servidor");
                    }
                    else {
                        if (result.failed) {
                            _this.alert("Error result", result.failed);
                        }
                        else {
                            console.log(result.message);
                            _this.alert("Actualizada", result.message);
                            _this._usuarioService.logout();
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                        }
                    }
                }, function (error) {
                    var err = JSON.parse(error._body);
                    // let errorMessage = JSON.parse(err._body);
                    formLogin.setValue({
                        password: "",
                        password_new: "",
                        password_new_confirmation: ""
                    });
                    console.log("Error: " + JSON.stringify(err));
                    console.log("ErrorMessage: " + JSON.stringify(err.error));
                    if (err.errors) {
                        if (err.errors.password_new) {
                            _this.alert("Tu contraseña nueva no coinciden", err.errors.password_new);
                        }
                    }
                    else {
                        _this.alert("Error:", err.error);
                    }
                });
            });
            // console.log(params);
        }
    };
    ContrasenaPage.prototype.regresar = function () {
        this.navCtrl.pop();
    };
    ContrasenaPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    ContrasenaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contrasena',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\contrasena\contrasena.html"*/'<!--\n  Generated template for the ContrasenaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cambiar Contraseña</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <form #formLogin="ngForm" (ngSubmit)="onSubmit(formLogin)">\n      <ion-item>\n        <ion-input type="password" name="password" ngModel #password="ngModel" required placeholder="Contraseña actual"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" name="password_new" ngModel #password_new="ngModel" required placeholder="Nueva contraseña"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" name="password_new_confirmation" ngModel #password_new_confirmation="ngModel" required placeholder="Repetir contraseña nueva"></ion-input>\n      </ion-item>\n        <button ion-button color="primary" type="submit" block>Guardar cambios</button>\n      </form>\n      <button ion-button color="light" (click)="regresar()" block>Cancelar</button>\n  </ion-list>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\contrasena\contrasena.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ContrasenaPage);
    return ContrasenaPage;
}());

//# sourceMappingURL=contrasena.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle icon-only class="menu">\n      <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n      <!-- <ion-icon></ion-icon> -->\n    </button>\n    <ion-title>Acerca de nosotros</ion-title>\n    <ion-buttons end>\n      <button ion-button clear end>\n        <ion-icon>\n          <img src="assets/imgs/dibujoarriba.png" alt="dream moto" width="25" height="25" />\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Acerca de nosotros\n    </ion-card-header>\n    <ion-card-content>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est quis est lobortis, ac rutrum ex suscipit. Nulla\n      at ex purus. Nam sit amet purus rutrum leo interdum molestie sed eget arcu. Fusce luctus velit libero, ut consectetur\n      sapien fringilla eget. Pellentesque lacinia congue congue. Nam volutpat porta lorem. Donec fringilla nibh ac leo mollis\n      sollicitudin. Sed eu leo sit amet erat tempus vehicula. Praesent suscipit pellentesque pretium. Aenean posuere sapien\n      ligula, sed condimentum velit rhoncus at. Fusce volutpat blandit turpis, sed elementum magna varius quis. Etiam aliquam\n      ut sem in fermentum. Sed augue nisi, sodales at urna vel, ullamcorper blandit nulla. Aliquam erat volutpat. Aenean\n      et pellentesque elit, a rhoncus massa.\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisclaimerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DisclaimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisclaimerPage = /** @class */ (function () {
    function DisclaimerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DisclaimerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisclaimerPage');
    };
    DisclaimerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-disclaimer',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\disclaimer\disclaimer.html"*/'<!--\n  Generated template for the DisclaimerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle icon-only class="menu">\n      <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n      <!-- <ion-icon></ion-icon> -->\n    </button>\n    <ion-title>Aviso legal y de privacidad</ion-title>\n    <ion-buttons end>\n      <button ion-button clear end>\n        <ion-icon>\n          <img src="assets/imgs/dibujoarriba.png" alt="dream moto" width="25" height="25" />\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Aviso Legal y de privacidad\n    </ion-card-header>\n    <ion-card-content>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est quis est lobortis, ac rutrum ex suscipit. Nulla\n      at ex purus. Nam sit amet purus rutrum leo interdum molestie sed eget arcu. Fusce luctus velit libero, ut consectetur\n      sapien fringilla eget. Pellentesque lacinia congue congue. Nam volutpat porta lorem. Donec fringilla nibh ac leo mollis\n      sollicitudin. Sed eu leo sit amet erat tempus vehicula. Praesent suscipit pellentesque pretium. Aenean posuere sapien\n      ligula, sed condimentum velit rhoncus at. Fusce volutpat blandit turpis, sed elementum magna varius quis. Etiam aliquam\n      ut sem in fermentum. Sed augue nisi, sodales at urna vel, ullamcorper blandit nulla. Aliquam erat volutpat. Aenean\n      et pellentesque elit, a rhoncus massa.\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\disclaimer\disclaimer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], DisclaimerPage);
    return DisclaimerPage;
}());

//# sourceMappingURL=disclaimer.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(307);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_handbook_handbook__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_m_dtv_m_dtv__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_emergencia_emergencia__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_myproductos_myproductos__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_producto_fotos_form_producto_fotos_form__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_producto_fotos_producto_fotos__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_productos_productos__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_moto_moto__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_moto_form_moto_form__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_list_list__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_register_register__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_login_login__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_usuario_usuario__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_user_user__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_setting_setting__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_tarjeta_tarjeta__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_contrasena_contrasena__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_about_about__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_disclaimer_disclaimer__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_tarjeta_tarjeta__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_tarjeta_form_tarjeta_form__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_domicilio_envio_domicilio_envio__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_domicilio_envio_domicilio_envio__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_domenvio_form_domenvio_form__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_domicilio_fiscal_domicilio_fiscal__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_domicilio_fiscal_domicilio_fiscal__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_domfiscal_form_domfiscal_form__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_moto_moto__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_motos_motos__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_producto_producto__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_productos_form_productos_form__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ionic_img_viewer__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_myproducto_myproducto__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_youtube_video_player__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_handbook_handbook__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_file_transfer__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_file__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_geolocation__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_rutas_rutas__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_rutas_map_rutas_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_ruta_usuario_ruta_usuario__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_native_sms__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_contacto_contacto__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_contactos_contactos__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_contacto_form_contacto_form__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_14__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_contrasena_contrasena__["a" /* ContrasenaPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_tarjeta_tarjeta__["a" /* TarjetaPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_tarjeta_form_tarjeta_form__["a" /* TarjetaFormPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_domicilio_envio_domicilio_envio__["a" /* DomicilioEnvioPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_domenvio_form_domenvio_form__["a" /* DomenvioFormPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_domicilio_fiscal_domicilio_fiscal__["a" /* DomicilioFiscalPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_domfiscal_form_domfiscal_form__["a" /* DomfiscalFormPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_motos_motos__["a" /* MotosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_moto_moto__["a" /* MotoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_moto_form_moto_form__["a" /* MotoFormPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_myproductos_myproductos__["a" /* MyproductosPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_productos_form_productos_form__["a" /* ProductosFormPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_producto_fotos_producto_fotos__["a" /* ProductoFotosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_producto_fotos_form_producto_fotos_form__["a" /* ProductoFotosFormPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_emergencia_emergencia__["a" /* EmergenciaPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_m_dtv_m_dtv__["a" /* MDtvPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_handbook_handbook__["a" /* HandbookPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_rutas_rutas__["a" /* RutasPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_rutas_map_rutas_map__["a" /* RutasMapPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_contactos_contactos__["a" /* ContactosPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_contacto_form_contacto_form__["a" /* ContactoFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_44__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_15_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contacto-form/contacto-form.module#ContactoFormPageModule', name: 'ContactoFormPage', segment: 'contacto-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactos/contactos.module#ContactosPageModule', name: 'ContactosPage', segment: 'contactos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/domenvio-form/domenvio-form.module#DomenvioFormPageModule', name: 'DomenvioFormPage', segment: 'domenvio-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/domfiscal-form/domfiscal-form.module#DomfiscalFormPageModule', name: 'DomfiscalFormPage', segment: 'domfiscal-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/domicilio-envio/domicilio-envio.module#DomicilioEnvioPageModule', name: 'DomicilioEnvioPage', segment: 'domicilio-envio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emergencia/emergencia.module#EmergenciaPageModule', name: 'EmergenciaPage', segment: 'emergencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/domicilio-fiscal/domicilio-fiscal.module#DomicilioFiscalPageModule', name: 'DomicilioFiscalPage', segment: 'domicilio-fiscal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/handbook/handbook.module#HandbookPageModule', name: 'HandbookPage', segment: 'handbook', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/m-dtv/m-dtv.module#MDtvPageModule', name: 'MDtvPage', segment: 'm-dtv', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/moto/moto.module#MotoPageModule', name: 'MotoPage', segment: 'moto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/moto-form/moto-form.module#MotoFormPageModule', name: 'MotoFormPage', segment: 'moto-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/motos/motos.module#MotosPageModule', name: 'MotosPage', segment: 'motos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producto-fotos-form/producto-fotos-form.module#ProductoFotosFormPageModule', name: 'ProductoFotosFormPage', segment: 'producto-fotos-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producto-fotos/producto-fotos.module#ProductoFotosPageModule', name: 'ProductoFotosPage', segment: 'producto-fotos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productos-form/productos-form.module#ProductosFormPageModule', name: 'ProductosFormPage', segment: 'productos-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productos/productos.module#ProductosPageModule', name: 'ProductosPage', segment: 'productos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rutas-map/rutas-map.module#RutasMapPageModule', name: 'RutasMapPage', segment: 'rutas-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tarjeta/tarjeta.module#TarjetaPageModule', name: 'TarjetaPage', segment: 'tarjeta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tarjeta-form/tarjeta-form.module#TarjetaFormPageModule', name: 'TarjetaFormPage', segment: 'tarjeta-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myproductos/myproductos.module#MyproductosPageModule', name: 'MyproductosPage', segment: 'myproductos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rutas/rutas.module#RutasPageModule', name: 'RutasPage', segment: 'rutas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_46_ionic_img_viewer__["a" /* IonicImageViewerModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_contrasena_contrasena__["a" /* ContrasenaPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_tarjeta_tarjeta__["a" /* TarjetaPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_tarjeta_form_tarjeta_form__["a" /* TarjetaFormPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_domicilio_envio_domicilio_envio__["a" /* DomicilioEnvioPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_domenvio_form_domenvio_form__["a" /* DomenvioFormPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_domicilio_fiscal_domicilio_fiscal__["a" /* DomicilioFiscalPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_domfiscal_form_domfiscal_form__["a" /* DomfiscalFormPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_motos_motos__["a" /* MotosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_moto_moto__["a" /* MotoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_moto_form_moto_form__["a" /* MotoFormPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_productos_productos__["a" /* ProductosPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_myproductos_myproductos__["a" /* MyproductosPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_productos_form_productos_form__["a" /* ProductosFormPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_producto_fotos_producto_fotos__["a" /* ProductoFotosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_producto_fotos_form_producto_fotos_form__["a" /* ProductoFotosFormPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_emergencia_emergencia__["a" /* EmergenciaPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_m_dtv_m_dtv__["a" /* MDtvPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_handbook_handbook__["a" /* HandbookPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_rutas_rutas__["a" /* RutasPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_rutas_map_rutas_map__["a" /* RutasMapPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_contactos_contactos__["a" /* ContactosPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_contacto_form_contacto_form__["a" /* ContactoFormPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_56__ionic_native_sms__["a" /* SMS */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
                { provide: __WEBPACK_IMPORTED_MODULE_14__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_15_ionic_angular__["l" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_tarjeta_tarjeta__["a" /* TarjetaProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_domicilio_envio_domicilio_envio__["a" /* DomicilioEnvioProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_domicilio_fiscal_domicilio_fiscal__["a" /* DomicilioFiscalProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_moto_moto__["a" /* MotoProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_producto_producto__["a" /* ProductoProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_myproducto_myproducto__["a" /* MyproductoProvider */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_49__providers_handbook_handbook__["a" /* HandbookProvider */],
                __WEBPACK_IMPORTED_MODULE_55__providers_ruta_usuario_ruta_usuario__["a" /* RutaUsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_57__providers_contacto_contacto__["a" /* ContactoProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomFiscal; });
var DomFiscal = /** @class */ (function () {
    function DomFiscal(id, pais, estado, municipio, ciudad, colonia, calle, numext, numint) {
        this.id = id;
        this.pais = pais;
        this.estado = estado;
        this.municipio = municipio;
        this.ciudad = ciudad;
        this.colonia = colonia;
        this.calle = calle;
        this.numext = numext;
        this.numint = numint;
    }
    return DomFiscal;
}());

//# sourceMappingURL=domicilio-fiscal.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_rutas_rutas__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_handbook_handbook__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_m_dtv_m_dtv__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_emergencia_emergencia__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_productos_productos__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_user__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_about__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_disclaimer_disclaimer__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_motos_motos__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_myproductos_myproductos__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, _usuarioService, menu, events, network, toastCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this._usuarioService = _usuarioService;
        this.menu = menu;
        this.events = events;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.loggedInPages = [
            { title: 'Emergencias', component: __WEBPACK_IMPORTED_MODULE_3__pages_emergencia_emergencia__["a" /* EmergenciaPage */] },
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_12__pages_user_user__["a" /* UserPage */] },
            // { title: 'List', component: ListPage },
            { title: 'MDtv', component: __WEBPACK_IMPORTED_MODULE_2__pages_m_dtv_m_dtv__["a" /* MDtvPage */] },
            { title: 'Handbook', component: __WEBPACK_IMPORTED_MODULE_1__pages_handbook_handbook__["a" /* HandbookPage */] },
            { title: "Ajustes", component: __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__["a" /* SettingPage */] },
            { title: "Acerca de nosotros", component: __WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */] },
            { title: "Aviso Legal y de privacidad", component: __WEBPACK_IMPORTED_MODULE_17__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */] },
            { title: "Mis motos", component: __WEBPACK_IMPORTED_MODULE_18__pages_motos_motos__["a" /* MotosPage */] },
            { title: 'Mis productos', component: __WEBPACK_IMPORTED_MODULE_20__pages_myproductos_myproductos__["a" /* MyproductosPage */] },
            { title: 'Productos', component: __WEBPACK_IMPORTED_MODULE_4__pages_productos_productos__["a" /* ProductosPage */] },
            { title: 'Rutas', component: __WEBPACK_IMPORTED_MODULE_0__pages_rutas_rutas__["a" /* RutasPage */] },
        ];
        this.loggedOutPages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */] },
            // { title: 'List', component: ListPage },
            { title: 'Registrate', component: __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */] },
            { title: 'Inicia sesión', component: __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */] },
            { title: 'Acerca de nosotros', component: __WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */] },
            { title: "Aviso Legal y de privacidad", component: __WEBPACK_IMPORTED_MODULE_17__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */] }
        ];
        this.access_token = "";
        this.initializeApp();
        this.listenToLoginEvents();
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            console.log('network was disconnected :(');
            var toast = _this.toastCtrl.create({
                message: 'Te desconectaste de tu red de datos. Tus cambios no se podrán guardar, por favor conectate pronto',
                // duration: 3000,
                showCloseButton: true,
                closeButtonText: 'Ok',
                position: 'middle'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        });
        console.log(this.network);
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            console.log('network connected!');
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(function () {
                if (_this.network.type === 'wifi') {
                    console.log('we got a wifi connection, woohoo!');
                }
            }, 3000);
        });
        this.storage.get("access_token").then(function (val) {
            // console.log("TOKEN: "+val);
            _this.access_token = val;
            if (_this.access_token == null || _this.access_token == "") {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
                _this.enableMenu(false);
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_user_user__["a" /* UserPage */];
                _this._usuarioService.estaLogeado().then(function (hasLoggedIn) {
                    _this.enableMenu(hasLoggedIn == true);
                    console.log("logeado");
                });
            }
        });
    }
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            console.log("eventlogin");
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    MyApp.prototype.enableMenu = function (loggedIn) {
        console.log("LoggedIn" + loggedIn);
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this._usuarioService.logout();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["r" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["r" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\app\app.html"*/'<!-- logged out menu -->\n\n<ion-menu id="loggedOutMenu" [content]="content">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menú</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- logged in menu -->\n\n<ion-menu id="loggedInMenu" [content]="content">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menú</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n\n\n    <ion-list>\n\n      <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button ion-item menuClose (click)="logout()">Salir</button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["v" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_14__providers_providers__["i" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["p" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["w" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_usuario__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, _usuarioService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuarioService = _usuarioService;
        this.alertCtrl = alertCtrl;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */](null, '', '', '', '', '', '', '');
        this.confirm_pass = '';
        this.confirm = false;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.usuario + this.confirm_pass);
        if (this.usuario.password != this.confirm_pass) {
            console.log("NO-coinciden");
            this.alert('Error', 'Las contraseñas introducidas no coinciden, vuelve a verificarlas');
            this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */](null, '', '', '', '', '', '', '');
            this.confirm_pass = '';
        }
        else {
            // console.log("entra al else, coincide");
            if (this.usuario.password == this.confirm_pass) {
                // this.alert('Success', "coinciden contraseñas " + this.usuario.name);
                this._usuarioService.addUsuario(this.usuario).subscribe(function (result) {
                    if (!result.usuario) {
                        _this.alert('Error', 'Problemas con el servidor. Contacte con su administrador de red.');
                        console.log(result);
                    }
                    else {
                        if (result) {
                            _this.usuario = result.usuario;
                            _this.alert("Success", "Usuario creado correctamente. Por favor " + _this.usuario.name + " " + _this.usuario.appaterno + " introduce tus credenciales.");
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        }
                        else {
                            console.log(result);
                        }
                    }
                }, function (error) {
                    _this.errorMessage = JSON.stringify(error);
                    if (_this.errorMessage != null) {
                        console.log(_this.errorMessage);
                        _this.alert('Error', 'Problemas con el servidor');
                    }
                });
            }
        }
    };
    RegisterPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle icon-only class="menu">\n\n        <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n\n        <!-- <ion-icon></ion-icon> -->\n\n      </button>\n\n    <ion-title>Registro</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button clear end>\n\n          <ion-icon><img src="assets/imgs/dibujoarriba.png" alt="dream moto" width="25" height="25"/></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Registrate con nosotros:\n\n      </ion-card-header>\n\n      <form #formRegister="ngForm" (ngSubmit)="onSubmit()">\n\n        <ion-item>\n\n          <ion-label floating>Nombre de usuario:</ion-label>\n\n          <ion-input type="text" name="username" #username="ngModel" [(ngModel)]="usuario.username" required autofocus></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Nombre completo:</ion-label>\n\n          <ion-input type="text" name="name" #name="ngModel" [(ngModel)]="usuario.name" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Apellido Paterno:</ion-label>\n\n          <ion-input type="text" name="appaterno" #appaterno="ngModel" [(ngModel)]="usuario.appaterno" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Apellido Materno:</ion-label>\n\n          <ion-input type="text" name="apmaterno" #apmaterno="ngModel" [(ngModel)]="usuario.apmaterno" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Correo electronico:</ion-label>\n\n          <ion-input type="mail" name="email" #email="ngModel" [(ngModel)]="usuario.email" pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z_-]{3,}([.]{1}[a-zA-Z_-]{2,}|[.]{1}[a-zA-Z_-]{2,}[.]{1}[a-zA-Z_-]{2,})" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Telefono móvil:</ion-label>\n\n          <ion-input type="text" name="telefono" #telefono="ngModel" [(ngModel)]="usuario.telefono" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Contraseña</ion-label>\n\n          <ion-input type="password" name="password" #password="ngModel" [(ngModel)]="usuario.password" required autofocus></ion-input>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n          <ion-label floating>Repetir Contraseña</ion-label>\n\n          <ion-input type="password" name="confirm_pass"  [(ngModel)]="confirm_pass" required autofocus></ion-input>\n\n        </ion-item>\n\n        <div padding>\n\n          <button ion-button color="light-yellow" type="submit" [disabled]="!formRegister.form.valid" block>Entrar</button>\n\n        </div>\n\n        \n\n      </form>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\register\register.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_providers__["i" /* UsuarioProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["i" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\home\home.html"*/'\n\n<ion-content scroll="false" class="backgroud">\n\n  <div class="splash-bg"></div>\n\n  <ion-header no-border>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle icon-only class="menu">\n\n        <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n\n        <!-- <ion-icon></ion-icon> -->\n\n      </button>\n\n      <ion-buttons end>\n\n        <button ion-button clear end>\n\n          <ion-icon><img src="assets/imgs/dibujoarriba.png" alt="dream moto" width="25" height="25"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      \n\n      \n\n    </ion-navbar>\n\n  </ion-header>\n\n  <div class="splash-info">\n\n    <div class="splash-logo"></div>\n\n    <div class="splash-intro">\n\n      Bienvenidos\n\n    </div>\n\n  </div>\n\n  <div padding>\n\n    <button ion-button color="black-yellow" (click)="register()" block>Registrarse</button>\n\n    <button ion-button color="light-yellow" (click)="login()" block>Entrar</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ContactoFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactoFormPage = /** @class */ (function () {
    function ContactoFormPage(navCtrl, navParams, contactoProv, alertCtrl, storage, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactoProv = contactoProv;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.edit = this.navParams.get('edit');
        console.log(this.edit);
        if (this.edit) {
            this.contacto = this.navParams.get('contacto');
            console.log(this.contacto);
        }
        else {
            if (this.navParams.get('firstcontact')) {
                this.contacto = {
                    id: '',
                    nombre: '',
                    numero: '',
                    principal: true,
                    averia: false,
                    accidente: false,
                    robo: false,
                };
            }
            this.contacto = {
                id: '',
                nombre: '',
                numero: '',
                principal: false,
                averia: false,
                accidente: false,
                robo: false,
            };
        }
        console.log(this.contacto);
    }
    ContactoFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactoFormPage');
    };
    ContactoFormPage.prototype.onSubmit = function (form) {
        var _this = this;
        if (!form.valid) {
            this.alert('Agregue un numero de telefono', 'El número telefonico es requerido y valido');
            if (this.edit) {
                form.setValue({
                    _method: "PUT",
                    nombre: this.contacto.nombre,
                    telefono: this.contacto.numero,
                });
            }
        }
        else {
            var params = form.value;
            this.storage.get('access_token').then(function (val) {
                var token = JSON.parse(val);
                if (_this.edit == true) {
                    _this.contactoProv.updateContacto(_this.contacto.id, params, token).subscribe(function (result) {
                        console.log(result);
                        if (result['contacto']) {
                            _this.alert('Creado', 'El contacto a sido creado');
                            _this.navCtrl.pop();
                            // this.viewCtrl.dismiss();
                        }
                    }, function (error) {
                        _this.alert('Error', 'Se a presentado un error, por favor intentelo más tarde');
                        form.setValue({
                            _method: "PUT",
                            nombre: _this.contacto.nombre,
                            telefono: _this.contacto.numero,
                        });
                        console.log(error);
                    });
                }
                else {
                    _this.contactoProv.setContacto(params, token).subscribe(function (result) {
                        if (result['contacto']) {
                            if (_this.navParams.get('firstcontact')) {
                                _this.viewCtrl.dismiss();
                                _this.alert('Creado', 'El contacto a sido creado');
                            }
                            else {
                                _this.navCtrl.pop();
                                _this.alert('Creado', 'El contacto a sido creado');
                            }
                        }
                    }, function (error) {
                        if (_this.navParams.get('firstcontact')) {
                            _this.viewCtrl.dismiss();
                            _this.alert('Error', 'Se a presentado un error, por favor intentelo más tarde');
                        }
                        else {
                            // this.navCtrl.pop();
                            _this.alert('Error', 'Se a presentado un error, por favor intentelo más tarde');
                        }
                    });
                }
            });
        }
    };
    ContactoFormPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    ContactoFormPage.prototype.regresar = function () {
    };
    ContactoFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacto-form',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\contacto-form\contacto-form.html"*/'<!--\n  Generated template for the ContactoFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agregar contacto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form action="ngSubmit" #formContacto="ngForm" (ngSubmit)="onSubmit(formContacto)" >\n    <ion-input *ngIf="edit" type="hidden" name="_method" ngModel="PUT" #_method="ngModel" required></ion-input>\n    <ion-item>\n      <ion-input type="text" name="nombre" ngModel="{{ contacto.nombre }}" #nombre="ngModel" placeholder="Nombre del contacto"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="tel" name="telefono" ngModel="{{contacto.numero}}" #telefono="ngModel" placeholder="Numero de telefono"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Contacto principal</ion-label>\n      <ion-toggle [(ngModel)]="contacto.principal" name="principal" #principal="ngModel"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Contacto averia</ion-label>\n      <ion-toggle [(ngModel)]="contacto.averia" name="averia" #averia="ngModel"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Contacto accidente</ion-label>\n      <ion-toggle [(ngModel)]="contacto.accidente" name="accidente" #accidente="ngModel"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Contacto robo o extravio</ion-label>\n      <ion-toggle [(ngModel)]="contacto.robo" name="robo" #robo="ngModel"></ion-toggle>\n    </ion-item>\n    <button ion-button color="primary" type="submit" block>Guardar domicilio</button>\n  </form>\n  <button ion-button color="light" (click)="regresar()" block>Cancelar</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\contacto-form\contacto-form.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* ContactoProvider */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* ContactoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* ContactoProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */]) === "function" && _f || Object])
    ], ContactoFormPage);
    return ContactoFormPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=contacto-form.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_usuario__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, _usuarioService, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuarioService = _usuarioService;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.pushPage = "HomePage";
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */](null, '', '', '', '', '', '', '');
    }
    LoginPage.prototype.ngOnInit = function () {
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */](null, '', '', '', '', '', '', '');
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.usuario);
        this._usuarioService.login(this.usuario).subscribe(function (result) {
            if (!result) {
                _this.alert('Error', 'Problemas con el servidor. Contacte con su administrador de red.');
            }
            else {
                if (result.failed) {
                    _this.alert('Error', result.failed);
                    _this.ngOnInit();
                }
                else {
                    console.log("Hecho :" + JSON.stringify(result));
                    _this._usuarioService.getToken(result, _this.usuario.password).subscribe(function (res) {
                        _this.alert('Bienvenido', 'Sessión exitosa');
                        console.log("TOKEN: " + JSON.stringify(res.access_token));
                        _this._usuarioService.loginData(res.access_token, res.refresh_token);
                        // this.storage.set("access_token",JSON.stringify(res.access_token));
                        // this.storage.set("refresh_token",JSON.stringify(res.refresh_token));
                        // this.storage.set(this.HAS_LOGGED_IN, true);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__user_user__["a" /* UserPage */]);
                        _this.storage.get("access_token").then(function (val) {
                            console.log('Your access_token is ' + val);
                        });
                    }, function (err) {
                        console.log("Error: " + err);
                        _this.alert("Error", JSON.stringify(err.failed));
                    });
                    // console.log(result);
                }
                // console.log(result.success);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                _this.alert('Error', 'Problemas con el servidor');
            }
        });
    };
    LoginPage.prototype.alert = function (titulo, contenido) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.goToRegistroPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle icon-only class="menu">\n\n      <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n\n      <!-- <ion-icon></ion-icon> -->\n\n    </button>\n\n    <ion-title>Inicia Sesión</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear end>\n\n        <ion-icon><img src="assets/imgs/dibujoarriba.png" alt="dream moto" width="25" height="25"/></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Iniciar Sesión\n\n    </ion-card-header>\n\n    <form #formLogin="ngForm" (ngSubmit)="onSubmit()">\n\n    <ion-item>\n\n      <ion-label floating>Correo Electronico/Username</ion-label>\n\n      <ion-input type="text" name="email" #email="ngModel" [(ngModel)]="usuario.email" required autofocus></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Contraseña</ion-label>\n\n      <ion-input type="password" name="password" #password="ngModel" [(ngModel)]="usuario.password" required></ion-input>\n\n    </ion-item>\n\n\n\n    <div padding>\n\n      <button ion-button color="light-yellow" type="submit" [disabled]="!formLogin.form.valid" block>Entrar</button>\n\n    </div>\n\n    </form>\n\n\n\n    <div padding>Se te olvido la contraseña <a target="_blank" href="http://localhost:3000/forgot">Entra aqui</a></div>\n\n    <div padding>¿No tienes una cuenta? <a (click)="goToRegistroPage()" >REGISTRATE</a></div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_providers__["i" /* UsuarioProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["i" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_usuario__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams, _usuarioService, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuarioService = _usuarioService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */](null, '', '', '', '', '', '', '');
    }
    UserPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: 'Cargando...' });
        loader.present();
        this.storage.get("access_token").then(function (val) {
            _this.access_token = val;
            if (_this.access_token == null || _this.access_token == "") {
            }
            else {
                _this._usuarioService.getUsuario(_this.access_token).subscribe(function (result) {
                    _this.usuario.id = result.id;
                    _this.usuario.username = result.username;
                    _this.usuario.name = result.name;
                    _this.usuario.appaterno = result.appaterno;
                    _this.usuario.apmaterno = result.apmaterno;
                    _this.usuario.email = result.email;
                    _this.usuario.telefono = result.telefono;
                    loader.dismiss();
                });
            }
            console.log("USUARIO" + _this.usuario);
        });
    };
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\user\user.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle icon-only class="menu">\n\n      <ion-icon md="md-menu" ios="ios-menu"></ion-icon>\n\n      <!-- <ion-icon></ion-icon> -->\n\n    </button>\n\n    <ion-title>{{ usuario.name+" "+usuario.appaterno+" "+usuario.apmaterno }} </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear end>\n\n        <ion-icon><img src="assets/imgs/dibujoarriba.png" alt="dream moto" width="25" height="25"/></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding scroll="false" class="backgroud">\n\n  <div class="splash-bg"></div>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\user\user.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_providers__["i" /* UsuarioProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["i" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoFotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_providers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__producto_fotos_form_producto_fotos_form__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProductoFotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductoFotosPage = /** @class */ (function () {
    function ProductoFotosPage(navCtrl, navParams, productProvider, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productProvider = productProvider;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.producto = navParams.get('producto');
        this.delete = navParams.get('delete');
        console.log(this.delete);
        // console.log(this.producto);
        this.url = "http://byw.from-tn.com/motodream/storage/";
    }
    ProductoFotosPage.prototype.ngOnInit = function () {
        this.fotos = [];
        this.showFotos(this.producto.id);
    };
    ProductoFotosPage.prototype.ionViewWillEnter = function () {
        this.ngOnInit();
    };
    ProductoFotosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductoFotosPage');
    };
    ProductoFotosPage.prototype.openForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__producto_fotos_form_producto_fotos_form__["a" /* ProductoFotosFormPage */], { 'producto': this.producto });
    };
    ProductoFotosPage.prototype.showFotos = function (id) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loader.present();
        this.storage.get('access_token').then(function (val) {
            var token = JSON.parse(val);
            _this.productProvider.getFotos(id, token).subscribe(function (result) {
                console.log(result);
                // result.
                _this.fotos = result['fotos'];
                console.log(_this.fotos);
                loader.dismiss();
            }, function (error) {
                console.log(error);
                loader.dismiss();
            });
        });
    };
    ProductoFotosPage.prototype.deletePhoto = function (imagen) {
        var _this = this;
        console.log(imagen);
        this.storage.get('access_token').then(function (val) {
            var token = JSON.parse(val);
            _this.productProvider.deleteImage(_this.producto.id, token, imagen.id).subscribe(function (result) {
                console.log(result);
                _this.ngOnInit();
            }, function (error) {
                console.log(error);
            });
        });
    };
    ProductoFotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-producto-fotos',template:/*ion-inline-start:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\producto-fotos\producto-fotos.html"*/'<!--\n  Generated template for the ProductoFotosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Fotos de {{producto.nombre}}</ion-title>\n    <ion-buttons end *ngIf="delete == \'true\'">\n      <button ion-button color="light" round icon-end icon-only end (click)="openForm()">\n        <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let imagen of fotos; let i = index">\n\n    <ion-buttons *ngIf="delete == \'true\'" >\n      <ion-fab right top class="delete">\n        <button ion-fab color="danger" mini (click)="deletePhoto(imagen)">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-fab>\n    </ion-buttons>\n\n    <!-- <ion-buttons end>\n        <button ion-button icon-only>\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons> -->\n    <ion-card-content>\n      <img src="{{url}}{{imagen[\'image_path\']}}" imageViewer>\n\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ivan Rojo\Desktop\moto_dream\src\pages\producto-fotos\producto-fotos.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_providers__["e" /* MyproductoProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_providers__["e" /* MyproductoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* LoadingController */]])
    ], ProductoFotosPage);
    return ProductoFotosPage;
}());

//# sourceMappingURL=producto-fotos.js.map

/***/ })

},[299]);
//# sourceMappingURL=main.js.map