import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductosFormPage } from './productos-form';

@NgModule({
  declarations: [
    ProductosFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductosFormPage),
  ],
})
export class ProductosFormPageModule {}
