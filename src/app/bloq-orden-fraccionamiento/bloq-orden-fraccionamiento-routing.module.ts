import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloqOrdenFraccionamientoPage } from './bloq-orden-fraccionamiento.page';

const routes: Routes = [
  {
    path: '',
    component: BloqOrdenFraccionamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloqOrdenFraccionamientoPageRoutingModule {}
