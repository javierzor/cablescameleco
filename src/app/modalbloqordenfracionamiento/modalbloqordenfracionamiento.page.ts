import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { JsonService } from '../json.service';
import { GlobalpermisosService } from '../globalpermisos.service';

@Component({
  selector: 'app-modalbloqordenfracionamiento',
  templateUrl: './modalbloqordenfracionamiento.page.html',
  styleUrls: ['./modalbloqordenfracionamiento.page.scss'],
})
export class ModalbloqordenfracionamientoPage implements OnInit {

  traidopormodalparams: any;
  observacion: any;
  user_nombre_bloqueador: any;

  constructor(
    public globalpermisos: GlobalpermisosService,
    public modalController: ModalController,
    navParams: NavParams,
    private json: JsonService,

  ) 
  {
    this.traidopormodalparams=navParams.get('dataparaelmodal');
    console.log('recibido por modalparams', this.traidopormodalparams);
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

  ONCHANGEobservacion(event){
    this.observacion=event.target.value;
  }

  aceptar(){
    this.user_nombre_bloqueador=this.globalpermisos.nombre;
    var databloquearordenfraccionamiento = {
      nombre_solicitud:'bloquearordenfraccionamiento',
      id_inutilizado:this.traidopormodalparams.id_inutilizado,
      bloqueo_observacion:this.observacion,
      user_nombre_bloqueador:this.user_nombre_bloqueador
    }
    this.json.variasfunciones(databloquearordenfraccionamiento).subscribe((res: any ) =>{
      if(res>0){
        console.log('res de borrar',res);
        this.modalController.dismiss({
          'dismissed': true
        });
      }
      });
  }


}