import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalconsultaPage } from './modalconsulta.page';

const routes: Routes = [
  {
    path: '',
    component: ModalconsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalconsultaPageRoutingModule {}
