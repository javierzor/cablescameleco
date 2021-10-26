import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaEntregasPageRoutingModule } from './pantalla-entregas-routing.module';

import { PantallaEntregasPage } from './pantalla-entregas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaEntregasPageRoutingModule
  ],
  declarations: [PantallaEntregasPage]
})
export class PantallaEntregasPageModule {}
