import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudFraccionamientoPageRoutingModule } from './solicitud-fraccionamiento-routing.module';

import { SolicitudFraccionamientoPage } from './solicitud-fraccionamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudFraccionamientoPageRoutingModule
  ],
  declarations: [SolicitudFraccionamientoPage]
})
export class SolicitudFraccionamientoPageModule {}
