import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { Calendar } from '@ionic-native/calendar';


// import the class from the service
import { JdDataProvider } from '../../providers/jd-data/jd-data';


@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html'
  
})
export class AddEventPage {

  user: any;
  locations: any;
  event = { title: "", location: [], message: "", startDate: "", endDate: "" };

  constructor(public jdDataProvider: JdDataProvider, public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.user = this.jdDataProvider.getUser();
    this.locations = this.jdDataProvider.getLocation();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
    
  }

  save() {
    
    /*this.calendar.createEvent(this.event.location, this.event.message, this.event.startDate, new Date(this.event.endDate)).then(
        
      (msg) => {
        let alert = this.alertCtrl.create({
          title: 'Success!',
          subTitle: 'Event saved successfully',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
      },
      (err) => {
        let alert = this.alertCtrl.create({
          title: 'Failed!',
          subTitle: err,
          buttons: ['OK']
        });
        alert.present();
      }
    );*/
  }
  selectLocation(location){
    
    console.log("HERRRRRRRRRRRRRRRRRRRRrrrrrre");
    this.jdDataProvider.setPreferredLocation(location);
    
  }
  selectSkills(skill){
    
    console.log("HERRRRRRRRRRRRRRRRRRRRrrrrrre");
    this.jdDataProvider.setPreferredSkills(skill);
    
  }
  setShowBestCompany(bVal){
    this.jdDataProvider.setShowBestCompany(bVal.checked);
  }
  setNotificationForUpcomingWalkins(bVal){
    this.jdDataProvider.setNotificationForUpcomingWalkins(bVal.checked);
  }
  setUpcomingScheduledInterviews(bVal){
    this.jdDataProvider.setUpcomingScheduledInterviews(bVal.checked);
  }
  setPreferSalaryOverSkills(bVal){
    this.jdDataProvider.setPreferSalaryOverSkills(bVal.checked);
  }
  changeSalaryPreference(iVal){
    debugger;
    this.jdDataProvider.setSalaryPreference(iVal.ratio * 100);
  }
}
