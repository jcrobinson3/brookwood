import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { JournalPage } from '../pages/journal/journal';
import { InventoryPage } from '../pages/inventory/inventory';
import { ReportsPage } from '../pages/reports/reports';
import { BrookwoodPage } from '../pages/brookwood/brookwood';
import { CrPage } from '../pages/cr/cr';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HomePage;
  pages: Array<{title: string, component: any}>;
    constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Introduction', component: HomePage },
      { title: 'Journal', component: JournalPage },
      { title: 'Inventory', component: InventoryPage },
      { title: 'Report', component: ReportsPage },
      { title: 'Brookwood Church', component: BrookwoodPage},
      { title: 'Celebrate Recovery', component: CrPage},
      { title: 'App Settings', component: SettingsPage},
      { title: 'About this App', component: AboutPage}
      ];
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
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
