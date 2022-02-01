import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { JsonService } from '../json.service';
import { GlobalpermisosService } from '../globalpermisos.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-modalsolicitudfracionamiento',
  templateUrl: './modalsolicitudfracionamiento.page.html',
  styleUrls: ['./modalsolicitudfracionamiento.page.scss'],
})
export class ModalsolicitudfracionamientoPage implements OnInit {

  traidopormodalparams: any;
  observacion: any;
  documento: any;
  metrosafraccionar: any;
  activarbotonaceptar: string;
  user_nombre: any;
  user_id: any;
  fecha_orden: Date;
  yaapretoaceptar: string;
  bodega: any;

  constructor(
    public loadingController: LoadingController,
    public datepipe: DatePipe,
    public modalController: ModalController,
    navParams: NavParams,
    private json: JsonService,
    public globalpermisos: GlobalpermisosService,
  ) 
  {
    this.activarbotonaceptar='no';
    this.yaapretoaceptar='no';
    this.traidopormodalparams=navParams.get('dataparaelmodal');
    console.log('recibido por modalparams', this.traidopormodalparams);
   }

  ngOnInit() {
  }

  ONCHANGEdocumento(event){console.log('Onchange',event.target.value);
    this.documento=event.target.value;
  }

  ONCHANGEmetrosafraccionar(event){console.log('Onchange',event.target.value);
  this.metrosafraccionar=event.target.value;
  }

  ONCHANGEobservacion(event){console.log('Onchange',event.target.value);
  this.observacion=event.target.value;
  }

  ONCHANGEverificarcampos(){
    if(this.documento!=null&&this.metrosafraccionar!=null&&this.documento!=undefined&&this.metrosafraccionar!=undefined&&this.documento!=''&&this.metrosafraccionar!='')
    {
      this.activarbotonaceptar='si';
    }
    else{
      this.activarbotonaceptar='no';

    }
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  dismissystep1() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': 'step1'
    });
  }



  async aceptar(){
    this.yaapretoaceptar='si';

  }

  noconfirmar(){
    this.activarbotonaceptar='si';
    this.yaapretoaceptar='no';
  }

  async confirmar(){
    const exitoso = await this.loadingController.create({
      message: 'Solicitud de Fraccionamiento ordenada exitosamente.',spinner: 'bubbles',duration: 2000,
      });

    this.fecha_orden = new Date ();
    let fecha_orden_arreglada =this.datepipe.transform(this.fecha_orden, 'yyyy-MM-dd');
    let hora_orden_arreglada =this.datepipe.transform(this.fecha_orden, 'hh:mm');

    this.user_nombre=this.globalpermisos.nombre;
    this.user_id=this.globalpermisos.id_usuario;
    this.bodega=this.globalpermisos.bodega;

    var datasolicitudfraccionamiento = {
      nombre_solicitud:'solicitudfraccionamiento',
      documento:this.documento,
      metrosafraccionar:this.metrosafraccionar,
      observacion:this.observacion,
      nombre_solicitador:this.user_nombre,
      user_id_solicitador: this.user_id,
      id_material:this.traidopormodalparams.id,
      bodega:this.bodega,
      carreteorrollo:this.traidopormodalparams.carreteorrollo,
      descripcion:this.traidopormodalparams.descripcion,
      fecha_ingreso_material:this.traidopormodalparams.fecha_autogenerada,
      fecha_orden:fecha_orden_arreglada,
      metrosencarrete: this.traidopormodalparams.metrosencarrete,
      numerodenotadeentrada: this.traidopormodalparams.numerodenotadeentrada,
      producto:this.traidopormodalparams.producto,
      referencia:this.traidopormodalparams.referencia,
      hora_orden: hora_orden_arreglada
      
    }
    console.log('esta Info sale:',datasolicitudfraccionamiento);

    this.json.variasfunciones(datasolicitudfraccionamiento).subscribe((res: any ) =>{
      if(res.id>0){
        console.log('res de datasolicitudfraccionamiento',res);
        exitoso.present();
        this.modalController.dismiss({
          'dismissed': 'step1'
        });
      }
      });
  }


}
