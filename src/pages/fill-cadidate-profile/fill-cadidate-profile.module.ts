import { NgModule } from '@angular/core';
import { IonicPageModule,IonicModule } from 'ionic-angular';
import { FillCadidateProfilePage } from './fill-cadidate-profile';

@NgModule({
  declarations: [
    FillCadidateProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(FillCadidateProfilePage),
  ],
  exports: [
    FillCadidateProfilePage
  ]
})
export class FillCadidateProfilePageModule {}
