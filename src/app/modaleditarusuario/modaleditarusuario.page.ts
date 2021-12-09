import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JsonService } from '../json.service';
import { Router } from '@angular/router';
import { Platform, NavController,LoadingController, AlertController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Location } from "@angular/common";
import { GlobalpermisosService } from '../globalpermisos.service';

@Component({
  selector: 'app-modaleditarusuario',
  templateUrl: './modaleditarusuario.page.html',
  styleUrls: ['./modaleditarusuario.page.scss'],
})
export class ModaleditarusuarioPage implements OnInit {
  traidopormodalparams: any;
  todoslosroleseditarusuario: any;
  respuestatodoslosroleseditarusuario: any;
  id_rol: any;
  nombre: any;
  respuestaeditarusuariomodal: any;
  nombre_rol: any;
  activo: any;
  modificado_por: any;
  activado_o_desactivado_por: any;

  constructor(
    public globalpermisos: GlobalpermisosService,
    public loadingController: LoadingController,
    private location: Location,
    private json: JsonService,
    navParams: NavParams,
    private router: Router,
    public modalController: ModalController

  ) 
  
  { 
    this.traidopormodalparams=navParams.get('dataparaelmodal');
    this.nombre=this.traidopormodalparams.nombre


    console.log('recibido por modalparams', this.traidopormodalparams);

    var datatodoslosroleseditarusuario = {
      nombre_solicitud: 'todoslosroleseditarusuario'
      }
      this.json.variasfunciones(datatodoslosroleseditarusuario).subscribe((res: any ) =>{
      console.log('respuesta a la solicitud variasfunciones,  todoslosroleseditarusuario', res);
      this.respuestatodoslosroleseditarusuario=res;
      });
  



  }

  CHANGEnombre(event){console.log('change',event.target.value);
    this.nombre=event.target.value;
  }

  CHANGErol(event){console.log('change',event.target.value);
    this.id_rol=event.target.value;
  }

  CHANGEactivo(event){console.log('change',event.target.value);
  this.activo=event.target.value;
  this.activado_o_desactivado_por=this.globalpermisos.nombre;
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

  funciondismissyactualizalalistadeusuarios() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': 'actualizalalistadeusuarios'
    });
  }
  
  async guardaredicion(){
    this.modificado_por=this.globalpermisos.nombre;

    var dataeditarusuariomodal = {
      nombre_solicitud: 'editarusuariomodal',
      id:this.traidopormodalparams.id,
      id_rol:this.id_rol,
      nombre:this.nombre,
      activo:this.activo,
      modificado_por:this.modificado_por,
      activado_o_desactivado_por: this.activado_o_desactivado_por
      }
      this.json.variasfunciones(dataeditarusuariomodal).subscribe((res: any ) =>{
      console.log('respuesta a la solicitud variasfunciones,  editarusuariomodal', res);
      this.respuestaeditarusuariomodal=res;
      if(res>0){
       this.funciondismissyactualizalalistadeusuarios();
      }

      });

}


}
