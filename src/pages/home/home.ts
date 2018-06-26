import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {Observable} from'rxjs/Observable'
import { Platform } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Http, Headers} from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import 'rxjs/add/operator/map';
import { ArticlePage } from '../article/article';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
   data:Observable<any>;
   message:string=null;
   subject:string=null;
   file:string=null;
   link:string=null;
  pet: string = "filinfos";
  isAndroid: boolean = false;
  type: boolean = false;
  pagination: number=1;
  searchKeyword:any;
  use:any;
  splash = true;
  
  constructor(public navCtrl: NavController,  platform: Platform,
      public http: Http, private socialSharing: SocialSharing, private toastCtrl:ToastController) {
      this.isAndroid = platform.is('android');
      this.loadJson();
      this.loadJson7jrs();  
  }
      users:any;
      users7jrs:any;
      mes:any;
      sub:any;
      fil:any;
      lin:any;
      ionViewDidLoad() {
        setTimeout(() => this.splash = false, 5000);
      }
      loadJson(){
       this.http.get('https://www.cameroun-online.com/fr/ionic')
       .map(res => res.json())
       .subscribe(res =>{
         this.users = res.nodes;
       },(err)=>{
         alert("Erreur chargement vérifier votre connexion internet");
       });
       
      }
     doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.http.get('https://www.cameroun-online.com/fr/ionic')
       .map(res => res.json())
       .subscribe(res =>{
         this.users = res.nodes;
         console.log('Async operation has ended');
      infiniteScroll.complete();
    }, (err)=>{
      alert("Erreur chargement vérifier votre connexion internet");
    });
  })
  }
      getData(){
        this.data=this.http.get('https://www.cameroun-online.com/fr/ionic');
        this.data.subscribe(data=>{
          this.use = data;
        });
      }
      loadJson7jrs(){
        this.http.get('https://www.cameroun-online.com/fr/ionic7jrs')
        .map(res => res.json())
        .subscribe(res =>{
          this.users7jrs = res.nodes;
        },(err)=>{
          alert("Erreur chargement vérifier votre connexion internet");
        });
       } 
      article(user){
        this.navCtrl.push(ArticlePage,{
         'value':user
        });
      }
      article7jrs(user7jrs){
        this.navCtrl.push(ArticlePage,{
         'value7jrs':user7jrs
        });
      }
     share(){
      this.socialSharing.share(this.users.node.title, this.users.node.Corps, null, null)
      .then(() => {
        // Success!
      }).catch(() => {
        // Error!
      });
     }     
     infiniteScrool(ev){
       this.pagination++;
       if(this.type === false){
        this.http.get('https://www.cameroun-online.com/fr/ionic')
        .map(res => res.json())
        .subscribe(res =>{
           ev.complete()
           if(res.json().lenght === 0){
           let toast= this.toastCtrl.create({
             message:'Pas plus',
             duration: 2000
           });
           toast.present()
           }
           else{
             for(let i of res.json()){
               this.users.push(i);
             }
           }
         })
       }
       else if(this.type === true){
         this.users.loadJson(this.searchKeyword, this.pagination).suscribe(data=>{
           if(data.json().lenght === 0){
             let toast= this.toastCtrl.create({
               message:'Plus',
               duration:3000
             });
             toast.present();
           }
           else{
             for(let i of data.json()){
               this.users.push(i);
             }
           }
         })
       }
     }
    
    }
    