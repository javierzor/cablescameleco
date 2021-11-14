import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuditoriaPageRoutingModule } from './auditoria-routing.module';

import { AuditoriaPage } from './auditoria.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    Ng2SearchPipeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AuditoriaPageRoutingModule
  ],
  declarations: [AuditoriaPage]
})
export class AuditoriaPageModule {}
