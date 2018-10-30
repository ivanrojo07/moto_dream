import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmergenciaPage } from './emergencia';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [EmergenciaPage],
  imports: [
    IonicPageModule.forChild(EmergenciaPage), 
    NgxQRCodeModule,
  ]
})
export class EmergenciaPageModule {}
