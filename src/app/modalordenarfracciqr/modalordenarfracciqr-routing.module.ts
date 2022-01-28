import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalordenarfracciqrPage } from './modalordenarfracciqr.page';

const routes: Routes = [
  {
    path: '',
    component: ModalordenarfracciqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalordenarfracciqrPageRoutingModule {}
