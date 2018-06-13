import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MotoFormPage } from './moto-form';

@NgModule({
  declarations: [
    MotoFormPage,
  ],
  imports: [
    IonicPageModule.forChild(MotoFormPage),
  ],
})
export class MotoFormPageModule {}
