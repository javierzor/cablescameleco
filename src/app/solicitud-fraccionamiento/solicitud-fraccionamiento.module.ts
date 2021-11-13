import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudFraccionamientoPageRoutingModule } from './solicitud-fraccionamiento-routing.module';

import { SolicitudFraccionamientoPage } from './solicitud-fraccionamiento.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    Ng2SearchPipeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudFraccionamientoPageRoutingModule
  ],
  declarations: [SolicitudFraccionamientoPage]
})
export class SolicitudFraccionamientoPageModule {}
