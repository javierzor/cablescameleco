import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoMaterialDetallesPageRoutingModule } from './ingreso-material-detalles-routing.module';

import { IngresoMaterialDetallesPage } from './ingreso-material-detalles.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    NgxQRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoMaterialDetallesPageRoutingModule
  ],
  declarations: [IngresoMaterialDetallesPage]
})
export class IngresoMaterialDetallesPageModule {}
