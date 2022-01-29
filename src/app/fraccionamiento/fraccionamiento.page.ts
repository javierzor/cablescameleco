import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { JsonService } from '../json.service';
import { Router } from '@angular/router';
import { Platform, NavController,LoadingController, AlertController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { GlobalpermisosService } from '../globalpermisos.service';
import { ModalfraccionamientoqrPage } from '../modalfraccionamientoqr/modalfraccionamientoqr.page';
import { ModalordenarfracciqrPage } from '../modalordenarfracciqr/modalordenarfracciqr.page';

@Component({
  selector: 'app-fraccionamiento',
  templateUrl: './fraccionamiento.page.html',
  styleUrls: ['./fraccionamiento.page.scss'],
})
export class FraccionamientoPage implements OnInit {
  permisosconsultadosencomponenteprincipalYService: any;
  puedenavegaraqui:any;
  seccionactiva: string;
  usuariologeado: any;
  respuestaobtenerordenesdefraccionamientopendientesynobloqueados: any;
  respuestatomarordenfraccionamiento: any;
  nuevafecha: Date;
  user_nombre: any;
  user_id: any;
  ordencreadaporeloperario: any;
  codigoingresadoporusuarioparaverificarqueseaelcarrete: string | number | string[];
  constructor(
    private alertController: AlertController,
    private location: Location,
    private router: Router,
    private json: JsonService,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public loading: LoadingController,
    private route: ActivatedRoute,
    public modalController: ModalController,
    public datepipe: DatePipe,
    public menuCtrl: MenuController,
    public myapp: AppComponent,
    public globalpermisos: GlobalpermisosService,
  )

{      
  var dataobtenerordenesdefraccionamientopendientesynobloqueados = {
    nombre_solicitud:'obtenerordenesdefraccionamientopendientesynobloqueados',
    }
    this.json.variasfunciones(dataobtenerordenesdefraccionamientopendientesynobloqueados).subscribe(async (res: any ) =>{
      console.log('respuesta a la solicitud variasfunciones,  obtenerordenesdefraccionamientopendientesynobloqueados', res);
      this.respuestaobtenerordenesdefraccionamientopendientesynobloqueados=res;

    });
}

async actualizarlista(){
  const actualizando = await this.loadingController.create({
    message: 'Actualizando...',spinner: 'bubbles',duration: 10000,
    });
    actualizando.present();
  var dataobtenerordenesdefraccionamientopendientesynobloqueados = {
    nombre_solicitud:'obtenerordenesdefraccionamientopendientesynobloqueados',
    }
    this.json.variasfunciones(dataobtenerordenesdefraccionamientopendientesynobloqueados).subscribe(async (res: any ) =>{
      console.log('respuesta a la solicitud variasfunciones,  obtenerordenesdefraccionamientopendientesynobloqueados', res);
      this.respuestaobtenerordenesdefraccionamientopendientesynobloqueados=res;
      if(res){
        actualizando.dismiss();
      }
      
    }); 
}


ionViewDidEnter(){
  this.usuariologeado=this.globalpermisos.usuariologeado;
  if(this.usuariologeado==undefined||this.usuariologeado==null){
    this.seccionactiva='no';
  }
  this.globalpermisos.mispermisosglobalesenservice;
  console.log('en la vista lo que tengo',this.permisosconsultadosencomponenteprincipalYService);
  if(this.globalpermisos.mispermisosglobalesenservice){
  if(this.globalpermisos.mispermisosglobalesenservice['permisonumero6']=='si')
  {
    this.puedenavegaraqui='si';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
  else if(this.globalpermisos.mispermisosglobalesenservice['permisonumero6']!='si'){
    this.puedenavegaraqui='no';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
}
}

reingresar(){
  this.router.navigate(['/login']);
  //vaciando variables usadas en esta vista
  this.seccionactiva='';
  this.puedenavegaraqui='';
}


 async ngOnInit() {
}

verificarsielcodigoescaneadoeselseleccionado(ordenafraccionar){

}


async ordenar(ordenafraccionar){

                //empieza el modal
                const modal = await this.modalController.create({
                  component: ModalordenarfracciqrPage,
                  componentProps: {
                    cssClass: 'my-custom-class',
                    'dataparaelmodal': ordenafraccionar,
                  }
                });
                
                modal.onDidDismiss().then((data) => {
                  console.log('data al cerrar DATA=',data);
                  if(data.data.dismissed==true){
                    console.log('solo cerro la ventana::..');
                  }
                  if(data.data.dismissed=='dismissporqueordeno'){
                    this.actualizarlista();
                  }
                });
                return await modal.present();
                //termina el modal

}



async presentAlertPrompt(ordenafraccionar) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Verifique La Información:',
    message: 'Orden Frac. Nro: '+ordenafraccionar.numero_fraccionado+'<br/> Factura:'+ordenafraccionar.numerodenotadeentrada+'  <br/> Nombre: <br\>'+ordenafraccionar.descripcion+'<br\>Observacion: '+ordenafraccionar.observacion,
    inputs: [


      {
        name: 'codigoingresadoenalerta',
        type: 'password',
        placeholder: 'Referecia a solicitar',
        cssClass: 'specialClass',
        attributes: {
          maxlength: 40,
          inputmode: 'decimal',
          value:this.codigoingresadoporusuarioparaverificarqueseaelcarrete
        },
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');

        },
      },
      {
        text: 'Verificar',
        handler: async (alertData) => {
          console.log('Confirm Ok');
          console.log(alertData.codigoingresadoenalerta);
          if(alertData.codigoingresadoenalerta==ordenafraccionar.documento){

            console.log('Confirmado el codigo es el mismo');

            const codigoscoinciden = await this.loadingController.create({
              message: 'Verificación exitosa, Fraccionando.',spinner: 'bubbles',duration: 1000,
              });
              codigoscoinciden.present();
              this.faccionar(ordenafraccionar);
          }
          else{
            const incorrecto = await this.loadingController.create({
              message: 'Carrete Incorrecto',spinner: 'bubbles',duration: 800,
              });
              this.presentAlertPrompt(ordenafraccionar);
              incorrecto.present();

          }

        },
      },
    ],
  });

  await alert.present();
}


async faccionar(ordenafraccionar){

                //empieza el modal
                const modal = await this.modalController.create({
                  component: ModalfraccionamientoqrPage,
                  componentProps: {
                    cssClass: 'my-custom-class',
                    'dataparaelmodal': ordenafraccionar,
                  }
                });
                modal.onDidDismiss().then((data) => {
                  console.log('data al cerrar DATA=',data);
                  if(data.data.dismissed==true){
                  console.log('solo cerro la ventana::..');
                  }
                  if(data.data.dismissed=='dismissporquefracciono'){
                    this.actualizarlista();
                  }
                });
                return await modal.present();
                //termina el modal

}


}
