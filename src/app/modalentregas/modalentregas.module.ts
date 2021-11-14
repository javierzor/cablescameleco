import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalentregasPageRoutingModule } from './modalentregas-routing.module';

import { ModalentregasPage } from './modalentregas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalentregasPageRoutingModule
  ],
  declarations: [ModalentregasPage]
})
export class ModalentregasPageModule {}
