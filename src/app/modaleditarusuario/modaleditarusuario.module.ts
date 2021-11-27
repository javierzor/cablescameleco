import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaleditarusuarioPageRoutingModule } from './modaleditarusuario-routing.module';

import { ModaleditarusuarioPage } from './modaleditarusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaleditarusuarioPageRoutingModule
  ],
  declarations: [ModaleditarusuarioPage]
})
export class ModaleditarusuarioPageModule {}
