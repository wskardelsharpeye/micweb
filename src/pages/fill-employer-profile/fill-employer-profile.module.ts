import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { FillEmployerProfilePage } from './fill-employer-profile';

@NgModule({
  declarations: [
    FillEmployerProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(FillEmployerProfilePage),
  ],
  exports: [
    FillEmployerProfilePage
  ]
})
export class FillEmployerProfilePageModule {}
