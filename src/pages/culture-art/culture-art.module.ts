import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CultureArtPage } from './culture-art';

@NgModule({
  declarations: [
    CultureArtPage,
  ],
  imports: [
    IonicPageModule.forChild(CultureArtPage),
  ],
})
export class CultureArtPageModule {}
