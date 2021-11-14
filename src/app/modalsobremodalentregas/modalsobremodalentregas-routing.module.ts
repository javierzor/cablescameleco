import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalsobremodalentregasPage } from './modalsobremodalentregas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalsobremodalentregasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalsobremodalentregasPageRoutingModule {}
