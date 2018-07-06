import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductoFotosFormPage } from './producto-fotos-form';

@NgModule({
  declarations: [
    ProductoFotosFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductoFotosFormPage),
  ],
})
export class ProductoFotosFormPageModule {}
