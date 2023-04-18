import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders} from '@angular/common/http';   
import { PremiumModel } from '../model/premiummodel';
  

@Injectable()  
export class PremiumService { 
     responseValue : any = 0; 
     errorMessage : string = "";
    url = 'https://localhost:7048/PremiumCalculation'  
    constructor(private httpclient: HttpClient) {}  
GetPremimumCalculated(premiumModel :PremiumModel ){  
    const headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin','*');
    
    return this.httpclient.post < any > (this.url, premiumModel, {headers: headers}).subscribe( (response)=> {
        this.responseValue = response.json();
        
    },(response)=> {
    this.errorMessage = "Request failed.";
    });
}  
} 


