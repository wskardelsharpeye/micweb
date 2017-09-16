import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { JoblistPage } from './joblist';

@NgModule({
  declarations: [
    JoblistPage,
  ],
  imports: [
    IonicPageModule.forChild(JoblistPage),
  ],
  exports: [
    JoblistPage
  ]
})
export class JoblistPageModule {}
