import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SemainePage } from './semaine';

@NgModule({
  declarations: [
    SemainePage,
  ],
  imports: [
    IonicPageModule.forChild(SemainePage),
  ]
})
export class SemainePageModule {}
