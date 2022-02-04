import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams, AlertController } from '@ionic/angular';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-modalconsulta',
  templateUrl: './modalconsulta.page.html',
  styleUrls: ['./modalconsulta.page.scss'],
})
export class ModalconsultaPage implements OnInit {

  traidopormodalparams: any;
  stocks:  Array<any> = [];
  cadastock:  Array<any> = [];
  respuestastock: any;

  // traidopormodalparams:  Array<any> = [];

  constructor(
    private alertController: AlertController,
    private json: JsonService,
    public modalController: ModalController,
    navParams: NavParams

  ) 
  {
    this.traidopormodalparams=navParams.get('dataparaelmodal');
    console.log('recibido por modalparams', this.traidopormodalparams);
  }
  


  ngOnInit() {
  }


  consultarstock(producto){
    if(producto.id>0&&producto.id<1){
      producto.idpop='0000000'+producto.id
    }
    else if(producto.id>10&&producto.id<100){
      producto.idpop='000000'+producto.id

    }
    else if(producto.id>100&&producto.id<1000){
      producto.idpop='00000'+producto.id

    }
    else if(producto.id>1000&&producto.id<10000){
      producto.idpop='0000'+producto.id

    }
    else if(producto.id>10000&&producto.id<100000){
      producto.idpop='000'+producto.id

    }


    var data = {
      nombre_solicitud:'consultarstockpornumerofraccionado',
      id_ingresado_por_el_usuario:producto.id,
      referencia:producto.referencia
      }
  this.json.variasfunciones(data).subscribe( async (res: any ) =>{
    console.log('consultarstockpornumerofraccionado',res);
    this.respuestastock=res;
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Quedan: '+this.respuestastock+' '+'Mts',
      subHeader: 'Stock Actual para:',
      message: producto.descripcion+'<br/>'+producto.referencia+'<br/> Carrete:'+producto.idpop,
      
      buttons: ['OK']
    });
    await alert.present();
   
  });
  }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
