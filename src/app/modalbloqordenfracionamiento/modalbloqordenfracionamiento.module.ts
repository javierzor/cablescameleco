import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalbloqordenfracionamientoPageRoutingModule } from './modalbloqordenfracionamiento-routing.module';

import { ModalbloqordenfracionamientoPage } from './modalbloqordenfracionamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalbloqordenfracionamientoPageRoutingModule
  ],
  declarations: [ModalbloqordenfracionamientoPage]
})
export class ModalbloqordenfracionamientoPageModule {}
