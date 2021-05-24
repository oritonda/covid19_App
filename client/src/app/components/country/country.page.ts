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
  constructor() { }

  ngOnInit() {
  }

 

}
