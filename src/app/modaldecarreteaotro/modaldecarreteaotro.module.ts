import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaldecarreteaotroPageRoutingModule } from './modaldecarreteaotro-routing.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { ModaldecarreteaotroPage } from './modaldecarreteaotro.page';

@NgModule({
  imports: [
    NgxQRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ModaldecarreteaotroPageRoutingModule
  ],
  declarations: [ModaldecarreteaotroPage]
})
export class ModaldecarreteaotroPageModule {}
