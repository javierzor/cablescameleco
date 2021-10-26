import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovedadesSupervisorPage } from './novedades-supervisor.page';

const routes: Routes = [
  {
    path: '',
    component: NovedadesSupervisorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovedadesSupervisorPageRoutingModule {}
