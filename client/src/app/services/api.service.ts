import { Country } from './../interface/country';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  countryData:any

  constructor(private http:HttpClient) { }
  // fuction to get countries
  getCoutries()
  {
    return this.http.get('https://restcountries.eu/rest/v2/all');

  }
  // function to get stats by coutry
  getStats()
  {
    return  this.http.get(`https://api.covid19api.com/summary`)
  }
}
