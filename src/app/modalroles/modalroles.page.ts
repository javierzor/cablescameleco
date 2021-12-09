import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { JsonService } from '../json.service';
import { Platform, NavController,LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modalroles',
  templateUrl: './modalroles.page.html',
  styleUrls: ['./modalroles.page.scss'],
})
export class ModalrolesPage implements OnInit {
  traidopormodalparams: any;
  esteroltieneestospermisosactualmente: any;
  permisoaagregar: any;
  id_rol_traido: any;
  respuestaconocertodoslospermisosparaagregarunoaunrol: any;
  permisosagregarsplit: any;
  
  constructor(
    public loadingController: LoadingController,
    private json: JsonService,
  public modalController: ModalController,
  navParams: NavParams
  ) 
      
  {
    
    var dataconocertodoslospermisosparaagregarunoaunrol = {
      nombre_solicitud: 'conocertodoslospermisosparaagregarunoaunrol',
      }
    this.json.variasfunciones(dataconocertodoslospermisosparaagregarunoaunrol).subscribe((res: any ) =>{
      this.respuestaconocertodoslospermisosparaagregarunoaunrol=res;
      console.log('conocertodoslospermisosparaagregarunoaunrol', this.respuestaconocertodoslospermisosparaagregarunoaunrol);
    });




  this.traidopormodalparams=navParams.get('dataparaelmodal');
  console.log('recibido por modalparams', this.traidopormodalparams);
  this.id_rol_traido=this.traidopormodalparams.id_rol;
  var permisosdeesterol = {
    nombre_solicitud: 'conocerpermisosdeunrol',
    id_rol: this.traidopormodalparams.id_rol
    }
  this.json.variasfunciones(permisosdeesterol).subscribe((res: any ) =>{
    this.esteroltieneestospermisosactualmente=res;
    console.log(this.esteroltieneestospermisosactualmente);
  });

  }

  async actualizarlistaderolesdespuesdeborrar(){
    const borrado = await this.loadingController.create({
      message: 'Actualizando Roles',spinner: 'bubbles',duration: 1100,
      });
      borrado.present();
    this.id_rol_traido=this.traidopormodalparams.id_rol;
    var permisosdeesterol = {
      nombre_solicitud: 'conocerpermisosdeunrol',
      id_rol: this.traidopormodalparams.id_rol
      }
    this.json.variasfunciones(permisosdeesterol).subscribe((res: any ) =>{
      this.esteroltieneestospermisosactualmente=res;
      console.log(this.esteroltieneestospermisosactualmente);
      borrado.dismiss();
    });
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  OnChangeOFpermiso(event){ console.log('OnChange:',event.target.value);
  this.permisoaagregar=event.target.value;
  this.permisosagregarsplit=this.permisoaagregar.split(',');
  console.log('permisoaagregar con split:',this.permisosagregarsplit);
  console.log('id_permiso:',this.permisosagregarsplit[0]);
  console.log('nombre_permiso:',this.permisosagregarsplit[1]);

}

  async agregar(){
  const borrado = await this.loadingController.create({
    message: 'Rol agregado',spinner: 'bubbles',duration: 1300,
    });
  var dataagregarpermiso = {
    nombre_solicitud:'agregarpermisosaunrol',
    id_rol:this.id_rol_traido,
    id_permiso:this.permisosagregarsplit[0],
    nombre_permiso:this.permisosagregarsplit[1]
  }

  this.json.variasfunciones(dataagregarpermiso).subscribe((res: any ) =>{
    console.log(res);
    if(res){
      console.log('agregado');
      borrado.present();
      this.actualizarlistaderolesdespuesdeborrar();
    }
  });

}

async borrar(tienestospermisos){ console.log('se intentara borrar al usuario:',tienestospermisos);

const borrado = await this.loadingController.create({
  message: 'el permiso ha sido borrado de este rol',spinner: 'bubbles',duration: 2500,
  });
var borrarroldata = {
  nombre_solicitud: 'borrarpermisoderol',
  id_rol:this.id_rol_traido,
  id_permiso:tienestospermisos.id_permiso
};   console.log('intentando enviar data:',borrarroldata);
this.json.variasfunciones(borrarroldata).subscribe((res: any ) =>{
  console.log('respuesta a la solicitud variasfunciones,  borrarpermisoderol', res);
  if(res){
    console.log('borrado');
    borrado.present();
    this.actualizarlistaderolesdespuesdeborrar();
  }
  }  //cierrran las lecturas de res
  ,  //separador de lecturas
  err => {
  } //cierran las lecturas de err
); //cierra la suscripcion

}

}
