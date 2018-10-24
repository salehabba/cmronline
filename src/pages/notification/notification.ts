import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular/platform/platform';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private localNoti: LocalNotifications, private platform:Platform) {
  }

  btnPushClicked() {
    this.platform.ready().then(() => {
      this.localNoti.schedule({
        title:'Test Noti',
        text: 'Premiere noti',
        trigger: { at: new Date(new Date().getTime() + 3600) },
        led: 'FF0000',
        sound: null
      });
    });
  }
}
