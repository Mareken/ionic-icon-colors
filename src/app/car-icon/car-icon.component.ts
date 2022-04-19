import { Component, Input } from '@angular/core';
import { darken } from 'polished';

@Component({
  selector: 'app-car-icon',
  templateUrl: './car-icon.component.html',
  styleUrls: ['./car-icon.component.scss'],
})

export class CarIconComponent {
  @Input() id: number;
  
  constructor() {}

  shadeColor(amount: number): string {
    const styles = getComputedStyle(document.documentElement);
    const currentColor = styles.getPropertyValue(`--vehicle${this.id}-base-color`);

    return darken(amount, currentColor.trim());
  }
}
