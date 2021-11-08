import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoMaterialDetallesPage } from './ingreso-material-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoMaterialDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoMaterialDetallesPageRoutingModule {}
