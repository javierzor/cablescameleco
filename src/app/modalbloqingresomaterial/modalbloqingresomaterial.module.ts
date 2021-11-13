import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalbloqingresomaterialPageRoutingModule } from './modalbloqingresomaterial-routing.module';

import { ModalbloqingresomaterialPage } from './modalbloqingresomaterial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalbloqingresomaterialPageRoutingModule
  ],
  declarations: [ModalbloqingresomaterialPage]
})
export class ModalbloqingresomaterialPageModule {}
