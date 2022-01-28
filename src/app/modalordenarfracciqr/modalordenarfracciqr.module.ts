import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalordenarfracciqrPageRoutingModule } from './modalordenarfracciqr-routing.module';

import { ModalordenarfracciqrPage } from './modalordenarfracciqr.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    NgxQRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ModalordenarfracciqrPageRoutingModule
  ],
  declarations: [ModalordenarfracciqrPage]
})
export class ModalordenarfracciqrPageModule {}
