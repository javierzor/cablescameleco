import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalnovedadessupervisorPageRoutingModule } from './modalnovedadessupervisor-routing.module';

import { ModalnovedadessupervisorPage } from './modalnovedadessupervisor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalnovedadessupervisorPageRoutingModule
  ],
  declarations: [ModalnovedadessupervisorPage]
})
export class ModalnovedadessupervisorPageModule {}
