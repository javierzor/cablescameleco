import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalbloqordenfracionamientoPage } from './modalbloqordenfracionamiento.page';

const routes: Routes = [
  {
    path: '',
    component: ModalbloqordenfracionamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalbloqordenfracionamientoPageRoutingModule {}
