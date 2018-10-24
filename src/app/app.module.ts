import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LocalNotifications } from '@ionic-native/local-notifications';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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
import {SplashscreenPage} from '../pages/splashscreen/splashscreen';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SocietéPage,
    CultureArtPage,
    AnnoncePage,
    PeoplesPage,
    FemmesPage,
    InternationalPage,
    TourismePage,
    AlaunePage,
    SemainePage,
    ArticlePage,
    LanguePage,
    NotificationPage,
    TalletextePage,
    AidePage,
    ContactPage,
    EvaluerappliPage,
    AproposPage,
    SplashscreenPage    

  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SocietéPage,
    CultureArtPage,
    AnnoncePage,
    PeoplesPage,
    FemmesPage,
    InternationalPage,
    TourismePage,
    AlaunePage,
    SemainePage,
    ArticlePage,
    NotificationPage,
    TalletextePage,
    AidePage,
    ContactPage,
    EvaluerappliPage,
    AproposPage,

    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    SocialSharing,
    LocalNotifications

  ]
})
export class AppModule {}
