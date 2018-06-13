import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MotoPage } from './moto';

@NgModule({
  declarations: [
    MotoPage,
  ],
  imports: [
    IonicPageModule.forChild(MotoPage),
  ],
})
export class MotoPageModule {}
