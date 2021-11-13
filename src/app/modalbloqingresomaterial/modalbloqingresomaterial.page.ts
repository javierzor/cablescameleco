import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { JsonService } from '../json.service';
@Component({
  selector: 'app-modalbloqingresomaterial',
  templateUrl: './modalbloqingresomaterial.page.html',
  styleUrls: ['./modalbloqingresomaterial.page.scss'],
})
export class ModalbloqingresomaterialPage implements OnInit {


  traidopormodalparams: any;
  observacion: any;

  constructor(
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
    var databloquearingresodematerial = {
      nombre_solicitud:'bloquearingresodematerial',
      id:this.traidopormodalparams.id,
      observacion:this.observacion
    }
    this.json.variasfunciones(databloquearingresodematerial).subscribe((res: any ) =>{
      if(res>0){
        console.log('res de borrar',res);
        this.modalController.dismiss({
          'dismissed': true
        });
      }
      });
  }

}
