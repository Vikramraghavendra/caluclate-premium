import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PremiumService } from 'src/app/service/app.service';
import { PremiumModel } from 'src/app/model/premiummodel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  today = new Date();
  changedDate = '';
  pipe = new DatePipe('en-US');
  
  title = 'caluclate-premium';
  username : string = ''; 
  age = 1;
  occupationSelected ='-1';
  sumInsured = 1;
  occupationRatingFactor = 1 ;
  deathPremium = 0;
  minDate = "1953-01-01";
  maxDate  = "2022-01-01";
  selecteddate  = "2022-01-01";
  isSelected : boolean = false;

  constructor(public datepipe: DatePipe,public service:PremiumService) {
    let currentDateTime =this.datepipe.transform((new Date), 'YYYY-MM-dd');
   // this.maxDate = currentDateTime;
  
  }

  onChange(occupationSelected: any) {

    this.calculateRatingFactor(occupationSelected.value);
}

  public calculateRatingFactor(occupation:string): void{
     
    switch(occupation) { 
      case 'Professional': { 
        this.isSelected = true;
         this.occupationRatingFactor = 1.0; 
         break; 
      } 
      case "White Collar": { 
        this.isSelected = true;
        this.occupationRatingFactor = 1.25;  
         break; 
      } 
      case "Light Manual": { 
        this.isSelected = true;
        this.occupationRatingFactor = 1.50;  
         break; 
      }
      case "Heavy Manual": { 
        this.isSelected = true;
        this.occupationRatingFactor = 1.75;  
         break; 
      }
      
      default: { 
        this.isSelected = false;
        this.occupationRatingFactor = 0;  
         break; 
      } 
   } 
  }

  public calculateAge(){
    let timeDiff = Math.abs(Date.now() - new Date(this.selecteddate).getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
  }

  public open() {
  var body = new PremiumModel();
  body.age =  this.age;
  body.occupationRatingFactor = this.occupationRatingFactor;
  body.sumInsured = this.sumInsured;

  var response =  this.service.GetPremimumCalculated(body);

     //this.deathPremium = (this.sumInsured * this.occupationRatingFactor * this.age) /1000 * 12
  }

}
