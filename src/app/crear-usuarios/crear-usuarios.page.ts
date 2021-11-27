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
import { ModalrolesPage } from '../modalroles/modalroles.page';
import { ModaleditarusuarioPage } from '../modaleditarusuario/modaleditarusuario.page';

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
    public modalController: ModalController,
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


  async iraeditar(aquitodoslosusuarios, i){console.log('se editara al usuario', aquitodoslosusuarios);

const modal = await this.modalController.create({
  component: ModaleditarusuarioPage,
  componentProps: {
    cssClass: 'my-custom-class',
    'dataparaelmodal': aquitodoslosusuarios,
  }
});

modal.onDidDismiss().then((data) => {

  console.log('data', data['data']);
  console.log('data dismissed', data['data'].dismissed);
  if(data['data'].dismissed=='actualizalalistadeusuarios'){
    this.consultausuarios()
  }

});


console.log('enviando estos datos al modal qr',aquitodoslosusuarios);
return await modal.present();

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

  async guardar(){
  const verifique = await this.loadingController.create({
    message: 'Verifique la información ingresada',spinner: 'bubbles',duration: 1200,
    });

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
    console.log('respuesta a la solicitud variasfunciones,  guardarusuario', res);
    this.respuestadeguardarusuario=res;
    this.consultausuarios();
    if(this.respuestadeguardarusuario.id>0){
      console.log('Guardado');
    }
    }  //cierrran las lecturas de res
    ,  //separador de lecturas
    err => {
      verifique.present();
    } //cierran las lecturas de err
  ); //cierra la suscripcion

}

  async borrarusuario(aquitodoslosusuarios){ console.log('se intentara borrar al usuario:',aquitodoslosusuarios);

  const borrado = await this.loadingController.create({
    message: 'Usuario borrado',spinner: 'bubbles',duration: 1700,
    });
  var borrardata = {
    nombre_solicitud: 'borrarusuario',
    id:aquitodoslosusuarios.id
  };   console.log('intentando enviar data:',borrardata);
  this.json.variasfunciones(borrardata).subscribe((res: any ) =>{
    console.log('respuesta a la solicitud variasfunciones,  borrarusuario', res);
    this.consultausuarios();
    if(res){
      console.log('borrado');
      borrado.present();
    }
    }  //cierrran las lecturas de res
    ,  //separador de lecturas
    err => {
    } //cierran las lecturas de err
  ); //cierra la suscripcion

  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalrolesPage,
      componentProps: {
        'nombre': 'Aitor',
        'apellidos': 'Sánchez',
        'locale': 'es_ES'
      }
    });
    return await modal.present();
  }




}
