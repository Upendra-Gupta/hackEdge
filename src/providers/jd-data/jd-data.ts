import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JdDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JdDataProvider {
    user: any = {
        "LocationPreference" : ["Banglore", "New Delhi", "Gurgaon", "Pune", "Noida", "Hyderabad"],
        "Skills" : ["Python", "PHP", "Javascript", "Nodejs", "SQL", "Angularjs", "HTML", "CSS", "C++", "C"],
        "PreferredSkills" : ["PHP", "Javascript", "SQL"],
        "NotificationForUpcomingWalkins": true,
        "UpcomingScheduledInterviews":true,
        "ShowBestCompany":false,
        "PreferSalaryOverSkills":false,
        "CurrentCTC": "10 lpa",
        "SalaryPreference": 0
    };
    
    jd: any = {
    
        "1": [
            {
                "Title": "HCL Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 1 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer and Hands-on experience with application server technologies such as Tomcat"
            },
            {
                "Title": "TCS Walkin",
                "Message": "Java Developer",
                "skills": "Java, Database",
                "Eligibility": "Graduation",
                "Time": "8:00 AM - 11:00 AM, 1 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "8-12 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment"
            },
            {
                "Title": "IBM Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SQL",
                "Eligibility": "Graduation",
                "Time": "12:15 PM - 5:30 PM, 1 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Monotype Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, Symphony",
                "Eligibility": "Graduation",
                "Time": "12:00 AM - 3:00 PM, 1 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Sapient Global Markets Walkin",
                "Message": "Java Developer",
                "skills": "Java, J2EE, Oracle",
                "Eligibility": "Graduation",
                "Time": "12:30 PM - 1:30 PM, 1 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "2 hours away",
                "Location": "Sector 21 Infospace, Gurgaon",
                "Salary": "8-12 lpa",
                "JD": "Proficient with Java (J2SE); experience with JDK 1.8 a plus"
            }
        ],
        "2": [
            {
                "Title": "IBM Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 2 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "HCL Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 2 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer and Hands-on experience with application server technologies such as Tomcat"
            },
            {
                "Title": "TCS Walkin",
                "Message": "Java Developer",
                "skills": "Java, Database",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 2 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "8-12 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment"
            },
            {
                "Title": "IBM Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 2 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Monotype Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, Symphony",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 2 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            }
        ],
        "3": [
            {
                "Title": "Sapient Global Markets Walkin",
                "Message": "Java Developer",
                "skills": "Java, J2EE, Oracle",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 3 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "2 hours away",
                "Location": "Sector 21 Infospace, Gurgaon",
                "Salary": "8-12 lpa",
                "JD": "Proficient with Java (J2SE); experience with JDK 1.8 a plus"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, Oracle",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 3 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "20-30 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Very familiar with developing & integrating RESTful or SOAP web service APIs"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 3 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Monotype Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, Symphony",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 3 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "IBM Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 3 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            }
        ],
        "4": [
            {
                "Title": "Infoedge Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, MYSQL, CSS",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 4 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "10 mins away",
                "Location": "Sector 132, Noida",
                "Salary": "10-15 lpa",
                "JD": "Minimum 3 years of experience as a php       developer and Comfortable working with databases such as MySQL or Oracle"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, Oracle",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 4 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "20-30 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Very familiar with developing & integrating RESTful or SOAP web service APIs"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 4 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Monotype Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, Symphony",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 4 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "ServiceNow Walkin",
                "Message": "FrontEnd Developer",
                "skills": "JavaScript, CSS",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 4 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "2 hours away",
                "Location": "GAchibowli, Hyderabad",
                "Salary": "20-30 lpa",
                "JD": "Should have Minimum 5 years of experience of JavaScript"
            }
        ],
        "5": [
            {
                "Title": "ServiceNow Walkin",
                "Message": "FrontEnd Developer",
                "skills": "JavaScript, CSS",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 5 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "2 hours away",
                "Location": "GAchibowli, Hyderabad",
                "Salary": "20-30 lpa",
                "JD": "Should have Minimum 5 years of experience of JavaScript"
            },
            {
                "Title": "Monotype Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, Symphony",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 5 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Novortis Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, Spring",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 5 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "15 mins away",
                "Location": "Sector 112, Gurgaon",
                "Salary": " 21-24 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and - Ability to convert business requirement into executable code solution"
            },
            {
                "Title": "Aricent Walkin",
                "Message": "C++ Developer",
                "skills": "C++, Oracle",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 5 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Gurgaon",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a C++       developer in a large environment"
            }
        ],
        "6": [
            {
                "Title": "Aricent Walkin",
                "Message": "C++ Developer",
                "skills": "C++, Oracle",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 6 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Gurgaon",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a C++       developer in a large environment"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, Oracle",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 6 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "20-30 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Very familiar with developing & integrating RESTful or SOAP web service APIs"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 6 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Wipro Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 6 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "8-12 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer and Hands-on experience with application server technologies such as Tomcat"
            },
            {
                "Title": "JDA Walkin",
                "Message": "DATABASE Developer",
                "skills": "SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 6 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "18-23 lpa",
                "JD": "Minimum 2 years of experience as a SQL developer "
            }
        ],
        "7": [
            {
                "Title": "Wipro Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 7 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "8-12 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer and Hands-on experience with application server technologies such as Tomcat"
            },
            {
                "Title": "Wipro Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 7 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "8-12 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer and Hands-on experience with application server technologies such as Tomcat"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, Oracle",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 7 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "20-30 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Very familiar with developing & integrating RESTful or SOAP web service APIs"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 7 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "JDA Walkin",
                "Message": "DATABASE Developer",
                "skills": "SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 7 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "18-23 lpa",
                "JD": "Minimum 2 years of experience as a SQL developer "
            }
        ],
        "8": [
            {
                "Title": "HCL Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 8 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer and Hands-on experience with application server technologies such as Tomcat"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, Oracle",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 8 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "20-30 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Very familiar with developing & integrating RESTful or SOAP web service APIs"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 8 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Wipro Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 8 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "8-12 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer and Hands-on experience with application server technologies such as Tomcat"
            },
            {
                "Title": "JDA Walkin",
                "Message": "DATABASE Developer",
                "skills": "SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 8 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "18-23 lpa",
                "JD": "Minimum 2 years of experience as a SQL developer "
            }
        ],
        "9": [
            {
                "Title": "Wipro Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 9 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "8-12 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer and Hands-on experience with application server technologies such as Tomcat"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, Oracle",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 9 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "20-30 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Very familiar with developing & integrating RESTful or SOAP web service APIs"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 9 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "TCS Walkin",
                "Message": "C Developer",
                "skills": "C, Networking",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 9 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "8-12 lpa",
                "JD": "Minimum 5 years of experience as a C developer and network programming is a plus"
            }
        ],
        "10": [
            {
                "Title": "IBM Walkin",
                "Message": "java Developer",
                "skills": "Java, SOAP, REST, SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 10 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a java       developer and Understanding of relational database design and development"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, Oracle",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 10 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "20-30 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Very familiar with developing & integrating RESTful or SOAP web service APIs"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 10 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Wipro Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 10 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "8-12 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer and Hands-on experience with application server technologies such as Tomcat"
            }
        ],
        "11": [
            {
                "Title": "RBS Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, MYSQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 11 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "8-12 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and banking domain knowlwdge is a plu"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, Oracle",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 11 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "20-30 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Very familiar with developing & integrating RESTful or SOAP web service APIs"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 11 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            }
        ],
        "12": [
            {
                "Title": "Wipro Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 12 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "8-12 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer and Hands-on experience with application server technologies such as Tomcat"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, Oracle",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 12 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "20-30 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Very familiar with developing & integrating RESTful or SOAP web service APIs"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 12 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 12 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            }
        ],
        "13": [
            {
                "Title": "Adobe Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, Oracle",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 13 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "20-30 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Very familiar with developing & integrating RESTful or SOAP web service APIs"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, Oracle",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 13 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "20-30 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Very familiar with developing & integrating RESTful or SOAP web service APIs"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 13 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 13 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            }
        ],
        "14": [
            {
                "Title": "JDA Walkin",
                "Message": "DATABASE Developer",
                "skills": "SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 14 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "18-23 lpa",
                "JD": "Minimum 2 years of experience as a SQL developer "
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 14 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            }
        ],
        "15": [
            {
                "Title": "ICICI Bank walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 15 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "2 hours away",
                "Location": "Sector 22, Noida",
                "Salary": "18-22 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment  and Object-oriented Design and Analysis (OOA and OOD)"
            },
            {
                "Title": "JDA Walkin",
                "Message": "DATABASE Developer",
                "skills": "SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 15 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "18-23 lpa",
                "JD": "Minimum 2 years of experience as a SQL developer "
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 15 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            }
        ],
        "16": [
            {
                "Title": "DBS Walkin",
                "Message": "C++ Developer",
                "skills": "Java, SOAP, Spring",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 16 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Hyderabad",
                "Salary": "18-23 lpa",
                "JD": "Minimum 2 years of experience as a C++       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "JDA Walkin",
                "Message": "DATABASE Developer",
                "skills": "SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 16 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "18-23 lpa",
                "JD": "Minimum 2 years of experience as a SQL developer "
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 16 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            }
        ],
        "17": [
            {
                "Title": "Honeywell Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, Struts",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 17 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Banglore",
                "Salary": "13-18 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Evaluate and identify new technologies for implementation"
            },
            {
                "Title": "JDA Walkin",
                "Message": "DATABASE Developer",
                "skills": "SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 17 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "18-23 lpa",
                "JD": "Minimum 2 years of experience as a SQL developer "
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 17 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            }
        ],
        "18": [
            {
                "Title": "Polaris Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST, Symphony",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 18 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Pune",
                "Salary": "8-13 lpa",
                "JD": "Minimum 4 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "JDA Walkin",
                "Message": "DATABASE Developer",
                "skills": "SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 18 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "18-23 lpa",
                "JD": "Minimum 2 years of experience as a SQL developer "
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 18 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Honeywell Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, Struts",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 18 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Banglore",
                "Salary": "13-18 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Evaluate and identify new technologies for implementation"
            }
        ],
        "19": [
            {
                "Title": "Google Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 19 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "15-23 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Ability to convert business requirement into executable code solution"
            },
            {
                "Title": "IBM Walkin",
                "Message": "java Developer",
                "skills": "Java, SOAP, REST, SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 19 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a java       developer and Understanding of relational database design and development"
            },
            {
                "Title": "JDA Walkin",
                "Message": "DATABASE Developer",
                "skills": "SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 19 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "18-23 lpa",
                "JD": "Minimum 2 years of experience as a SQL developer "
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 19 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Honeywell Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, Struts",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 19 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Banglore",
                "Salary": "13-18 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Evaluate and identify new technologies for implementation"
            }
        ],
        "20": [
            {
                "Title": "IBM Walkin",
                "Message": "java Developer",
                "skills": "Java, SOAP, REST, SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 20 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a java       developer and Understanding of relational database design and development"
            },
            {
                "Title": "Synopsys Walkin",
                "Message": "PHP Developer",
                "skills": "Java, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 20 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 121, Noida",
                "Salary": "18-24 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Honeywell Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, Struts",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 20 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Banglore",
                "Salary": "13-18 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Evaluate and identify new technologies for implementation"
            }
        ],
        "21": [
            {
                "Title": "IBM Walkin",
                "Message": "java Developer",
                "skills": "Java, SOAP, REST, SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 21 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a java       developer and Understanding of relational database design and development"
            },
            {
                "Title": "JDA Walkin",
                "Message": "DATABASE Developer",
                "skills": "SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 21 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "18-23 lpa",
                "JD": "Minimum 2 years of experience as a SQL developer "
            },
            {
                "Title": "Adobe Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 21 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "15-20 lpa",
                "JD": "Minimum 3 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Synopsys Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, Spring",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 21 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "13-20 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Provide leadership to technical team"
            },
            {
                "Title": "Honeywell Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, Struts",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 21 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Banglore",
                "Salary": "13-18 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Evaluate and identify new technologies for implementation"
            }
        ],
        "22": [
            {
                "Title": "IBM Walkin",
                "Message": "java Developer",
                "skills": "Java, SOAP, REST, SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 22 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a java       developer and Understanding of relational database design and development"
            },
            {
                "Title": "INfosys Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 22 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "10 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "INfosys Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 22 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "10 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Honeywell Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, Struts",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 22 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Banglore",
                "Salary": "13-18 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Evaluate and identify new technologies for implementation"
            }
        ],
        "23": [
            {
                "Title": "INfosys Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 23 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "10 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "8-12 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment"
            },
            {
                "Title": "INfosys Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 23 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "10 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "IBM Walkin",
                "Message": "java Developer",
                "skills": "Java, SOAP, REST, SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 23 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a java       developer and Understanding of relational database design and development"
            },
            {
                "Title": "Honeywell Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, Struts",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 23 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Banglore",
                "Salary": "13-18 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Evaluate and identify new technologies for implementation"
            }
        ],
        "24": [
            {
                "Title": "Novortis Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 24 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "40 mins away",
                "Location": "Hyderabad",
                "Salary": "17-20 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment and Ability to analyze and resolve technical query in project execution"
            },
            {
                "Title": "INfosys Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 24 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "10 mins away",
                "Location": "Sector 2, Noida",
                "Salary": "8-12 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment"
            },
            {
                "Title": "IBM Walkin",
                "Message": "java Developer",
                "skills": "Java, SOAP, REST, SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 24 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a java       developer and Understanding of relational database design and development"
            },
            {
                "Title": "Honeywell Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, Struts",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 24 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Banglore",
                "Salary": "13-18 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Evaluate and identify new technologies for implementation"
            }
        ],
        "25": [
            {
                "Title": "Novortis Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, Spring",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 25 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "15 mins away",
                "Location": "Sector 112, Gurgaon",
                "Salary": " 21-24 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and - Ability to convert business requirement into executable code solution"
            },
            {
                "Title": "IBM Walkin",
                "Message": "java Developer",
                "skills": "Java, SOAP, REST, SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 25 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a java       developer and Understanding of relational database design and development"
            },
            {
                "Title": "Honeywell Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, Struts",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 25 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Banglore",
                "Salary": "13-18 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Evaluate and identify new technologies for implementation"
            }
        ],
        "26": [
            {
                "Title": "Monotype Walkin",
                "Message": "PHP Developer",
                "skills": "PHP, SOAP, Symphony",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 26 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a php       developer in a large environment (dozens of applications and environments)"
            },
            {
                "Title": "Novortis Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, REST, Spring",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 26 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "15 mins away",
                "Location": "Sector 112, Gurgaon",
                "Salary": " 21-24 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and - Ability to convert business requirement into executable code solution"
            },
            {
                "Title": "IBM Walkin",
                "Message": "java Developer",
                "skills": "Java, SOAP, REST, SQL",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 26 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "30 mins away",
                "Location": "Sector 21, Noida",
                "Salary": "8-13 lpa",
                "JD": "Minimum 2 years of experience as a java       developer and Understanding of relational database design and development"
            },
            {
                "Title": "Honeywell Walkin",
                "Message": "Java Developer",
                "skills": "Java, SOAP, Struts",
                "Eligibility": "Graduation",
                "Time": "11:00 AM - 2:00 PM, 26 Jul",
                "EmpType": "Regular",
                "Exp": "3-7 years",
                "ETA": "20 mins away",
                "Location": "Banglore",
                "Salary": "13-18 lpa",
                "JD": "Minimum 5 years of experience as a Java web application developer in a large environment and Evaluate and identify new technologies for implementation"
            }
        ]
    
};

    location: any = ["Noida", "Banglore", "New Delhi", "Gurgaon", "Pune", "Chennai"];

  constructor(public http: HttpClient) {
    console.log('Hello JdDataProvider Provider');
  }
    
  getJd() {
    
    return this.jd;
  }
  getUser() {
    
    return this.user;
  }
  getLocation() {
    
    return this.location;
  }
  setPreferredLocation(location){
    this.user["LocationPreference"] = location;
    
  }
  setPreferredSkills(skill){
    this.user["PreferredSkills"] = skill;
  }
  setShowBestCompany(bVal){
    this.user["ShowBestCompany"] = bVal;
  }
  setNotificationForUpcomingWalkins(bVal){
    this.user["NotificationForUpcomingWalkins"] = bVal;
  }
  setUpcomingScheduledInterviews(bVal){
    this.user["UpcomingScheduledInterviews"] = bVal;
  }
  setPreferSalaryOverSkills(bVal){
    
    this.user["PreferSalaryOverSkills"] = bVal;
  }
  setSalaryPreference(iVal){
    this.user["SalaryPreference"] = iVal;
  }
}
