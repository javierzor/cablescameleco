import { Component, OnInit } from '@angular/core';
import { ModalController,LoadingController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { JsonService } from '../json.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { GlobalpermisosService } from '../globalpermisos.service';

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
    public loadingController: LoadingController,
    public globalpermisos: GlobalpermisosService,
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

  async aceptarentregar(){
    const consultando = await this.loadingController.create({message: 'Validando información...',spinner: 'bubbles',
    duration: 15000, });
    const entregaenviada= await this.loadingController.create({message: 'Entrega guardada!',spinner: 'bubbles',
    duration: 1700,});
    const estaordenyahasidoentregada= await this.loadingController.create({message: 'ESTA ORDEN DE COMPRA YA FUE VALIDADA PARA ENTREGA!',spinner: 'bubbles',
    duration: 1700,});
    consultando.present();

    var dataentregarorden = {
      id_inutilizado:this.traidopormodalparams.id_inutilizado,
      nombre_solicitud:'entregarorden'
      }
      this.json.variasfunciones(dataentregarorden).subscribe(async (res: any ) =>{
        console.log('respuesta a la solicitud variasfunciones,  entregarorden', res);
        this.respuestaentregarorden=res;
        if(res>0){
          consultando.dismiss();
          entregaenviada.present();
          // this.router.navigate(['/entregas']);
          console.log('aceptar ( se cambio a entregado) entrega:...')
          this.dismissyacualiza();
        }
        else if(res<1){
          consultando.dismiss();
          estaordenyahasidoentregada.present();
        }
  
      });
  }

  async aceptarentregarnovedad(){

    const consultando = await this.loadingController.create({message: 'Validando información...',spinner: 'bubbles',
    duration: 15000, });
    const entregaenviada= await this.loadingController.create({message: 'Novedad guardada!',spinner: 'bubbles',
    duration: 1700,});
    const estaordenyahasidoentregada= await this.loadingController.create({message: 'ESTA NOVEDAD YA FUE VALIDADA!',spinner: 'bubbles',
    duration: 1700,});
    consultando.present();

    var datanovedadorden = {
      operario_entrega:this.globalpermisos.nombre,
      id_inutilizado:this.traidopormodalparams.id_inutilizado,
      nombre_solicitud:'novedadorden',
      tipo_novedad:this.tipo_novedad
      }
      this.json.variasfunciones(datanovedadorden).subscribe(async (res: any ) =>{
        console.log('respuesta a la solicitud variasfunciones,  novedadorden', res);
        this.respuestanovedadorden=res;
        if(res>0){
          consultando.dismiss();
          entregaenviada.present();
          this.dismissyacualiza();
        }
        else if(res<1){
          consultando.dismiss();
          estaordenyahasidoentregada.present();
        }

      });

  }

}
