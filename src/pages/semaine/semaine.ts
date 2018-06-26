import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the SemainePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-semaine',
  templateUrl: 'semaine.html'
})
export class SemainePage {

  alauneRoot = 'AlaunePage'
  filinfosRoot = 'FilinfosPage'
  pluslusRoot = 'PluslusPage'


  constructor(public navCtrl: NavController) {}

}
