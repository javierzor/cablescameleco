import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { JsonService } from '../json.service';
import { GlobalpermisosService } from '../globalpermisos.service';
import { Platform, NavController,LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modaldecarreteaotro',
  templateUrl: './modaldecarreteaotro.page.html',
  styleUrls: ['./modaldecarreteaotro.page.scss'],
})
export class ModaldecarreteaotroPage implements OnInit {
  step: string;
  codigo_qr_acceso: any;
  quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor: any;
  respuestaconsultarpermisosidroldecarreteaotro: any;
  traidopormodalparams: any;

  constructor(
    public loadingController: LoadingController,
    public globalpermisos: GlobalpermisosService,
    public modalController: ModalController,
    navParams: NavParams,
    private json: JsonService,
  ) 
  {
    this.step='1';
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
  
  funciondismissyvolverastep1() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': 'volverastep1'
    });
  }

  
  CHANGEcodigosupervisor(event){console.log('cgange',event.target.value)
  
   this.codigo_qr_acceso=event.target.value;
   
    }

  async verificarsupervisor(){
    const verificando = await this.loadingController.create({
      message: 'Verificando, espere...',spinner: 'bubbles',duration: 15000,
      });
      const fallo = await this.loadingController.create({
        message: 'Ingrese el codigo del supervisor!',spinner: 'bubbles',duration: 1200,
        });
        const informacionfalsa = await this.loadingController.create({
          message: 'Incorrecto porfavor verifique!',spinner: 'bubbles',duration: 1200,
          });
      verificando.present();
    var data = {
      codigo_qr_acceso:this.codigo_qr_acceso
      }
      this.json.empieza(data).subscribe((res: any ) =>{
        this.quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor=res[0];
        console.log('respuesta de Json quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor empieza:', this.quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor);


        if(this.quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor==undefined||this.quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor==null){
          verificando.dismiss();
          informacionfalsa.present();
        }
        if(this.quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor.id_rol=='4'){
          verificando.dismiss();
          console.log('paso el supervisor');
          this.step='3';

        }
        else{
          verificando.dismiss();
          fallo.present();
        }


    //   //consultar permisos de supervisor
    //     var dataconsultarpermisosidroldecarreteaotro = {
    //       nombre_solicitud: 'consultarpermisosidroldecarreteaotro',
    //       id_rol:this.quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor.id_rol,
      
    //     };
    //     this.json.variasfunciones(dataconsultarpermisosidroldecarreteaotro).subscribe(async (res: any ) =>{
    //       console.log('respuesta a la solicitud variasfunciones,  consultarpermisosidroldecarreteaotro', res);
    //       this.respuestaconsultarpermisosidroldecarreteaotro=res;
    //         //termina la consulta de supervisor
    // });



      });
  }

  async autorizar(){
    console.log('autorizando cambio de almacenaje');

    const exitoso = await this.loadingController.create({
      message: 'Cambio exitoso!.',spinner: 'bubbles',duration: 1500,
      });

      const yafuecambiado = await this.loadingController.create({
        message: 'Este registro ya ha sido cambiado de carrete a chipa anteriormente!.',spinner: 'bubbles',duration: 2500,
        });

    var dataautorizarcambiodecarrete = {
      nombre_solicitud:'autorizarcambiodecarrete',
      id_inutilizado:this.traidopormodalparams.id_inutilizado,
      nombre_cambio_almacenaje:this.globalpermisos.nombre,
      carreteorrollo: 'Chipa'
    }
  
    this.json.variasfunciones(dataautorizarcambiodecarrete).subscribe((res: any ) =>{
      console.log('res autorizarcambiodecarrete',res);
      if(res>0){
        exitoso.present();
        this.funciondismissyvolverastep1();
      }
      else if(res==0){
        yafuecambiado.present();
        this.funciondismissyvolverastep1();

      }

      });

  }


}
