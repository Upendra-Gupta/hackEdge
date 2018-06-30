import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalkinDataProviderPage } from './walkin-data-provider';

@NgModule({
  declarations: [
    WalkinDataProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(WalkinDataProviderPage),
  ],
})
export class WalkinDataProviderPageModule {}
