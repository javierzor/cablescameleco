import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalsolicitudfracionamientoPage } from './modalsolicitudfracionamiento.page';

const routes: Routes = [
  {
    path: '',
    component: ModalsolicitudfracionamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalsolicitudfracionamientoPageRoutingModule {}
