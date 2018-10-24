import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Generated class for the SplashscreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-splashscreen',
  templateUrl: 'splashscreen.html',
})
export class SplashscreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private splashScreen: SplashScreen) {
    this.splashScreen.show();
    this.splashScreen.hide();
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashscreenPage');
  }

}
