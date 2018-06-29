import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ActualitésPage } from '../pages/actualités/actualités';
import { SocietéPage } from '../pages/societé/societé';
import { CultureArtPage } from '../pages/culture-art/culture-art';
import { AnnoncePage } from '../pages/annonce/annonce';
import { PeoplesPage } from '../pages/peoples/peoples';
import { FemmesPage } from '../pages/femmes/femmes';
import { InternationalPage } from '../pages/international/international';
import { TourismePage } from '../pages/tourisme/tourisme';
import { AlaunePage} from '../pages/alaune/alaune';
import { SemainePage} from '../pages/semaine/semaine';
import { ArticlePage} from '../pages/article/article';
import { LanguePage} from '../pages/langue/langue';
import { NotificationPage} from '../pages/notification/notification';
import { TalletextePage} from '../pages/talletexte/talletexte';
import { AidePage} from '../pages/aide/aide';
import { ContactPage} from '../pages/contact/contact';
import { EvaluerappliPage} from '../pages/evaluerappli/evaluerappli';
import { AproposPage} from '../pages/apropos/apropos';

import { MenuController } from 'ionic-angular/components/app/menu-controller';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;


  pages: Array<{title: string, component: any}>;
  pages2 : Array<{title: string, component: any}>;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menu: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Fil Infos', component: HomePage },
      { title: 'Societé', component: SocietéPage },
      { title: 'CultureArt', component: CultureArtPage },
      { title: 'Annonce', component: AnnoncePage },
      { title: 'Peoples', component: PeoplesPage },
      { title: 'Femmes', component: FemmesPage },
      { title: 'International', component: InternationalPage },
      { title: 'Tourisme', component: TourismePage }
    ];
    this.pages2 = [
      { title: 'LANGUE', component:  LanguePage },
      { title: 'NOTIFICATION', component:  NotificationPage },
      { title: 'TAILLE TEXTE', component: TalletextePage },
      { title: 'AIDE', component: AidePage },
      { title: 'CONTACT', component: ContactPage },
      { title: 'EVALUER APPLI', component: EvaluerappliPage },
      { title: 'A PROPOS', component: AproposPage }
      
    ];
  
    this.menu.enable(true, 'menu1');
    this.menu.enable(true, 'menu2');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
