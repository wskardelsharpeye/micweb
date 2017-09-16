import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { RolechoosePage } from './rolechoose';

@NgModule({
  declarations: [
    RolechoosePage,
  ],
  imports: [
    IonicPageModule.forChild(RolechoosePage),
  ],
  exports: [
    RolechoosePage
  ]
})
export class RolechoosePageModule {}
