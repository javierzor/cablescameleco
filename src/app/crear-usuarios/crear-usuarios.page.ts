import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { JsonService } from '../json.service';
import { Router } from '@angular/router';
import { Platform, NavController,LoadingController, AlertController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { GlobalpermisosService } from '../globalpermisos.service';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.page.html',
  styleUrls: ['./crear-usuarios.page.scss'],
})
export class CrearUsuariosPage implements OnInit {
  permisosconsultadosencomponenteprincipalYService: any;
  puedenavegaraqui:any;
  seccionactiva: string;
  usuariologeado: any;
  rolestraidos: any;
  codigo_empleado: any;
  nombre: any;
  identificacion: any;
  dependencia: any;
  checkactivo:any;
  activo: any;
  id_rol: any;
  respuestadeguardarusuario: any;
  todoslosusuarios: any;
  constructor(
    private location: Location,
    private router: Router,
    private json: JsonService,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public loading: LoadingController,
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
    public datepipe: DatePipe,
    public menuCtrl: MenuController,
    public myapp: AppComponent,
    public globalpermisos: GlobalpermisosService,
  )

{      
  var data = {
    nombre_solicitud: 'todoslosroles'
  }
  this.json.variasfunciones(data).subscribe((res: any ) =>{
    console.log('respuesta a la solicitud variasfunciones,  todoslosroles', res);
    this.rolestraidos=res;
    })
this.consultausuarios();

} //cierre del dom


  async consultausuarios(){
  const espereporfavor = await this.loadingController.create({
    message: 'Reconsultando usuarios',spinner: 'bubbles',duration: 5000,
    });
    espereporfavor.present();
  var todoslosusuarios = {
    nombre_solicitud: 'todoslosusuarios'
    }
    this.json.variasfunciones(todoslosusuarios).subscribe((res: any ) =>{
    console.log('respuesta a la solicitud variasfunciones,  todoslosusuarios', res);
    this.todoslosusuarios=res;
    espereporfavor.dismiss();
    })
}
OnChangeOFcodigo(event){ console.log('OnChange:',event.target.value);
  this.codigo_empleado=event.target.value;
}

OnChangeOFidentificacion(event){ console.log('OnChange:',event.target.value);
  this.identificacion=event.target.value;
}

OnChangeOFnombre(event){ console.log('OnChange:',event.target.value);
  this.nombre=event.target.value;
}

OnChangeOFdependencia(event){ console.log('OnChange:',event.target.value);
  this.dependencia=event.target.value;
}

OnChangeOFactivo(event){ console.log('OnChange:',event.detail.checked);
  this.checkactivo=event.detail.checked;
  if(this.checkactivo==true){
    this.activo='1';
  }
  if(this.checkactivo==false){
    this.activo='0';
  }
}

OnChangeOFrol(event){ console.log('OnChange:',event.target.value);
  this.id_rol=event.target.value;

}


iraeditar(aquitodoslosusuarios, i){console.log('se editara al usuario', aquitodoslosusuarios);

}

borrar(aquitodoslosusuarios, i){console.log('se borrara al usuario', aquitodoslosusuarios);

}



ionViewDidEnter(){
  this.usuariologeado=this.globalpermisos.usuariologeado;
  if(this.usuariologeado==undefined||this.usuariologeado==null){
    this.seccionactiva='no';
  }
  this.globalpermisos.mispermisosglobalesenservice;
  console.log('en la vista lo que tengo',this.permisosconsultadosencomponenteprincipalYService);
  if(this.globalpermisos.mispermisosglobalesenservice){
  if(this.globalpermisos.mispermisosglobalesenservice['permisonumero9']=='si')
  {
    this.puedenavegaraqui='si';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
  else if(this.globalpermisos.mispermisosglobalesenservice['permisonumero9']!='si'){
    this.puedenavegaraqui='no';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
}

}

cancelar(){
  this.router.navigate(['/home']);
}

reingresar(){
  this.router.navigate(['/login']);
  //vaciando variables usadas en esta vista
  this.seccionactiva='';
  this.puedenavegaraqui='';
}


 async ngOnInit() {
}

guardar(){
 
  var guardarusuario = {
    nombre_solicitud: 'guardarusuario',
    codigo_empleado:this.codigo_empleado,
    identificacion:this.identificacion,
    nombre:this.nombre,
    dependencia:this.dependencia,
    activo:this.activo,
    id_rol:this.id_rol

  };   console.log('intentando enviar data:',guardarusuario);
  this.json.variasfunciones(guardarusuario).subscribe((res: any ) =>{
    console.log('respuesta a la solicitud variasfunciones,  todoslosroles', res);
    this.respuestadeguardarusuario=res;
    this.consultausuarios();
    })

}



}
