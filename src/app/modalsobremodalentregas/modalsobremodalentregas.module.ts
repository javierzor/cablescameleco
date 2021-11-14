import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalsobremodalentregasPageRoutingModule } from './modalsobremodalentregas-routing.module';

import { ModalsobremodalentregasPage } from './modalsobremodalentregas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalsobremodalentregasPageRoutingModule
  ],
  declarations: [ModalsobremodalentregasPage]
})
export class ModalsobremodalentregasPageModule {}
