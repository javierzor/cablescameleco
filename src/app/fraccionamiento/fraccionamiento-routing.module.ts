import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FraccionamientoPage } from './fraccionamiento.page';

const routes: Routes = [
  {
    path: '',
    component: FraccionamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FraccionamientoPageRoutingModule {}
