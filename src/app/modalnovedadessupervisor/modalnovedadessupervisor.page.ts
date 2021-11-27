import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JsonService } from '../json.service';
import { Router } from '@angular/router';
import { Platform, NavController,LoadingController, AlertController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-modalnovedadessupervisor',
  templateUrl: './modalnovedadessupervisor.page.html',
  styleUrls: ['./modalnovedadessupervisor.page.scss'],
})
export class ModalnovedadessupervisorPage implements OnInit {

  traidopormodalparams: any;
  apretovolverafracciona: any;
  apretoparaentregar: any;
  respuestaentregarorden: any;
  respuestanovedadesvolverafracciona: any;
  observacion_atencion_novedad: any;

  constructor(
    private location: Location,
    private json: JsonService,
    public modalController: ModalController,
    navParams: NavParams,
    private router: Router,

  ) 
  {

    this.apretoparaentregar='no';
      this.apretovolverafracciona='no';
    this.traidopormodalparams=navParams.get('dataparaelmodal');
    console.log('recibido por modalparams', this.traidopormodalparams);

  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  dismissyactualiza() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': 'atualiza'
    });
  }

  ngOnInit() {
  }

  paraentrega(){
    this.apretoparaentregar='si';
    this.apretovolverafracciona='no';
  }

  volverafracciona(){
    this.apretovolverafracciona='si';
    this.apretoparaentregar='no';

  }

  confirmarvolverafracciona(){
    var datanovedadesvolverafracciona = {
      id_inutilizado:this.traidopormodalparams.id_inutilizado,
      nombre_solicitud:'novedadesvolverafracciona'
      }
      this.json.variasfunciones(datanovedadesvolverafracciona).subscribe(async (res: any ) =>{
        console.log('respuesta a la solicitud variasfunciones,  novedadesvolverafracciona', res);
        this.respuestanovedadesvolverafracciona=res;
        if(res>0){
          this.dismissyactualiza();
        }
  
      });
  }

  CHANGEnovedad(event){console.log('evento',event.target.value);
    this.observacion_atencion_novedad=event.target.value;
  }

  confirmarparaentrega(){
    var dataentregarorden = {
      observacion_atencion_novedad:this.observacion_atencion_novedad,
      id_inutilizado:this.traidopormodalparams.id_inutilizado,
      nombre_solicitud:'entregarorden'
      }
      this.json.variasfunciones(dataentregarorden).subscribe(async (res: any ) =>{
        console.log('respuesta a la solicitud variasfunciones,  entregarorden', res);
        this.respuestaentregarorden=res;
        if(res>0){
          this.dismissyactualiza();
        }
  
      });
  }


  noconfirmarvolverafracciona(){
    this.apretovolverafracciona='no';
    this.apretoparaentregar='no';
  }

  noconfirmarparaentrega(){
    this.apretovolverafracciona='no';
    this.apretoparaentregar='no';
  }

}
