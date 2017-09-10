import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaidlistPage } from './maidlist';

@NgModule({
  declarations: [
    MaidlistPage,
  ],
  imports: [
    IonicPageModule.forChild(MaidlistPage),
  ],
  exports: [
    MaidlistPage
  ]
})
export class MaidlistPageModule {}
