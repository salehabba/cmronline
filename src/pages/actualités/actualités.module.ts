import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActualitésPage } from './actualités';

@NgModule({
  declarations: [
    ActualitésPage,
  ],
  imports: [
    IonicPageModule.forChild(ActualitésPage),
  ],
})
export class ActualitésPageModule {}
