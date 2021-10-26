import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearRolesPage } from './crear-roles.page';

const routes: Routes = [
  {
    path: '',
    component: CrearRolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearRolesPageRoutingModule {}
