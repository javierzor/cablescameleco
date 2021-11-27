import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-modalqr',
  templateUrl: './modalqr.page.html',
  styleUrls: ['./modalqr.page.scss'],
})
export class ModalqrPage implements OnInit {
  traidopormodalparams: any;

  constructor(
    public loadingController: LoadingController,
    private json: JsonService,
    private router: Router,
    public modalController: ModalController,
    navParams: NavParams

  ) 
  {
    this.traidopormodalparams=navParams.get('dataparaelmodal');
    console.log('recibido por modalparams', this.traidopormodalparams);
   }

  ngOnInit() {
  }


  dismiss() {
    this.router.navigate(['/ingreso-material']);
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  
  
  async imprimir(){
    const guardandoespere = await this.loadingController.create({
      message: 'Guardando la información, porfavor espere...',spinner: 'bubbles',duration: 15000,
      });
      const materialingresado = await this.loadingController.create({
        message: 'Material ingresado',spinner: 'bubbles',duration: 1200,
        });
      guardandoespere.present();

    var updatearelingresodematerialenelmodal = {
      nombre_solicitud:'updatearelingresodematerialenelmodal',
      tipo_de_qr:'ingreso-material',
      bodega:this.traidopormodalparams.bodega,
      id:this.traidopormodalparams.createdCode,
      referencia:this.traidopormodalparams.referencia,
      producto:this.traidopormodalparams.producto,
      descripcion:this.traidopormodalparams.descripcion,
      carreteorrollo:this.traidopormodalparams.carreteorrollo,
      numerodenotadeentrada:this.traidopormodalparams.numerodenotadeentrada,
      metrosencarrete:this.traidopormodalparams.metrosencarrete,
      fecha_autogenerada:this.traidopormodalparams.fecha_autogenerada_arreglada,
      nombre_user:this.traidopormodalparams.nombre_user,
      id_user:this.traidopormodalparams.id_user,
      createdCode:this.traidopormodalparams.createdCode
    }


    this.json.variasfunciones(updatearelingresodematerialenelmodal).subscribe(async (res: any ) =>{
        console.log('respuesta del ingreso de material (pero en el modal), ingreso de material',res);
        if(res>0){
          guardandoespere.dismiss();
          materialingresado.present();
          this.dismiss();
        }
    });
    
  }
  
}