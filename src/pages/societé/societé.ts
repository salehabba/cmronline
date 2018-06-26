import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SocietéPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-societé',
  templateUrl: 'societé.html',
})
export class SocietéPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocietéPage');
  }

}
