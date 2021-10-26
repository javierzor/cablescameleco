import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloqIngresoMaterialPage } from './bloq-ingreso-material.page';

const routes: Routes = [
  {
    path: '',
    component: BloqIngresoMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloqIngresoMaterialPageRoutingModule {}
