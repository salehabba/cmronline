import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers} from '@angular/http';
import { ArticlePage } from '../article/article';

/**
 * Generated class for the TourismePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-tourisme',
  templateUrl: 'tourisme.html',
})
export class TourismePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.loadJson();     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocietéPage');
  }
  users:any;
  loadJson(){
    this.http.get('https://www.cameroun-online.com/fr/ionictou')
    .map(res => res.json())
    .subscribe(res =>{
      this.users = res.nodes;
      console.log(this.users.node);
    },(err)=>{
      alert("Erreur chargement vérifier votre connexion internet");
    });
    
   }
   article(user){
    this.navCtrl.push(ArticlePage,{
     'value':user
    });
  }
}

