import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { JsonService } from '../json.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-modalsobremodalentregas',
  templateUrl: './modalsobremodalentregas.page.html',
  styleUrls: ['./modalsobremodalentregas.page.scss'],
})
export class ModalsobremodalentregasPage implements OnInit {
  traidopormodalparams: any;
  respuestaentregarorden: any;
  respuestanovedadorden: any;
  tipo_novedad: any;

  constructor(
    private location: Location,
    private json: JsonService,
    navParams: NavParams,
    public modalController: ModalController,
    private router: Router,
  ) 
  {
    this.tipo_novedad='';
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

  dismissyacualiza() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': 'cierraelmodalanteriortambien'
    });
  }

  ONCHANGEtipo_novedad(event){ console.log('ONCHANGE',event.target.value);
    this.tipo_novedad=event.target.value;
  }

  aceptarentregar(){
    var dataentregarorden = {
      id_inutilizado:this.traidopormodalparams.id_inutilizado,
      nombre_solicitud:'entregarorden'
      }
      this.json.variasfunciones(dataentregarorden).subscribe(async (res: any ) =>{
        console.log('respuesta a la solicitud variasfunciones,  entregarorden', res);
        this.respuestaentregarorden=res;
        if(res>0){
          // this.router.navigate(['/entregas']);
          this.dismissyacualiza()
        }
  
      });
  }

  aceptarentregarnovedad(){
    var datanovedadorden = {
      id_inutilizado:this.traidopormodalparams.id_inutilizado,
      nombre_solicitud:'novedadorden',
      tipo_novedad:this.tipo_novedad
      }
      this.json.variasfunciones(datanovedadorden).subscribe(async (res: any ) =>{
        console.log('respuesta a la solicitud variasfunciones,  novedadorden', res);
        this.respuestanovedadorden=res;
        if(res>0){
          // this.router.navigate(['/entregas']);
          // this.router.navigate(['/entregas']);
          this.dismissyacualiza()

        }
      });

  }

}
