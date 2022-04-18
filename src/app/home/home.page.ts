import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  changeColor(color: string){
    document.documentElement.style.setProperty('--car-base-color', color);
    document.documentElement.style.setProperty('--van-base-color', color);
    document.documentElement.style.setProperty('--moto-base-color', color);
    document.documentElement.style.setProperty('--truck-base-color', color);
  }
}
