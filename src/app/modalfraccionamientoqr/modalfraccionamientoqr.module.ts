import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalfraccionamientoqrPageRoutingModule } from './modalfraccionamientoqr-routing.module';

import { ModalfraccionamientoqrPage } from './modalfraccionamientoqr.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    NgxQRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ModalfraccionamientoqrPageRoutingModule
  ],
  declarations: [ModalfraccionamientoqrPage]
})
export class ModalfraccionamientoqrPageModule {}
