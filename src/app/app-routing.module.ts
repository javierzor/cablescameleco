import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ingreso-material',
    loadChildren: () => import('./ingreso-material/ingreso-material.module').then( m => m.IngresoMaterialPageModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'solicitud-fraccionamiento',
    loadChildren: () => import('./solicitud-fraccionamiento/solicitud-fraccionamiento.module').then( m => m.SolicitudFraccionamientoPageModule)
  },
  {
    path: 'bloq-orden-fraccionamiento',
    loadChildren: () => import('./bloq-orden-fraccionamiento/bloq-orden-fraccionamiento.module').then( m => m.BloqOrdenFraccionamientoPageModule)
  },
  {
    path: 'bloq-ingreso-material',
    loadChildren: () => import('./bloq-ingreso-material/bloq-ingreso-material.module').then( m => m.BloqIngresoMaterialPageModule)
  },
  {
    path: 'fraccionamiento',
    loadChildren: () => import('./fraccionamiento/fraccionamiento.module').then( m => m.FraccionamientoPageModule)
  },
  {
    path: 'auditoria',
    loadChildren: () => import('./auditoria/auditoria.module').then( m => m.AuditoriaPageModule)
  },
  {
    path: 'crear-roles',
    loadChildren: () => import('./crear-roles/crear-roles.module').then( m => m.CrearRolesPageModule)
  },
  {
    path: 'crear-usuarios',
    loadChildren: () => import('./crear-usuarios/crear-usuarios.module').then( m => m.CrearUsuariosPageModule)
  },
  {
    path: 'crear-referencias',
    loadChildren: () => import('./crear-referencias/crear-referencias.module').then( m => m.CrearReferenciasPageModule)
  },
  {
    path: 'de-carrete-a-otro',
    loadChildren: () => import('./de-carrete-a-otro/de-carrete-a-otro.module').then( m => m.DeCarreteAOtroPageModule)
  },
  {
    path: 'pantalla-entregas',
    loadChildren: () => import('./pantalla-entregas/pantalla-entregas.module').then( m => m.PantallaEntregasPageModule)
  },
  {
    path: 'entregas',
    loadChildren: () => import('./entregas/entregas.module').then( m => m.EntregasPageModule)
  },
  {
    path: 'novedades-supervisor',
    loadChildren: () => import('./novedades-supervisor/novedades-supervisor.module').then( m => m.NovedadesSupervisorPageModule)
  },
  {
    path: 'modalroles',
    loadChildren: () => import('./modalroles/modalroles.module').then( m => m.ModalrolesPageModule)
  },
  {
    path: 'ingreso-material-detalles',
    loadChildren: () => import('./ingreso-material-detalles/ingreso-material-detalles.module').then( m => m.IngresoMaterialDetallesPageModule)
  },
  {
    path: 'modalqr',
    loadChildren: () => import('./modalqr/modalqr.module').then( m => m.ModalqrPageModule)
  },
  {
    path: 'modalconsulta',
    loadChildren: () => import('./modalconsulta/modalconsulta.module').then( m => m.ModalconsultaPageModule)
  },
  {
    path: 'modalbloqingresomaterial',
    loadChildren: () => import('./modalbloqingresomaterial/modalbloqingresomaterial.module').then( m => m.ModalbloqingresomaterialPageModule)
  },
  {
    path: 'modalsolicitudfracionamiento',
    loadChildren: () => import('./modalsolicitudfracionamiento/modalsolicitudfracionamiento.module').then( m => m.ModalsolicitudfracionamientoPageModule)
  },
  {
    path: 'modalbloqordenfracionamiento',
    loadChildren: () => import('./modalbloqordenfracionamiento/modalbloqordenfracionamiento.module').then( m => m.ModalbloqordenfracionamientoPageModule)
  },
  {
    path: 'modalfraccionamientoqr',
    loadChildren: () => import('./modalfraccionamientoqr/modalfraccionamientoqr.module').then( m => m.ModalfraccionamientoqrPageModule)
  },
  {
    path: 'modalentregas',
    loadChildren: () => import('./modalentregas/modalentregas.module').then( m => m.ModalentregasPageModule)
  },
  {
    path: 'modalsobremodalentregas',
    loadChildren: () => import('./modalsobremodalentregas/modalsobremodalentregas.module').then( m => m.ModalsobremodalentregasPageModule)
  },
  {
    path: 'modalnovedadessupervisor',
    loadChildren: () => import('./modalnovedadessupervisor/modalnovedadessupervisor.module').then( m => m.ModalnovedadessupervisorPageModule)
  },
  {
    path: 'modaleditarusuario',
    loadChildren: () => import('./modaleditarusuario/modaleditarusuario.module').then( m => m.ModaleditarusuarioPageModule)
  },
  {
    path: 'modaldecarreteaotro',
    loadChildren: () => import('./modaldecarreteaotro/modaldecarreteaotro.module').then( m => m.ModaldecarreteaotroPageModule)
  },
  {
    path: 'modalordenarfracciqr',
    loadChildren: () => import('./modalordenarfracciqr/modalordenarfracciqr.module').then( m => m.ModalordenarfracciqrPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
