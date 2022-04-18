import { Component } from '@angular/core';
import { darken } from 'polished';

@Component({
  selector: 'app-van-icon',
  templateUrl: './van-icon.component.html',
  styleUrls: ['./van-icon.component.scss'],
})
export class VanIconComponent {

  constructor() { }

  shadeColor(amount: number): string {
    const styles = getComputedStyle(document.documentElement);
    const currentColor = styles.getPropertyValue('--van-base-color');

    return darken(amount, currentColor.trim());
  }
}
