import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalrolesPage } from './modalroles.page';

const routes: Routes = [
  {
    path: '',
    component: ModalrolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalrolesPageRoutingModule {}
