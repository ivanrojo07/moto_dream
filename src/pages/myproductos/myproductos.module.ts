import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyproductosPage } from './myproductos';

@NgModule({
  declarations: [
    MyproductosPage,
  ],
  imports: [
    IonicPageModule.forChild(MyproductosPage),
  ],
})
export class MyproductosPageModule {}
