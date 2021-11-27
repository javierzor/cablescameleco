import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaldecarreteaotroPage } from './modaldecarreteaotro.page';

const routes: Routes = [
  {
    path: '',
    component: ModaldecarreteaotroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaldecarreteaotroPageRoutingModule {}
