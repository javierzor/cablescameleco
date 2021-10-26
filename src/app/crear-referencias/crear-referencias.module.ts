import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearReferenciasPageRoutingModule } from './crear-referencias-routing.module';

import { CrearReferenciasPage } from './crear-referencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearReferenciasPageRoutingModule
  ],
  declarations: [CrearReferenciasPage]
})
export class CrearReferenciasPageModule {}
