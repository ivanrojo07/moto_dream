import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactoFormPage } from './contacto-form';

@NgModule({
  declarations: [
    ContactoFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactoFormPage),
  ],
})
export class ContactoFormPageModule {}
