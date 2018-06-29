import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers} from '@angular/http';

/**
 * Generated class for the FemmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-femmes',
  templateUrl: 'femmes.html',
})
export class FemmesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.loadJson();     
  }

  ionViewDidLoad() {
     
  }
  users:any;
  loadJson(){
    this.http.get('https://www.cameroun-online.com/fr/ionicfem')
    .map(res => res.json())
    .subscribe(res =>{
      this.users = res.nodes;
      console.log(this.users.node);
    },(err)=>{
      alert("Erreur chargement vérifier votre connexion internet");
    });
    
   }
}

