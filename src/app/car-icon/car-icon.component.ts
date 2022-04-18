import { Component } from '@angular/core';
import { darken } from 'polished';

@Component({
  selector: 'app-car-icon',
  templateUrl: './car-icon.component.html',
  styleUrls: ['./car-icon.component.scss'],
})

export class CarIconComponent {
  constructor() {}

  shadeColor(amount: number): string {
    const styles = getComputedStyle(document.documentElement);
    const currentColor = styles.getPropertyValue('--car-base-color');

    return darken(amount, currentColor.trim());
  }
}
