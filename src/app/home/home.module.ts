import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CarIconComponent } from '../car-icon/car-icon.component';
import { VanIconComponent } from '../van-icon/van-icon.component';
import { MotorcycleIconComponent } from '../motorcycle-icon/motorcycle-icon.component';
import { TruckIconComponent } from '../truck-icon/truck-icon.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    CarIconComponent,
    VanIconComponent,
    MotorcycleIconComponent,
    TruckIconComponent
  ]
})
export class HomePageModule { }
