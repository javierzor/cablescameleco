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

@Component({
  selector: 'app-crear-roles',
  templateUrl: './crear-roles.page.html',
  styleUrls: ['./crear-roles.page.scss'],
})
export class CrearRolesPage implements OnInit {
  permisosconsultadosencomponenteprincipalYService: any;
  puedenavegaraqui:any;
  seccionactiva: string;
  usuariologeado: any;
  todoslosroles: any;
  respuestadeguardarrol: any;
  rol_descripcion: any;
  nombre_rol: any;
  constructor(
    private location: Location,
    private router: Router,
    private json: JsonService,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public loading: LoadingController,
    private route: ActivatedRoute,
    public modalController: ModalController,
    public datepipe: DatePipe,
    public menuCtrl: MenuController,
    public myapp: AppComponent,
    public globalpermisos: GlobalpermisosService,
  )

{      
  
  this.consultaroles();

}



ionViewDidEnter(){
  this.usuariologeado=this.globalpermisos.usuariologeado;
  if(this.usuariologeado==undefined||this.usuariologeado==null){
    this.seccionactiva='no';
  }
  this.globalpermisos.mispermisosglobalesenservice;
  console.log('en la vista lo que tengo',this.permisosconsultadosencomponenteprincipalYService);
  if(this.globalpermisos.mispermisosglobalesenservice){
  if(this.globalpermisos.mispermisosglobalesenservice['permisonumero8']=='si')
  {
    this.puedenavegaraqui='si';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
  else if(this.globalpermisos.mispermisosglobalesenservice['permisonumero8']!='si'){
    this.puedenavegaraqui='no';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
}
}

async consultaroles(){
  const espereporfavor = await this.loadingController.create({
    message: 'Reconsultando Roles',spinner: 'bubbles',duration: 3000,
    });
    espereporfavor.present();
  var todoslosroles = {
    nombre_solicitud: 'todoslosroles'
    }
    this.json.variasfunciones(todoslosroles).subscribe((res: any ) =>{
    console.log('respuesta a la solicitud variasfunciones,  todoslosroles', res);
    this.todoslosroles=res;
    espereporfavor.dismiss();
    })
}

OnChangeOFnombre(event){ console.log('OnChange:',event.target.value);
  this.nombre_rol=event.target.value;
}

OnChangeOFdescripcion(event){ console.log('OnChange:',event.target.value);
  this.rol_descripcion=event.target.value;
}

reingresar(){
  this.router.navigate(['/login']);
  //vaciando variables usadas en esta vista
  this.seccionactiva='';
  this.puedenavegaraqui='';
}


 async ngOnInit() {
}


async borrarrol(aquitodoslosroles){ console.log('se intentara borrar al rol:',aquitodoslosroles);

const borrado = await this.loadingController.create({
  message: 'rol borrado',spinner: 'bubbles',duration: 1700,
  });
var borrardata = {
  nombre_solicitud: 'borrarrol',
  id_rol:aquitodoslosroles.id_rol
};   console.log('intentando enviar data:',borrardata);
this.json.variasfunciones(borrardata).subscribe((res: any ) =>{
  console.log('respuesta a la solicitud variasfunciones,  borrarrol', res);
  this.consultaroles();
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

async guardar(){
  const verifique = await this.loadingController.create({
    message: 'Verifique la información ingresada',spinner: 'bubbles',duration: 1200,
    });

  var guardarrol = {
    nombre_solicitud: 'guardarrol',
    nombre_rol:this.nombre_rol,
    rol_descripcion:this.rol_descripcion

  };   console.log('intentando enviar data:',guardarrol);
  this.json.variasfunciones(guardarrol).subscribe((res: any ) =>{
    console.log('respuesta a la solicitud variasfunciones,  guardarrol', res);
    this.respuestadeguardarrol=res;
    this.consultaroles();
    if(this.respuestadeguardarrol.id>0){
      console.log('Guardado');
    }
    }  //cierrran las lecturas de res
    ,  //separador de lecturas
    err => {
      verifique.present();
    } //cierran las lecturas de err
  ); //cierra la suscripcion

}

async modaldeeditar(aquitodoslosroles) {
  const modal = await this.modalController.create({
    component: ModalrolesPage,
    componentProps: {
      cssClass: 'my-custom-class',
      'dataparaelmodal': aquitodoslosroles,
      // 'apellidos': 'Sánchez',
      // 'locale': 'es_ES'
    }
  });
  return await modal.present();
}




}
