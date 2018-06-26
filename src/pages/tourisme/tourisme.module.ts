import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourismePage } from './tourisme';

@NgModule({
  declarations: [
    TourismePage,
  ],
  imports: [
    IonicPageModule.forChild(TourismePage),
  ],
})
export class TourismePageModule {}
