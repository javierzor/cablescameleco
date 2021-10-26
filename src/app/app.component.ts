import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'planet' },
    { title: 'Ingreso de Material', url: 'ingreso-material', icon: 'add' },
    { title: 'Consulta', url: 'consulta', icon: 'search' },
    { title: 'Solicitud de Fraccionamiento', url: 'solicitud-fraccionamiento', icon: 'archive' },
    { title: 'Bloqueo de Ordenes de fraccionamiento', url: 'bloq-orden-fraccionamiento', icon: 'trash' },
    { title: 'Bloqueo de ingreso de material', url: 'bloq-ingreso-material', icon: 'stop-circle' },
    { title: 'Fraccionamiento', url: 'fraccionamiento', icon: 'cut' },
    { title: 'Auditoria', url: 'auditoria', icon: 'clipboard' },
    { title: 'Creación de Roles', url: 'crear-roles', icon: 'enter' },
    { title: 'Creación de usuarios', url: 'crear-usuarios', icon: 'person-add' },
    { title: 'Creación de referencias', url: 'crear-referencias', icon: 'duplicate' },
    { title: 'De Carrete a otro almacenaje', url: 'de-carrete-a-otro', icon: 'at-circle' },
    { title: 'Pantalla de entregas', url: 'pantalla-entregas', icon: 'checkbox' },
    { title: 'Entregas', url: 'entregas', icon: 'laptop' },
    { title: 'Novedades Supervisor', url: 'novedades-supervisor', icon: 'newspaper' },
  ];
  constructor() {}
}
