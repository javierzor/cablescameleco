import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeCarreteAOtroPage } from './de-carrete-a-otro.page';

const routes: Routes = [
  {
    path: '',
    component: DeCarreteAOtroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeCarreteAOtroPageRoutingModule {}
