import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarjetaFormPage } from './tarjeta-form';

@NgModule({
  declarations: [
    TarjetaFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TarjetaFormPage),
  ],
})
export class TarjetaFormPageModule {}
