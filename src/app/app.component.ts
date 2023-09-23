import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from './services/weatherservice.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

  constructor(private weatherservice:WeatherserviceService){} 
 city:string="chirala";
  weatherData?:WeatherData;

  ngOnInit(): void {
    this.getweatherData(this.city);
    this.city='';
  } 

  onSubmit(){  
      this.getweatherData(this.city);
      this.city='';
  }

  private getweatherData(city:string):void{
    this.weatherservice.getWeatherData(city).subscribe({
      next:(response) => {
        this.weatherData = response;
        console.log(response);}
     })
  }
 
}
