import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudFraccionamientoPage } from './solicitud-fraccionamiento.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudFraccionamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudFraccionamientoPageRoutingModule {}
