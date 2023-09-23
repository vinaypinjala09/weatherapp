import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http:HttpClient) { } 

  getWeatherData(city:string):Observable<WeatherData>{
   return this.http.get<WeatherData>('https://weatherapi-com.p.rapidapi.com/forecast.json',{
      headers:new HttpHeaders()
      .set('X-RapidAPI-Host','weatherapi-com.p.rapidapi.com')
      .set('X-RapidAPI-Key','b7e6ae764cmsh85433439a8992d8p174559jsndab48c270927'),
      params: new HttpParams()
      .set('q',city)
    })
  }
}
