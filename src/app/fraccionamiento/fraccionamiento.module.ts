import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FraccionamientoPageRoutingModule } from './fraccionamiento-routing.module';

import { FraccionamientoPage } from './fraccionamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FraccionamientoPageRoutingModule
  ],
  declarations: [FraccionamientoPage]
})
export class FraccionamientoPageModule {}
