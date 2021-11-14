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
  respuestafraccionarordenfraccionamiento: any;
  nuevafecha: Date;
  user_nombre: any;
  user_id: any;
  ordencreadaporeloperario: any;
  constructor(
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

async faccionar(ordenafraccionar){
  this.nuevafecha = new Date ();
  let fecha_fraccionado =this.datepipe.transform(this.nuevafecha, 'yyyy-MM-dd');
  let hora_fraccionado =this.datepipe.transform(this.nuevafecha, 'hh:mm');

  this.user_nombre=this.globalpermisos.nombre;
  this.user_id=this.globalpermisos.id_usuario;

    var datafraccionarordenfraccionamiento = {
      nombre_solicitud:'fraccionarordenfraccionamiento',
      id_inutilizado:ordenafraccionar.id_inutilizado,
      operario_fraccionado:this.user_nombre,
      fecha_fraccionado:fecha_fraccionado,
      hora_fraccionado:hora_fraccionado
      }
      this.json.variasfunciones(datafraccionarordenfraccionamiento).subscribe(async (res: any ) =>{
        console.log('respuesta a la solicitud variasfunciones,  fraccionarordenfraccionamiento', res);
        this.respuestafraccionarordenfraccionamiento=res;
        if(this.respuestafraccionarordenfraccionamiento>0) {
          var dataobtenerfraccionamientodespuesdefraccionar = {
            nombre_solicitud:'obtenerfraccionamientodespuesdefraccionar',
            id_inutilizado:ordenafraccionar.id_inutilizado,
            }
            this.json.variasfunciones(dataobtenerfraccionamientodespuesdefraccionar).subscribe(async (res: any ) =>{
              this.ordencreadaporeloperario=res[0];

                //empieza el modal
                const modal = await this.modalController.create({
                  component: ModalfraccionamientoqrPage,
                  componentProps: {
                    cssClass: 'my-custom-class',
                    'dataparaelmodal': this.ordencreadaporeloperario,
                  }
                });
                
                modal.onDidDismiss().then((data) => {
                  this.actualizarlista();
                });
                console.log('enviando estos datos al modal qr',this.ordencreadaporeloperario);
                return await modal.present();
                //termina el modal


            });   //cierre reconsultar fraccionamiento que se guardo con un operario.

          }  //cierre condicional if

        }); //cierre envio fraccionamiento







}


}
