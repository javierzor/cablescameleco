import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearRolesPageRoutingModule } from './crear-roles-routing.module';

import { CrearRolesPage } from './crear-roles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearRolesPageRoutingModule
  ],
  declarations: [CrearRolesPage]
})
export class CrearRolesPageModule {}
