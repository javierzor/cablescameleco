import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovedadesSupervisorPageRoutingModule } from './novedades-supervisor-routing.module';

import { NovedadesSupervisorPage } from './novedades-supervisor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovedadesSupervisorPageRoutingModule
  ],
  declarations: [NovedadesSupervisorPage]
})
export class NovedadesSupervisorPageModule {}
