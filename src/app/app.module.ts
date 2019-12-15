import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BooksPage} from '../pages/books/books';
import {TabsPage} from "../pages/tabs/tabs";
import {SettingsPage} from "../pages/settings/settings";
import {BooksService} from "../services/books.service";
import {SingleBookPage} from "../pages/single-book/single-book";
import {CdsPage} from "../pages/cds/cds";
import {CdsService} from "../services/cds.service";
import {SingleCdsPage} from "../pages/single-cds/single-cds";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BooksPage,
    SingleBookPage,
    TabsPage,
    SettingsPage,
    CdsPage,
    SingleCdsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BooksPage,
    SingleBookPage,
    TabsPage,
    SettingsPage,
    CdsPage,
    SingleCdsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BooksService,
    CdsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
