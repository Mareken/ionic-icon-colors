import { Component } from '@angular/core';
import { darken } from 'polished';

@Component({
  selector: 'app-truck-icon',
  templateUrl: './truck-icon.component.html',
  styleUrls: ['./truck-icon.component.scss'],
})
export class TruckIconComponent {
  constructor() {}

  shadeColor(amount: number): string {
    const styles = getComputedStyle(document.documentElement);
    const currentColor = styles.getPropertyValue('--truck-base-color');

    return darken(amount, currentColor.trim());
  }
}
