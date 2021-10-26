import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearReferenciasPage } from './crear-referencias.page';

const routes: Routes = [
  {
    path: '',
    component: CrearReferenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearReferenciasPageRoutingModule {}
