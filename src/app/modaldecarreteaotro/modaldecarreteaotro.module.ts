import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaldecarreteaotroPageRoutingModule } from './modaldecarreteaotro-routing.module';

import { ModaldecarreteaotroPage } from './modaldecarreteaotro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaldecarreteaotroPageRoutingModule
  ],
  declarations: [ModaldecarreteaotroPage]
})
export class ModaldecarreteaotroPageModule {}
