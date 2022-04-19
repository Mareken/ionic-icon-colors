import { Component } from '@angular/core';
import { darken } from 'polished';

@Component({
  selector: 'app-motorcycle-icon',
  templateUrl: './motorcycle-icon.component.html',
  styleUrls: ['./motorcycle-icon.component.scss'],
})
export class MotorcycleIconComponent {
  constructor() {}

  // Aqui recebe o ID como @Input ou alguma outra forma que venha de cima, etc.

  shadeColor(amount: number): string {
    const styles = getComputedStyle(document.documentElement);
    const currentColor = styles.getPropertyValue('--moto-base-color');

    return darken(amount, currentColor.trim());
  }
}
