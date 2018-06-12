import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MotosPage } from './motos';

@NgModule({
  declarations: [
    MotosPage,
  ],
  imports: [
    IonicPageModule.forChild(MotosPage),
  ],
})
export class MotosPageModule {}
