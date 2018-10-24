import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ActualitésPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actualités',
  templateUrl: 'actualités.html',
})
export class ActualitésPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.loadJson();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActualitésPage');
  }
  users:any;

  loadJson(){
    this.http.get('https://www.cameroun-online.com/fr/ionic')
    .map(res => res.json())
    .subscribe(res =>{
      this.users = res.nodes;
      console.log(this.users.node);
    },(err)=>{
      alert("Erreur chargement vérifier votre connexion internet");
    });    
   }
}