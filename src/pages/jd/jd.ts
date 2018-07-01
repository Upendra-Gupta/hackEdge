import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the JdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jd',
  templateUrl: 'jd.html',
})
export class JdPage {
  jd: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.jd = this.navParams.get('jd');
      
      /*this.jd= {
        "Title":"TCS Walkin",
        "Message":"Java Developer",
        "ETA": "20 mins away",
        "Location": "Sector 2, Noida",
        "Salary": "8-12 lpa",
        "JD" : "Minimum 5 years of experience as a Java web application developer in a large environment"
    };*/
  }
    
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad JdPage');
  }

}
