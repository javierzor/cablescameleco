import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoMaterialPage } from './ingreso-material.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoMaterialPageRoutingModule {}
