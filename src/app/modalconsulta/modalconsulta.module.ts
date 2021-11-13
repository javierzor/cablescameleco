import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalconsultaPageRoutingModule } from './modalconsulta-routing.module';

import { ModalconsultaPage } from './modalconsulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalconsultaPageRoutingModule
  ],
  declarations: [ModalconsultaPage]
})
export class ModalconsultaPageModule {}
