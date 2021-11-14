import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalfraccionamientoqrPage } from './modalfraccionamientoqr.page';

const routes: Routes = [
  {
    path: '',
    component: ModalfraccionamientoqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalfraccionamientoqrPageRoutingModule {}
