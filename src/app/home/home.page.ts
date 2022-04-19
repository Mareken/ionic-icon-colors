import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  changeColor(color: string, vehicleId: number){
    document.documentElement.style.setProperty(`--vehicle${vehicleId}-base-color`, color);
  }
}
