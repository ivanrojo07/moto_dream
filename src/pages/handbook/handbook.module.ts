import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HandbookPage } from './handbook';

@NgModule({
  declarations: [
    HandbookPage,
  ],
  imports: [
    IonicPageModule.forChild(HandbookPage),
  ],
})
export class HandbookPageModule {}
