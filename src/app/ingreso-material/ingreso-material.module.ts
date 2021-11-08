import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoMaterialPageRoutingModule } from './ingreso-material-routing.module';

import { IngresoMaterialPage } from './ingreso-material.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    Ng2SearchPipeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoMaterialPageRoutingModule
  ],
  declarations: [IngresoMaterialPage]
})
export class IngresoMaterialPageModule {}
