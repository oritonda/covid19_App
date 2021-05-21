import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }
  // fuction to get countries
  getCoutries()
  {
    return this.http.get('https://api.covid19api.com/countries');

  }
  // function to get stats by coutry
  getStats(code:string)
  {
    return this.http.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
  }
}
