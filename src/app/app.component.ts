import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { JsonService } from './json.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Home', url: 'home', icon: 'planet' },
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

  static distribucionglobaldepermisos: any;
  permisos:  Array<any> = [];
  permisosconsultados:  Array<any> = [];
  traidodellogin: any;
  userinfo: any;
  jsonempiezaencompomenteppal: any;

  constructor(
    private json: JsonService,
    private router: Router,
  ) 
  {
    this.distribuirlotraidodellogin();
  }

  salir(){
    localStorage.clear();  //limpiando cache
    this.router.navigate(['/login']);
  }

distribuirlotraidodellogin()
{ 
  this.traidodellogin=LoginPage.variableglobalintentodelogin;
  var data = {
    codigo_qr_acceso:this.traidodellogin
   }
  this.json.empieza(data).subscribe((res: any ) =>{
    console.log('respuesta de Json empieza en Componente Ppal:', res);
    this.jsonempiezaencompomenteppal=res[0];
    if(res.length=='0'){
      console.log('El usuario no existe o esta inactivo en el sistema');
      }
      if (res.length>0&&res[0].activo>0){
        var data = {id_rol: this.jsonempiezaencompomenteppal.id_rol}
        console.log('el usuario existe y esta activo en el sistema');
        this.json.rol(data).subscribe((res: any ) =>{
          console.log('respuesta de rol permisos: json.rol en Componente Ppal ',res);
          this.userinfo = res['detalles'];
          this.permisos = res['suspermisos'];

          //mapeando la matriz
          if(this.permisos){
            for (var i=0; i<this.permisos.length; i++) { 
                  if(this.permisos[i][0].id_permiso=='1'){
                  this.permisosconsultados['permisonumero1']='si';
                  }
                  if(this.permisos[i][0].id_permiso=='2'){
                  this.permisosconsultados['permisonumero2']='si';
                  }
                  if(this.permisos[i][0].id_permiso=='3'){
                  this.permisosconsultados['permisonumero3']='si';
                  }
                  if(this.permisos[i][0].id_permiso=='3'){
                  this.permisosconsultados['permisonumero3']='si';
                  }
                  if(this.permisos[i][0].id_permiso=='4'){
                  this.permisosconsultados['permisonumero4']='si';
                  }
                  if(this.permisos[i][0].id_permiso=='5'){
                  this.permisosconsultados['permisonumero5']='si';
                  }
                  if(this.permisos[i][0].id_permiso=='6'){
                  this.permisosconsultados['permisonumero6']='si';
                  }
                  if(this.permisos[i][0].id_permiso=='7'){
                  this.permisosconsultados['permisonumero7']='si';
                  }
                  if(this.permisos[i][0].id_permiso=='8'){
                  this.permisosconsultados['permisonumero8']='si';
                  }
                  if(this.permisos[i][0].id_permiso=='9'){
                  this.permisosconsultados['permisonumero9']='si';
                  }
                  if(this.permisos[i][0].id_permiso=='10'){
                  this.permisosconsultados['permisonumero10']='si';
                  }
                  if(this.permisos[i][0].id_permiso=='11'){
                  this.permisosconsultados['permisonumero11']='si';
                  }
                  if(this.permisos[i][0].id_permiso=='12'){
                  this.permisosconsultados['permisonumero12']='si';
                  }
                  if(this.permisos[i][0].id_permiso=='13'){
                  this.permisosconsultados['permisonumero13']='si';
                  }
                  if(this.permisos[i][0].id_permiso=='14'){
                  this.permisosconsultados['permisonumero14']='si';
                  }
                }
                console.log('permisos',this.permisosconsultados);
                AppComponent.distribucionglobaldepermisos=this.permisosconsultados;
          }
        }); //cierra la consulta delos permisos
      }

   }); //termina la consulta de intento de login  




}
}
