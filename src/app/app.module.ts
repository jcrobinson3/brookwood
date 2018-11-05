import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { BrookwoodPage } from '../pages/brookwood/brookwood';
import { CrPage } from '../pages/cr/cr';
import { InventoryPage } from '../pages/inventory/inventory';
import { JournalPage } from '../pages/journal/journal';
import { ReportsPage } from '../pages/reports/reports';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    BrookwoodPage,
    CrPage,
    InventoryPage,
    JournalPage,
    ReportsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    BrookwoodPage,
    CrPage,
    InventoryPage,
    JournalPage,
    ReportsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
