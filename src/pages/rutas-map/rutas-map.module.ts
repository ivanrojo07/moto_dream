import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RutasMapPage } from './rutas-map';

@NgModule({
  declarations: [
    RutasMapPage,
  ],
  imports: [
    IonicPageModule.forChild(RutasMapPage),
  ],
})
export class RutasMapPageModule {}
