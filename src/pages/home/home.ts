import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AddEventPage } from '../add-event/add-event';

//import { Calendar } from '@ionic-native/calendar';
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
  ScheduleOn: any;
  SchedulePreference: any;
  currLats: any;
  currLongs: any;
  getCoordsPos: any;
  Lats: any;
  Longs: any;
  isJDNavigated: any;
    

  constructor(public jdDataProvider: JdDataProvider, public navCtrl: NavController,public navParams: NavParams
    ) {
    //this.selectedJobId="Helllllllllllllllllllllllllllllllllllllllllllllllllll";
        
        console.log('home page constructor');
        
        this.selectedEvent = new Array();
        this.isSelected =false;
        this.selectedDay = new Array();
        this.isSettingClicked = false;
        this.getCoordsPos = {
            "noida" : 0,
            "bangalore" : 1,
            "new delhi": 2,
            "gurgaon" : 3,
            "gurugram" : 3,
            "pune" : 4,
            "chennai" : 5,
            "madras" : 5,
            "hyderabad" : 6,
            "banglore" : 1,
            "bengaluru" : 1
        };
        this.currLats = 28.5137;
        this.currLongs = 77.3769;
        this.Lats = this.jdDataProvider.getLats();
        
        this.Longs = this.jdDataProvider.getLongs();
        this.isJDNavigated = false;
        if(this.navParams && this.navParams.get('status')){
            this.isJDNavigated = true;
            this.ScheduleOn = this.navParams.get('scheduleOn');
            this.SchedulePreference = this.navParams.get('schedulePreference');
            this.isSelectedDate = this.navParams.get('selectedDate');
            this.isSelected = true;
            
        } 
        
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
    if(this.ScheduleOn){
        this.scheduleInterviews({checked:true});
    } else if(this.SchedulePreference){
        this.schedulePrefereces({checked:true});
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
    //var hasEvent = false;
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
  calculatePreference(oWalkin, bVal){
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
    var iMaxCTCContribution = CTCContribution;
    var SkillContribution = 100 - CTCContribution;
    var iMaxSkillContribution = SkillContribution;
    var drivingForceCTC = 0;
    var iMaxOfMins = oMinCTCUserCanGet > currentCTC ? oMinCTCUserCanGet : currentCTC;
    var hike = ((((iMaxOfMins + oMaxCTCUserCanGet)/2)-currentCTC)/currentCTC)*100;
    if(hike <= 15){
        drivingForceCTC = hike * 2.2;
    }
    if(hike > 15 && hike <= 40){
        drivingForceCTC = 15 * 2.2;
        drivingForceCTC += (hike-15) * 1.32;
    }
    if(hike > 40){
        drivingForceCTC = 15 * 2.2;
        drivingForceCTC += 25 * 1.32;
        drivingForceCTC += (hike-40)* 0.66;
    }
        
    if(currentCTC >= oMaxCTCUserCanGet){
        CTCContribution = (CTCContribution * 33)/100;
    } 
    else if(currentCTC > oMinCTCUserCanGet){
        
        
        
        CTCContribution = (CTCContribution * (drivingForceCTC/100) * 0.9);
    } 
     else {
        
        CTCContribution = CTCContribution * (drivingForceCTC/100);
        
    }
    
    if(iMaxCTCContribution < CTCContribution){ 
        CTCContribution = iMaxCTCContribution;
    }
   
    var iPreferredCount = 0;
    var driveForceSkills = 0;
    if(oUser.ShowBestCompany){
        iPreferredCount = this.getPreferredCount(oWalkin.skills, oUser.PreferredSkills);
        driveForceSkills +=  (iPreferredCount*1.3);
    } 
    var iPreferCount = this.getPreferredCount(oWalkin.skills, oUser.Skills) - iPreferredCount;
    driveForceSkills += (iPreferCount);
    //iPreferredSkillsCount = oUser.Skills.length;
    
    if(driveForceSkills !== 0){
        
        SkillContribution = SkillContribution * (driveForceSkills/(oWalkin.skills.replace(/ /g, '').split(",").length));
            
    } else {    
        SkillContribution = 0;
    }
    if(iMaxSkillContribution < SkillContribution){ 
        SkillContribution = iMaxSkillContribution;
    }
    if(SkillContribution === 0){
        CTCContribution = 0;
    }

    if(bVal){
        console.log( driveForceSkills + " " + CTCContribution + " " + SkillContribution);
    }
    return (oUser.Skills.length) > 0 ? (CTCContribution + SkillContribution) : 0;
  }
  getPreferenceColour(oWalkin){
    var TotalContribution = this.calculatePreference(oWalkin, false);
    if(TotalContribution >= 70){
        return 3;
    } else if(TotalContribution >= 37){
        return 2;
    } else {
        return 1;
    }
    
    
  }
  getPreferenceRating(oWalkin, bVal){
    var TotalContribution = this.calculatePreference(oWalkin, bVal);
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
        
        
        return (that.getPreferenceRating(b,false)-that.getPreferenceRating(a,false));
    });
  }
  sortItemToSchedule(aItems){
    
    //var that = this;
    return aItems.sort(function(a, b){
       // debugger;
       a = a.Time;
       b = b.Time;
        var tEndHourFora = parseInt(a.replace(/ /g, '').split(",")[0].split("-")[1].substr(0, a.replace(/ /g, '').split(",")[0].split("-")[1].length-2).split(":")[0]);
        var tEndMinutesFora = parseInt(a.replace(/ /g, '').split(",")[0].split("-")[1].substr(0, a.replace(/ /g, '').split(",")[0].split("-")[1].length-2).split(":")[1]);
        var aAMorPM = a.replace(/ /g, '').split(",")[0].substr(a.replace(/ /g, '').split(",")[0].length-2 , a.replace(/ /g, '').split(",")[0].length).toUpperCase();
        if(aAMorPM === "PM"){
            if(tEndHourFora !== 12){
                tEndHourFora += 12;
            }
        }
        var tEndHourForb = parseInt(b.replace(/ /g, '').split(",")[0].split("-")[1].substr(0, b.replace(/ /g, '').split(",")[0].split("-")[1].length-2).split(":")[0]);
        var tEndMinutesForb = parseInt(b.replace(/ /g, '').split(",")[0].split("-")[1].substr(0, b.replace(/ /g, '').split(",")[0].split("-")[1].length-2).split(":")[1]);
        var bAMorPM = b.replace(/ /g, '').split(",")[0].substr(b.replace(/ /g, '').split(",")[0].length-2 , b.replace(/ /g, '').split(",")[0].length).toUpperCase();
        
        if(bAMorPM === "PM"){
            if(tEndHourForb !== 12){
                tEndHourForb += 12;
            }
        }
        if(tEndHourForb !== tEndHourFora){
            return (tEndHourFora-tEndHourForb);
        } else {
            return (tEndMinutesFora-tEndMinutesForb);
        }
        
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
  getLocationInKms(sLocation, currLats, currLongs){
        
        
        var locs = "";
        var aLats = this.Lats;
        var aLongs = this.Longs;
        
       
        if(sLocation === "Sector 21, Noida"){
             return Math.round(this.getDistanceFromLatLonInKm(28.5983, 77.3288, currLats, currLongs)* 100) / 100 + " Kms away";
        } else if(sLocation === "Sector 2, Noida"){
            return Math.round(this.getDistanceFromLatLonInKm(28.5830, 77.3132, currLats, currLongs)* 100) / 100 + " Kms away";
        } else if(sLocation === "Sector 132, Noida"){
            return "0.50 Kms away";
        } else {
             locs = sLocation.replace(/ /g, '').split(",")[sLocation.replace(/ /g, '').split(",").length-1].toLowerCase();
             return Math.round(this.getDistanceFromLatLonInKm(aLats[this.getCoordsPos[locs]],aLongs[this.getCoordsPos[locs]], currLats, currLongs)* 100) / 100 + " Kms away";

        }
  }
  selectDate(day) {
        if(!(this.isJDNavigated)){
            this.ScheduleOn = false;
            this.SchedulePreference = false;
        } 
        this.isJDNavigated = false;
        this.isSelectedDate=day;
        this.isSelected = true
        var now=this.currentDate;//moment();
        var currentTime = new Date();

        if(day <= Object.keys(this.selectedDay).length){
            for(var i = 0; i < this.selectedDay[day].length; ++i){
                this.selectedDay[day][i].Rating = parseInt(this.getPreferenceRating(this.selectedDay[day][i], true).toString());    
                this.selectedDay[day][i].ETA = this.getLocationInKms(this.selectedDay[day][i].Location, this.currLats, this.currLongs); 
                
                var a=this.selectedDay[day][i].Time;
             
                var tEndHourFora = parseInt(a.replace(/ /g, '').split(",")[0].split("-")[1].substr(0, a.replace(/ /g, '').split(",")[0].split("-")[1].length-2).split(":")[0]);
                var tEndMinutesFora = parseInt(a.replace(/ /g, '').split(",")[0].split("-")[1].substr(0, a.replace(/ /g, '').split(",")[0].split("-")[1].length-2).split(":")[1]);
                var aAMorPM = a.replace(/ /g, '').split(",")[0].substr(a.replace(/ /g, '').split(",")[0].length-2 , a.replace(/ /g, '').split(",")[0].length).toUpperCase();
                if(aAMorPM === "PM"){
                   if(tEndHourFora !== 12){    
                       tEndHourFora += 12;
                   }
                }

                if(now=== day && (tEndHourFora*60 + tEndMinutesFora)< ((currentTime.getHours()*60)+ currentTime.getMinutes() )){
                    this.selectedDay[day][i].Timeout=true;
                } else {
                    this.selectedDay[day][i].Timeout=false;
                }

            }
            this.selectedEvent = this.selectedDay[day];

            
        } else {
            this.selectedEvent = new Array();
        }
        
        
  }
  selectWalkin(walkin) {
    
    this.navCtrl.push(JdPage, {jd:walkin, scheduleOn:this.ScheduleOn, schedulePreference:this.SchedulePreference, selectedDate:this.isSelectedDate});
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
  resetConflicts(){
     var aEvent = this.selectedEvent;
     for(var i = 0; i < aEvent.length; ++i){
        aEvent[i].Conflicting = 0;
     }
  }
  getUpdatedDistanceMatrix(aEvent, bVal){
    
    
    var latestScheduledLoc = aEvent[0].Location;
    var i = 0;
    if(bVal){
        for(i = 1; i < aEvent.length; ++i){
            var sLocation = aEvent[i].Location;
            var locs = sLocation.replace(/ /g, '').split(",")[sLocation.replace(/ /g, '').split(",").length-1].toLowerCase();
            aEvent[i].ETA = this.getLocationInKms(latestScheduledLoc, this.Lats[this.getCoordsPos[locs]], this.Longs[this.getCoordsPos[locs]]);
            if(!(aEvent[i].Conflicting === 1) && bVal){
                latestScheduledLoc = aEvent[i].Location;
            }
        }
    } else {
        for(i = 0; i < aEvent.length; ++i){
            
            aEvent[i].ETA = this.getLocationInKms(aEvent[i].Location, this.currLats, this.currLongs); 
        }
    }
    
    return aEvent;
  }
  scheduleInterviews(shouldSchedule){
    this.SchedulePreference = false;
    var isSet = shouldSchedule.checked;
    var aEvent = this.selectedEvent;
    this.ScheduleOn = isSet;
    this.resetConflicts();
    var bValue = false;
    if(isSet){
        
        aEvent = this.sortItemToSchedule(aEvent);
       // var lastSelectedEndHour = 100;
       // var lastSelectedEndMinute = 100;
        var j = 0;
        for(var i = 0; i < aEvent.length-1; ++i){
            var a = aEvent[j].Time;
            var tEndHourFora = parseInt(a.replace(/ /g, '').split(",")[0].split("-")[1].substr(0, a.replace(/ /g, '').split(",")[0].split("-")[1].length-2).split(":")[0]);
            var tEndMinutesFora = parseInt(a.replace(/ /g, '').split(",")[0].split("-")[1].substr(0, a.replace(/ /g, '').split(",")[0].split("-")[1].length-2).split(":")[1]);
            var aAMorPM = a.replace(/ /g, '').split(",")[0].substr(a.replace(/ /g, '').split(",")[0].length-2 , a.replace(/ /g, '').split(",")[0].length).toUpperCase();
            if(aAMorPM === "PM"){
                if(tEndHourFora !== 12){
                    tEndHourFora += 12;
                }
            }
            
            var b = aEvent[i+1].Time;
            var tStartHourForb = parseInt(b.replace(/ /g, '').split(",")[0].split("-")[0].substr(0, b.replace(/ /g, '').split(",")[0].split("-")[1].length-1).split(":")[0]);
            var tStartMinutesForb = parseInt(b.replace(/ /g, '').split(",")[0].split("-")[0].substr(0, b.replace(/ /g, '').split(",")[0].split("-")[1].length-1).split(":")[1]);
            var bAMorPM = b.replace(/ /g, '').split(",")[0].split("-")[0].substr(b.replace(/ /g, '').split(",")[0].split("-")[0].length-2, b.replace(/ /g, '').split(",")[0].split("-")[0].length).toUpperCase();

            if(bAMorPM === "PM"){
                if(tStartHourForb !== 12){
                    tStartHourForb += 12;
                }
            }
            if(tEndHourFora > tStartHourForb || (tEndHourFora === tStartHourForb && tEndMinutesFora > tStartMinutesForb)){
                    aEvent[i+1].Conflicting = 1;
                    
                
            } else {
                j = i+1;
            }
        }
        bValue = true;
    } else {
        bValue = false;
        aEvent = this.sortItems(aEvent);
    }
    
    this.selectedEvent = this.getUpdatedDistanceMatrix(aEvent, bValue);
    
    
  }
  getMaxPreference(aEvent){
      var i = 0;
      var max = 0;
      var temp = 0;
      for(i = 0; i < aEvent.length; ++i){
        temp = this.calculatePreference(aEvent[i], false);
        if(temp > max){
            max = temp;
        }
      }
      return max;
  }
  getTotalNumberOfNonConflictingInterviews(aEvent){
    var k = 0;
    var count = 0;
    for(var k = 0; k < aEvent.length; ++k){
        if(aEvent[k].Conflicting !== 1){
            ++count;
        }
    }
    return count;
  }
  schedulePrefereces(shouldScheduleOnPreference){
    this.resetConflicts();
    this.ScheduleOn = false;
    var isSet = shouldScheduleOnPreference.checked;
    var aEvent = this.selectedEvent;
    this.SchedulePreference = isSet;
    var bValue = false;
    var iMaxPreference = this.getMaxPreference(aEvent);
    var mainEvent = new Array();
    var check = false;
    if(isSet){
        
        aEvent = this.sortItemToSchedule(aEvent);
        var j = 0;
        var k = 0;
        var m = -1;
        var maxCount = 0;
        for(var k = 0; k < aEvent.length; ++k){
            check = false;
       
            for(var i = 0; i < aEvent.length; ++i){
                var current = this.calculatePreference(aEvent[i], false);
                if(iMaxPreference === current && check == false && m < i){
                    j = i;
                    m = i;
                    aEvent = this.toggleConflicts(aEvent, i);
                    check = true;
                }
                if(check === true && i+1 < aEvent.length){
                    var a = aEvent[j].Time;
                    var tEndHourFora = parseInt(a.replace(/ /g, '').split(",")[0].split("-")[1].substr(0, a.replace(/ /g, '').split(",")[0].split("-")[1].length-2).split(":")[0]);
                    var tEndMinutesFora = parseInt(a.replace(/ /g, '').split(",")[0].split("-")[1].substr(0, a.replace(/ /g, '').split(",")[0].split("-")[1].length-2).split(":")[1]);
                    var aAMorPM = a.replace(/ /g, '').split(",")[0].substr(a.replace(/ /g, '').split(",")[0].length-2 , a.replace(/ /g, '').split(",")[0].length).toUpperCase();
                    if(aAMorPM === "PM"){
                        if(tEndHourFora !== 12){
                            tEndHourFora += 12;
                        }
                    }

                    var b = aEvent[i+1].Time;
                    var tStartHourForb = parseInt(b.replace(/ /g, '').split(",")[0].split("-")[0].substr(0, b.replace(/ /g, '').split(",")[0].split("-")[1].length-1).split(":")[0]);
                    var tStartMinutesForb = parseInt(b.replace(/ /g, '').split(",")[0].split("-")[0].substr(0, b.replace(/ /g, '').split(",")[0].split("-")[1].length-1).split(":")[1]);
                    var bAMorPM = b.replace(/ /g, '').split(",")[0].split("-")[0].substr(b.replace(/ /g, '').split(",")[0].split("-")[0].length-2, b.replace(/ /g, '').split(",")[0].split("-")[0].length).toUpperCase();

                    if(bAMorPM === "PM"){
                        if(tStartHourForb !== 12){
                            tStartHourForb += 12;
                        }
                    }
                    if(tEndHourFora > tStartHourForb || (tEndHourFora === tStartHourForb && tEndMinutesFora > tStartMinutesForb)){
                        aEvent[i+1].Conflicting = 1;


                    } else {
                        j = i+1;
                        aEvent[i+1].Conflicting = 0;
                    }

                }
            }
            if(maxCount < this.getTotalNumberOfNonConflictingInterviews(aEvent)){
                mainEvent = JSON.parse(JSON.stringify(aEvent));
                maxCount = this.getTotalNumberOfNonConflictingInterviews(aEvent);
            }
            //this.resetConflicts();
            //aEvent = this.selectedEvent;
        }
        bValue = true;
    } else {
        bValue = false;
        mainEvent = this.sortItems(aEvent);
    }
    
    this.selectedEvent = this.getUpdatedDistanceMatrix(mainEvent, bValue);
    
    
  }
  toggleConflicts(aEvent, current){
    
    var i = 0;
    var j = current;
    for(i = current; i > 0; --i){
        var a = aEvent[j].Time;
        var tStartHourFora = parseInt(a.replace(/ /g, '').split(",")[0].split("-")[0].substr(0, a.replace(/ /g, '').split(",")[0].split("-")[1].length-1).split(":")[0]);
        var tStartMinutesFora = parseInt(a.replace(/ /g, '').split(",")[0].split("-")[0].substr(0, a.replace(/ /g, '').split(",")[0].split("-")[1].length-1).split(":")[1]);
        var aAMorPM = a.replace(/ /g, '').split(",")[0].split("-")[0].substr(a.replace(/ /g, '').split(",")[0].split("-")[0].length-2, a.replace(/ /g, '').split(",")[0].split("-")[0].length).toUpperCase();

        if(aAMorPM === "PM"){
            if(tStartHourFora !== 12){
                tStartHourFora += 12;
            }
        }


        var b = aEvent[i-1].Time;
        var tEndHourForb = parseInt(b.replace(/ /g, '').split(",")[0].split("-")[1].substr(0, b.replace(/ /g, '').split(",")[0].split("-")[1].length-2).split(":")[0]);
        var tEndMinutesForb = parseInt(b.replace(/ /g, '').split(",")[0].split("-")[1].substr(0, b.replace(/ /g, '').split(",")[0].split("-")[1].length-2).split(":")[1]);
        var bAMorPM = b.replace(/ /g, '').split(",")[0].substr(b.replace(/ /g, '').split(",")[0].length-2 , b.replace(/ /g, '').split(",")[0].length).toUpperCase();
        if(bAMorPM === "PM"){
            if(tEndHourForb !== 12){
                tEndHourForb += 12;
            }
        }

            
        if(tEndHourForb > tStartHourFora || (tEndHourForb === tStartHourFora && tEndMinutesForb > tStartMinutesFora)){
                aEvent[i-1].Conflicting = 1;
                
        } else {
            aEvent[i-1].Conflicting = 0;
            j = i-1;
        }
        
    }
    return aEvent;
  }
  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI/180)
  }
}
