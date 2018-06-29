import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LanguePage } from './langue';

@NgModule({
  declarations: [
    LanguePage,
  ],
  imports: [
    IonicPageModule.forChild(LanguePage),
  ],
})
export class LanguePageModule {}
