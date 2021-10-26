import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantallaEntregasPage } from './pantalla-entregas.page';

const routes: Routes = [
  {
    path: '',
    component: PantallaEntregasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantallaEntregasPageRoutingModule {}
