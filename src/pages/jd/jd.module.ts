import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JdPage } from './jd';

@NgModule({
  declarations: [
    JdPage,
  ],
  imports: [
    IonicPageModule.forChild(JdPage),
  ],
})
export class JdPageModule {}
