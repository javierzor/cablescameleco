import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Printer, PrintOptions } from '@awesome-cordova-plugins/printer/ngx';
import { JsonService } from '../json.service';
import { DatePipe } from '@angular/common'
import { GlobalpermisosService } from '../globalpermisos.service';

@Component({
  selector: 'app-modalfraccionamientoqr',
  templateUrl: './modalfraccionamientoqr.page.html',
  styleUrls: ['./modalfraccionamientoqr.page.scss'],
})
export class ModalfraccionamientoqrPage implements OnInit {
  traidopormodalparams: any;
  nuevafecha: Date;
  user_nombre: any;
  user_id: any;
  respuestaconsultarstockpornumerofraccionado: any;
  
  constructor(
    public loadingController: LoadingController,
    private json: JsonService,
    private printer: Printer,
    public modalController: ModalController,
    navParams: NavParams,
    public datepipe: DatePipe,
    public globalpermisos: GlobalpermisosService
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

    dismissporquefracciono() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': 'dismissporquefracciono'
    });
  }


  
  
  async cortarydescontardelcarrete(){
    const consultando = await this.loadingController.create({message: 'Consultando...',spinner: 'bubbles',
    duration: 15000, });
    const stocknodisponible= await this.loadingController.create({message: 'Stock No Disponible...',spinner: 'bubbles',
    duration: 1800,});
    consultando.present();
    //consulta de stock
    var dataconsultarstockpornumerofraccionado = {
      nombre_solicitud:'consultarstockpornumerofraccionado',
      // id_material: this.traidopormodalparams.id_material,
      referencia:this.traidopormodalparams.referencia,
      // metrosencarrete: this.traidopormodalparams.metrosencarrete
      id_ingresado_por_el_usuario: this.traidopormodalparams.id_ingresado_por_el_usuario
      }
      this.json.variasfunciones(dataconsultarstockpornumerofraccionado).subscribe(async (res: any ) =>{
            console.log('respuesta a la solicitud variasfunciones,  consultarstockpornumerofraccionado', res);
            this.respuestaconsultarstockpornumerofraccionado=res;
            if(this.respuestaconsultarstockpornumerofraccionado>=this.traidopormodalparams.metrosafraccionar){

                  this.nuevafecha = new Date ();
                  let fecha_fraccionado =this.datepipe.transform(this.nuevafecha, 'yyyy-MM-dd');
                  let hora_fraccionado =this.datepipe.transform(this.nuevafecha, 'hh:mm');
                  this.user_nombre=this.globalpermisos.nombre;
                  this.user_id=this.globalpermisos.id_usuario;
                
                    var datafraccionarordenfraccionamiento = {
                      nombre_solicitud:'fraccionarordenfraccionamiento',
                      id_inutilizado:this.traidopormodalparams.id_inutilizado,
                      operario_fraccionado:this.user_nombre,
                      fecha_fraccionado:fecha_fraccionado,
                      hora_fraccionado:hora_fraccionado,
                      estado:'fraccionado',
                      id_ingresado_por_el_usuario: this.traidopormodalparams.id_ingresado_por_el_usuario
                      }
                  this.json.variasfunciones(datafraccionarordenfraccionamiento).subscribe(async (res: any ) =>{
                        console.log('respuesta a la solicitud variasfunciones,  fraccionarordenfraccionamiento', res);
                        consultando.dismiss();
                        this.printer.print();
                        this.dismissporquefracciono();
                  });

            } //cierre del condicional stock mayor a ESTOS METROS a fraccionar
            else{
              consultando.dismiss();
              stocknodisponible.present();
            } //cierre del FALSO Else
      }); //termina la consulta de stock



  }
  
} //cierre de la clase