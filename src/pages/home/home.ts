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
  isSettingClicked: any;

    selectedJobId: any;

  constructor(public jdDataProvider: JdDataProvider, private alertCtrl: AlertController,
    public navCtrl: NavController,
    private calendar: Calendar) {
    //this.selectedJobId="Helllllllllllllllllllllllllllllllllllllllllllllllllll";
        
        console.log('home page constructor');
        
        this.selectedEvent = new Array();
        this.isSelected =false;
        this.selectedDay = new Array();
        this.isSettingClicked = false;
    }

  ionViewWillEnter() {
    console.log('home page ionView');
    this.date = new Date();
    this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.getDaysOfMonth();
    this.loadEventThisMonth();
    
   /* if(this.isSettingClicked === false){
        this.isSelectedDate = 0;
    } else {
        this.isSettingClicked = false;
    }*/
    this.selectWalkinsForMonth();
    if(this.isSelected){
        //this.selectedEvent = this.selectedDay[this.isSelectedDate];
        this.selectDate(this.isSelectedDate);
    } else {
        
        this.selectDate(this.currentDate);
    }
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
    this.isSettingClicked = true;
    this.navCtrl.push(AddEventPage);
  }

  loadEventThisMonth() {
    /*this.eventList = new Array();
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
    );*/
  }

  checkEvent(day) {
    var hasEvent = false;
    //var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";
    //var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
    /*this.eventList.forEach(event => {
      if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        hasEvent = true;
      }
    });*/
    
    if(this.selectedDay && this.selectedDay[day] && this.selectedDay[day].length > 0){
        
        return this.getPreferenceColour(this.selectedDay[day][0]);
    } else {
        return 0;
    }
  }
  getPreferredCount(sWalkinSkillSet, aUserSkillSet){
    var aWalkinSkillSet = sWalkinSkillSet.replace(/ /g, '').split(",");
    
    var aUserSkillHash = new Array();
    var i = 0;
    for(i = 0; i < aUserSkillSet.length; ++i){
        aUserSkillHash[aUserSkillSet[i].toLowerCase()] = 1;
    }
    var common = 0;
    for(i = 0; i < aWalkinSkillSet.length; ++i){
        if(aUserSkillHash[aWalkinSkillSet[i].toLowerCase()]){
            common +=1;
        }
    }
    return common;
  }
  calculatePreference(oWalkin){
    var oUser = this.jdDataProvider.getUser();
    
    var currentCTC = parseFloat(oUser.CurrentCTC.split(" ")[0]);
    var oMinCTCUserCanGet = parseFloat(oWalkin.Salary.split("-")[0].replace(/ /g, ''));
    var oMaxCTCUserCanGet = parseFloat(oWalkin.Salary.split("-")[1].replace(/ /g, ''));
    

    if(oMinCTCUserCanGet > oMaxCTCUserCanGet){
        oMaxCTCUserCanGet = oMaxCTCUserCanGet + oMinCTCUserCanGet;
        oMinCTCUserCanGet = oMaxCTCUserCanGet - oMinCTCUserCanGet;
        oMaxCTCUserCanGet = oMaxCTCUserCanGet - oMinCTCUserCanGet;
    }
    
    var CTCContribution = 50;
    
    if(oUser.PreferSalaryOverSkills){
        CTCContribution += (oUser.SalaryPreference * 35)/100;;
    
    }
    var SkillContribution = 100 - CTCContribution;
     if(currentCTC*1.5 <= oMinCTCUserCanGet){
        CTCContribution = CTCContribution;
    } else if(currentCTC >= oMaxCTCUserCanGet){
        CTCContribution = (CTCContribution * 33)/100;
    } 
    else if(currentCTC > oMinCTCUserCanGet && currentCTC < oMaxCTCUserCanGet){
        var prob = (oMaxCTCUserCanGet - currentCTC)/(oMaxCTCUserCanGet - oMinCTCUserCanGet);
        CTCContribution = (CTCContribution * 67)/100 * prob;
    }  else {
        CTCContribution = CTCContribution * ((((oMaxCTCUserCanGet + oMinCTCUserCanGet)/2 - currentCTC)/currentCTC)*107)/100;
    }
   
    //CTCContribution = (CTCContribution * ((oMaxCTCUserCanGet - currentCTC)/currentCTC) * 1.09)/100;
    var iPreferredSkillsCount = oUser.PreferredSkills.length;
    var iPreferredCount = this.getPreferredCount(oWalkin.skills, oUser.PreferredSkills);
    if(iPreferredCount !== 0){
        if(iPreferredSkillsCount === 0) iPreferredSkillsCount = oUser.Skills.length;
        if(iPreferredSkillsCount === 0){
             SkillContribution = 0;
        } else {
            SkillContribution = SkillContribution * (iPreferredCount / iPreferredSkillsCount);
            var iConsideringSkillInWalkin = SkillContribution * (iPreferredCount / oWalkin.skills.replace(/ /g, '').split(",").length);
            if(SkillContribution < iConsideringSkillInWalkin){
                SkillContribution = iConsideringSkillInWalkin;
            }
        }
    } else {    
        SkillContribution = 0;
    }
    
    return CTCContribution + SkillContribution;
  }
  getPreferenceColour(oWalkin){
    var TotalContribution = this.calculatePreference(oWalkin);
    if(TotalContribution >= 67){
        return 3;
    } else if(TotalContribution >= 33){
        return 2;
    } else {
        return 1;
    }
    
    
  }
  getPreferenceRating(oWalkin){
    var TotalContribution = this.calculatePreference(oWalkin);
    return TotalContribution > 100 ? 100 : TotalContribution;
  }
  filterItems(items){
        if(!items || items.length === 0) return new Array();
        var oUser = this.jdDataProvider.getUser();
        var aFilters = oUser.Skills;
        var count = 0;
        if(oUser.PreferredSkills.length === 0){
            oUser.PreferredSkills = oUser.Skills;
            this.jdDataProvider.setPreferredSkills(oUser.Skills);
        }
        //var aPreferredFilters = oUser.PreferredSkills;
        var oFilterWalkins = new Array();
        if(oUser.ShowBestCompany === "true" || oUser.ShowBestCompany === true){
            var aFilterSkills = new Array();
            //var aPreferredSkillFilters = new Array();
            aFilters.forEach(skil => {
                aFilterSkills[skil.toLowerCase()] = 1;
            });
            /*aPreferredFilters.forEach(skil => {
                aPreferredSkillFilters[skil.toLowerCase()] = 1;
            });*/

            
            items.filter((item) => {
                 var aSkills = item.skills.replace(/ /g, '').split(",");
                 count = 0;
                 //item.preferredCount = 0;
                 aSkills.forEach(skil => {
                    if(aFilterSkills[skil.toLowerCase()]){
                       count += 1;
                    }
                    /*if(aPreferredSkillFilters[skil.toLowerCase()]){
                        item.preferredCount += 1;
                    }*/
                 });
                 if(count > 0){
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
             
             count = 0;
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
    var that = this;
    //var aUserSkillSet = that.jdDataProvider.getUser().PreferredSkills;
    return aItems.sort(function(a, b){
       // debugger;
        
        
        return (that.getPreferenceRating(b)-that.getPreferenceRating(a));
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
    
    //debugger;
    var aWalkins = JSON.parse(JSON.stringify(this.jdDataProvider.getJd()[day]));
    var aEvent = this.filterItems(aWalkins);
    aEvent = this.sortItems(aEvent);
    /*{
        Title:"TCS Walkin",
        Message:"Java Developers",
        ETA: "20 mins away",
        Location: "Sector 2, Noida",
        Salary: "8-12 lpa"
       
    };*/
    
   
   this.selectedDay[day] = aEvent;
   
  }
  selectDate(day) {
        
        this.isSelectedDate=day;
        this.isSelected = true
        
        if(day <= Object.keys(this.selectedDay).length){
            for(var i = 0; i < this.selectedDay[day].length; ++i){
                this.selectedDay[day][i].Rating = this.getPreferenceRating(this.selectedDay[day][i]);
            }
            this.selectedEvent = this.selectedDay[day];
        } else {
            this.selectedEvent = new Array();
        }
        
        
  }
  selectWalkin(walkin) {
    
    this.navCtrl.push(JdPage, {jd:walkin});
  }
  deleteEvent(evt) {
    // console.log(new Date(evt.startDate.replace(/\s/, 'T')));
    // console.log(new Date(evt.endDate.replace(/\s/, 'T')));
    /*let alert = this.alertCtrl.create({
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
    alert.present();*/
  }

}
