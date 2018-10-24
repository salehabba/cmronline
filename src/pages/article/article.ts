import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
  info
  info7jrs
  message:string=null;
  subject:string=null;
  file:string=null;
  link:string=null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
    this.info=navParams.get('value');
    this.info7jrs=navParams.get('valuejrs');
  }
  ionViewDidLoad() {
   
  }
  
  shareSheetShare() {
    this.socialSharing.share("Share message", "Share subject", "URL to file or image", "A URL to share").then(() => {
      console.log("shareSheetShare: Success");
    }).catch(() => {
      console.error("shareSheetShare: failed");
    });
  }    
}
