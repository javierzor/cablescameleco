import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloqOrdenFraccionamientoPageRoutingModule } from './bloq-orden-fraccionamiento-routing.module';

import { BloqOrdenFraccionamientoPage } from './bloq-orden-fraccionamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloqOrdenFraccionamientoPageRoutingModule
  ],
  declarations: [BloqOrdenFraccionamientoPage]
})
export class BloqOrdenFraccionamientoPageModule {}
