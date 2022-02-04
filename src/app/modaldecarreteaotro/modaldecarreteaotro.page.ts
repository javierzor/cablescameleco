import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { JsonService } from '../json.service';
import { GlobalpermisosService } from '../globalpermisos.service';
import { Platform, NavController,LoadingController, AlertController } from '@ionic/angular';
import { DatePipe } from '@angular/common'
import { Printer, PrintOptions } from '@awesome-cordova-plugins/printer/ngx';

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
  fecha_cambio_almacenaje: Date;
  fecha_autogenerada: Date;
  bodega: any;
  nombre_user: any;
  id_user: any;
  respuestastock: any;
  respuestadecambioparamostrarenlaimpresionconqr: any;

  constructor(
    private alertController: AlertController,
    private printer: Printer,
    public datepipe: DatePipe,
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
      this.json.empieza(data).subscribe(async (res: any ) =>{
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
  devuelveastep1(){
    this.step='1';
  }

  imprimir(){
    this.printer.print();

  }

  async autorizar(){
    console.log('autorizando cambio de almacenaje');

    const exitoso = await this.loadingController.create({
      message: 'Cambio exitoso!.',spinner: 'bubbles',duration: 1500,
      });

      const yafuecambiado = await this.loadingController.create({
        message: 'Este registro ya ha sido cambiado de carrete a chipa anteriormente!.',spinner: 'bubbles',duration: 2500,
        });

        var databloquearingresodematerial = {
          nombre_solicitud:'bloquearingresodematerial',
          id:this.traidopormodalparams.id,
          observacion:'Cambio a Chipa'
        }
        this.json.variasfunciones(databloquearingresodematerial).subscribe(async (res: any ) =>{
          console.log('res de bloquearingresodematerial',res);
          if(res>0){
            exitoso.present;
            var data = {
              nombre_solicitud:'consultarstockpornumerofraccionado',
              id_ingresado_por_el_usuario:this.traidopormodalparams.id,
              referencia:this.traidopormodalparams.referencia
              }
          this.json.variasfunciones(data).subscribe( async (res: any ) =>{
            console.log('consultarstockpornumerofraccionado',res);
            this.respuestastock=res;

            this.fecha_autogenerada = new Date ();
            let fecha_autogenerada_arreglada =this.datepipe.transform(this.fecha_autogenerada, 'yyyy-MM-dd');
           this.nombre_user=this.globalpermisos.nombre;
           this.id_user=this.globalpermisos.id_usuario;
           this.bodega=this.globalpermisos.bodega;

            var dataupdatearelingresodematerialenelmodalporcambiodealmacenamiento = {
              nombre_solicitud:'updatearelingresodematerialenelmodalporcambiodealmacenamiento',
              bodega:this.traidopormodalparams.bodega,
              referencia:this.traidopormodalparams.referencia,
              producto:this.traidopormodalparams.producto,
              descripcion:this.traidopormodalparams.descripcion,
              carreteorrollo:'Chipa',
              numerodenotadeentrada:this.traidopormodalparams.numerodenotadeentrada,
              metrosencarrete:this.respuestastock,
              fecha_autogenerada:this.traidopormodalparams.fecha_autogenerada,
              nombre_user:this.traidopormodalparams.nombre_user,
              id_user:this.id_user,
              nombre_cambio_almacenaje:this.nombre_user,
              fecha_cambio_almacenaje:fecha_autogenerada_arreglada
            }

            this.json.variasfunciones(dataupdatearelingresodematerialenelmodalporcambiodealmacenamiento).subscribe(async (res: any ) =>{
              console.log('res updatearelingresodematerialenelmodalporcambiodealmacenamiento', res);
              this.respuestadecambioparamostrarenlaimpresionconqr=res;
              if(this.respuestadecambioparamostrarenlaimpresionconqr.id>0&&this.respuestadecambioparamostrarenlaimpresionconqr.id<1){
                this.respuestadecambioparamostrarenlaimpresionconqr.idpop='0000000'+this.respuestadecambioparamostrarenlaimpresionconqr.id
              }
              else if(this.respuestadecambioparamostrarenlaimpresionconqr.id>10&&this.respuestadecambioparamostrarenlaimpresionconqr.id<100){
                this.respuestadecambioparamostrarenlaimpresionconqr.idpop='000000'+this.respuestadecambioparamostrarenlaimpresionconqr.id
          
              }
              else if(this.respuestadecambioparamostrarenlaimpresionconqr.id>100&&this.respuestadecambioparamostrarenlaimpresionconqr.id<1000){
                this.respuestadecambioparamostrarenlaimpresionconqr.idpop='00000'+this.respuestadecambioparamostrarenlaimpresionconqr.id
          
              }
              else if(this.respuestadecambioparamostrarenlaimpresionconqr.id>1000&&this.respuestadecambioparamostrarenlaimpresionconqr.id<10000){
                this.respuestadecambioparamostrarenlaimpresionconqr.idpop='0000'+this.respuestadecambioparamostrarenlaimpresionconqr.id
          
              }
              else if(this.respuestadecambioparamostrarenlaimpresionconqr.id>10000&&this.respuestadecambioparamostrarenlaimpresionconqr.id<100000){
                this.respuestadecambioparamostrarenlaimpresionconqr.idpop='000'+this.respuestadecambioparamostrarenlaimpresionconqr.id
          
              }
              

              if(res.id>0){
                this.step='4';
                
              }
            });


            
          });
          
          
          
        }

        else{
          yafuecambiado.present;
          console.log('ya fue cambiado');
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Verifique:',
            subHeader: 'Error',
            message: 'Cambiado previamente!',
            buttons: ['OK']
          });
          await alert.present();

        }
      });
    }
        
  


}
