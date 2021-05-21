import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interface/country';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
// country
countries:Country
  constructor(private api:APIService, ) { }

  ngOnInit() {
    this.getCountry()
  }

  getCountry()
  {
    this.api.getCoutries().subscribe((data:any)=>{
      this.countries = data;
      console.log(this.countries)
    })
  }

}
