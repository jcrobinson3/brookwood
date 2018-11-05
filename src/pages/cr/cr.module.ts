import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrPage } from './cr';

@NgModule({
  declarations: [
    CrPage,
  ],
  imports: [
    IonicPageModule.forChild(CrPage),
  ],
})
export class CrPageModule {}
