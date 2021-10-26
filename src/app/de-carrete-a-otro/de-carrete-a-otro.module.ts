import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeCarreteAOtroPageRoutingModule } from './de-carrete-a-otro-routing.module';

import { DeCarreteAOtroPage } from './de-carrete-a-otro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeCarreteAOtroPageRoutingModule
  ],
  declarations: [DeCarreteAOtroPage]
})
export class DeCarreteAOtroPageModule {}
