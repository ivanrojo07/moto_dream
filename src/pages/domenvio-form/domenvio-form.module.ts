import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomenvioFormPage } from './domenvio-form';

@NgModule({
  declarations: [
    DomenvioFormPage,
  ],
  imports: [
    IonicPageModule.forChild(DomenvioFormPage),
  ],
})
export class DomenvioFormPageModule {}
