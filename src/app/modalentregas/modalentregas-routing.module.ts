import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalentregasPage } from './modalentregas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalentregasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalentregasPageRoutingModule {}
