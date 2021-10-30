import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalrolesPageRoutingModule } from './modalroles-routing.module';

import { ModalrolesPage } from './modalroles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalrolesPageRoutingModule
  ],
  declarations: [ModalrolesPage]
})
export class ModalrolesPageModule {}
