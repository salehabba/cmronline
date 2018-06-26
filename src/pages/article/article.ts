import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
  
  share(mes,sub,fil,lin){
    this.socialSharing.share(this.message,this.subject,this.file,this.link)
    .then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
   }
}
