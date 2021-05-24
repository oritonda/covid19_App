import { APIService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interface/country';
@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {
// country
countries:Country
  constructor( private API:APIService) { }

  ngOnInit() {
    this.country()
  }

  country()
  {
    this.API.getStats().subscribe((data:any)=>{
      
      this.countries = data.Countries;
      console.log(this.countries)
    })

 

}
}
