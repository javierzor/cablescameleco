import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloqIngresoMaterialPageRoutingModule } from './bloq-ingreso-material-routing.module';

import { BloqIngresoMaterialPage } from './bloq-ingreso-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloqIngresoMaterialPageRoutingModule
  ],
  declarations: [BloqIngresoMaterialPage]
})
export class BloqIngresoMaterialPageModule {}
