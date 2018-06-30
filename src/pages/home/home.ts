import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AddEventPage } from '../add-event/add-event';
import { EditEventPage } from '../edit-event/edit-event';
import { Calendar } from '@ionic-native/calendar';
import { JdPage } from '../jd/jd';


// import the class from the service
import { JdDataProvider } from '../../providers/jd-data/jd-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {

  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  eventList: any;
  selectedEvent: any;
  isSelected: any;
  isSelectedDate: any;
  selectedDay: any;

    selectedJobId: any;

  constructor(public jdDataProvider: JdDataProvider, private alertCtrl: AlertController,
    public navCtrl: NavController,
    private calendar: Calendar) {
    this.selectedJobId="Helllllllllllllllllllllllllllllllllllllllllllllllllll";
        
        
    }

  ionViewWillEnter() {
    this.date = new Date();
    this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.getDaysOfMonth();
    this.loadEventThisMonth();
    this.selectedDay = new Array();
        this.selectedEvent = new Array();
        this.isSelected = true;
       this.selectWalkinsForMonth();
  }

  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }

    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }

    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    for (var j = 0; j < thisNumOfDays; j++) {
      this.daysInThisMonth.push(j+1);
    }

    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (var k = 0; k < (6-lastDayThisMonth); k++) {
      this.daysInNextMonth.push(k+1);
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for(var l = (7-lastDayThisMonth); l < ((7-lastDayThisMonth)+7); l++) {
        this.daysInNextMonth.push(l);
      }
    }
  }

  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
  }

  addEvent() {
  
    this.navCtrl.push(AddEventPage);
  }

  loadEventThisMonth() {
    this.eventList = new Array();
    var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    var endDate = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0);
    this.calendar.listEventsInRange(startDate, endDate).then(
      (msg) => {
        msg.forEach(item => {
          this.eventList.push(item);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  checkEvent(day) {
    var hasEvent = false;
    var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";
    var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
    this.eventList.forEach(event => {
      if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        hasEvent = true;
      }
    });
    return true;
  }
  filterItems(items){
        var oUser = this.jdDataProvider.getUser();
        var aFilters = oUser.Skills;
        var aPreferredFilters = oUser.PreferredSkills;
        var oFilterWalkins = new Array();
        if(oUser.ShowBestCompany === "true" || oUser.ShowBestCompany === true){
            var aFilterSkills = new Array();
            var aPreferredSkillFilters = new Array();
            aFilters.forEach(skil => {
                aFilterSkills[skil.toLowerCase()] = 1;
            });
            aPreferredFilters.forEach(skil => {
                aPreferredSkillFilters[skil.toLowerCase()] = 1;
            });

            
            items.filter((item) => {
                 var aSkills = item.skills.split(",");
                 item.count = 0;
                 item.preferredCount = 0;
                 aSkills.forEach(skil => {
                    if(aFilterSkills[skil.toLowerCase()]){
                       item.count += 1;
                    }
                    if(aPreferredSkillFilters[skil.toLowerCase()]){
                        item.preferredCount += 1;
                    }
                 });
                 if(item.count > 0){
                    oFilterWalkins.push(item);
                 }
                 //item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
        } else {
           oFilterWalkins = items;
        }
        var aFilterLocations = new Array();
        var oLocationPreference = oUser.LocationPreference;
        oLocationPreference.forEach(loc => {
            aFilterLocations.push(loc.toLowerCase());
        });
        var oWalkins = new Array();
        oFilterWalkins.filter((item) => {
             var location = item.Location.toLowerCase();
             
             var count = 0;
             aFilterLocations.forEach(loc => {
                if(location.indexOf(loc.toLowerCase()) > -1){
                   count = 1;
                   //break;
                }
             });
             if(count > 0){
                oWalkins.push(item);
             }
        });
        return oWalkins;
 
  }
  sortItems(aItems){
    return aItems.sort(function(a, b){
        return (a.preferredCount-b.preferredCount);
    });
  }
  selectWalkinsForMonth(){
    var len = Object.keys(this.jdDataProvider.getJd()).length;
    var i = 0;
    for(i = 1; i <= len; ++i){
        this.selectDateHelper(i);
    }
  }
  selectDateHelper(day) {
    this.isSelected = false;
    //var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";
    //var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
    //debugger;
    var aEvent = this.filterItems(this.jdDataProvider.getJd()[day]);
    aEvent = this.sortItems(aEvent);
    /*{
        Title:"TCS Walkin",
        Message:"Java Developers",
        ETA: "20 mins away",
        Location: "Sector 2, Noida",
        Salary: "8-12 lpa"
       
    };*/
    
    //this.eventList.forEach(event => {
    //  if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        
        this.isSelectedDate=day;
        this.selectedDay[day] = aEvent;
      //}
    //});
  }
  selectDate(day) {
    //if(this.isSelected){
        
        this.isSelected = false;
    //}
    this.selectedEvent = this.selectedDay[day];
  }
  selectWalkin(walkin) {
    
    this.navCtrl.push(JdPage, {status: walkin});
  }
  deleteEvent(evt) {
    // console.log(new Date(evt.startDate.replace(/\s/, 'T')));
    // console.log(new Date(evt.endDate.replace(/\s/, 'T')));
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Are you sure want to delete this event?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.calendar.deleteEvent(evt.title, evt.location, evt.notes, new Date(evt.startDate.replace(/\s/, 'T')), new Date(evt.endDate.replace(/\s/, 'T'))).then(
              (msg) => {
                console.log(msg);
                this.loadEventThisMonth();
                this.selectDate(new Date(evt.startDate.replace(/\s/, 'T')).getDate());
              },
              (err) => {
                console.log(err);
              }
            )
          }
        }
      ]
    });
    alert.present();
  }

}
