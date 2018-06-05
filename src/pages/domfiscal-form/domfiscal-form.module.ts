import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomfiscalFormPage } from './domfiscal-form';

@NgModule({
  declarations: [
    DomfiscalFormPage,
  ],
  imports: [
    IonicPageModule.forChild(DomfiscalFormPage),
  ],
})
export class DomfiscalFormPageModule {}
