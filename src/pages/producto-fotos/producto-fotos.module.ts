import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductoFotosPage } from './producto-fotos';

@NgModule({
  declarations: [
    ProductoFotosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductoFotosPage),
  ],
})
export class ProductoFotosPageModule {}
