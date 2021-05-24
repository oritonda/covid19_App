import { APIService } from 'src/app/services/api.service';
import { CountryPage } from './../components/country/country.page';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  countries :any
  global:any = []
 
  constructor(private popoverController: PopoverController, private API :APIService) {}
  ngOnInit(): void {
    this.country()
  }

  async presentPopover(ev: any) {
    console.log(ev)
    const popover = await this.popoverController.create({
      component: CountryPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  country()
  {
    this.API.getStats().subscribe((data:any)=>{
      
      this.global = data.Global
      console.log(this.global)
    })
  }
}


