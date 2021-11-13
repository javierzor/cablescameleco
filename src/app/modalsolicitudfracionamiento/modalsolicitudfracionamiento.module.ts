import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalsolicitudfracionamientoPageRoutingModule } from './modalsolicitudfracionamiento-routing.module';

import { ModalsolicitudfracionamientoPage } from './modalsolicitudfracionamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalsolicitudfracionamientoPageRoutingModule
  ],
  declarations: [ModalsolicitudfracionamientoPage]
})
export class ModalsolicitudfracionamientoPageModule {}
