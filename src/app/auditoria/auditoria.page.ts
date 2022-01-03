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

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.page.html',
  styleUrls: ['./auditoria.page.scss'],
})
export class AuditoriaPage implements OnInit {
  permisosconsultadosencomponenteprincipalYService: any;
  puedenavegaraqui:any;
  seccionactiva: string;
  usuariologeado: any;
  segmentModel = "ordenesdefraccionamiento";
    segmentModel2 = "creados";

  respuestaauditoria1: any;
  respuestaauditoria2: any;
  respuestaauditoria3: any;
  filterTerm: string;
  step: any;
  campo1: any;
  campo2: any;
  campo3: any;
  campo4: any;
  campo5: any;
  campo6: any;
  campo7: any;
  campo8: any;
  auditoria4_numero_fraccionado: any;
  respuestaauditoria4: any;
  respuestaauditoriausuarioscreados: any;
  respuestaauditoriausuariosmodificados: any;
  respuestaauditoriausuariosdesactivadosactivados: any;
  respuestacambiodecarreteachipa: any;
  respuestaauditoriaingresomaterial: any;
  respuestaauditoriabloqueoingresomaterial: any;
  respuestaauditoriaentregas: any;
  respuestanovedadesenentrega: any;

  constructor(
    private location: Location,
    private router: Router,
    private json: JsonService,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public loading: LoadingController,
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
    public datepipe: DatePipe,
    public menuCtrl: MenuController,
    public myapp: AppComponent,
    public globalpermisos: GlobalpermisosService,
  )

{      
  this.campo1='';
  this.campo2='';
  this.campo3='';
  this.campo4='';
  this.campo5='';
  this.campo6='';
  this.campo7='';
  this.campo8='';
  this.step='1';
  this.auditoria1alentrar()

}

CHANGEcampo1(event){
  this.campo1=event.target.value;
  this.campo2='';
  this.campo3='';
  this.campo4='';
  this.campo5='';
  this.campo6='';
  this.campo7='';
  this.campo8='';
  this.filterTerm=event.target.value;
}
CHANGEcampo2(event){
  this.campo1='';
  this.campo2=event.target.value;
  this.campo3='';
  this.campo4='';
  this.campo5='';
  this.campo6='';
  this.campo7='';
  this.campo8='';
  this.filterTerm=event.target.value;
}
CHANGEcampo3(event){
  this.campo1='';
  this.campo2='';
  this.campo3=event.target.value;
  this.campo4='';
  this.campo5='';
  this.campo6='';
  this.campo7='';
  this.campo8='';
  this.filterTerm=event.target.value;
}
CHANGEcampo4(event){
  this.campo1='';
  this.campo2='';
  this.campo3='';
  this.campo4=event.target.value;
  this.campo5='';
  this.campo6='';
  this.campo7='';
  this.campo8='';
  this.filterTerm=event.target.value;
}
CHANGEcampo5(event){
  this.campo1='';
  this.campo2='';
  this.campo3='';
  this.campo4='';
  this.campo5=event.target.value;
  this.campo6='';
  this.campo7='';
  this.campo8='';
  this.filterTerm=event.target.value;
}
CHANGEcampo6(event){
  this.campo1='';
  this.campo2='';
  this.campo3='';
  this.campo4='';
  this.campo5='';
  this.campo6=event.target.value;
  this.campo7='';
  this.campo8='';
  this.filterTerm=event.target.value;
}
CHANGEcampo7(event){
  this.campo1='';
  this.campo2='';
  this.campo3='';
  this.campo4='';
  this.campo5='';
  this.campo6='';
  this.campo7=event.target.value;
  this.campo8='';
  this.filterTerm=event.target.value;
}
CHANGEcampo8(event){
  this.campo1='';
  this.campo2='';
  this.campo3='';
  this.campo4='';
  this.campo5='';
  this.campo6='';
  this.campo7='';
  this.campo8=event.target.value;
  this.filterTerm=event.target.value;
}

buscar(){
  this.step='2';
}

volver(){
  this.step='1';
}

  async auditoria1alentrar(){

  const actualizando = await this.loadingController.create({
    message: 'Actualizando...',spinner: 'bubbles',duration: 15000,
    });
    actualizando.present();
    var dataauditoria1 = {
      nombre_solicitud:'auditoria1',
      }
      this.json.variasfunciones(dataauditoria1).subscribe(async (res: any ) =>{
        console.log('respuesta a la solicitud variasfunciones,  auditoria1', res);
        this.respuestaauditoria1=res;
        actualizando.dismiss();
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
  if(this.globalpermisos.mispermisosglobalesenservice['permisonumero7']=='si')
  {
    this.puedenavegaraqui='si';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
  else if(this.globalpermisos.mispermisosglobalesenservice['permisonumero7']!='si'){
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


  async segmentChanged(event){

    this.campo1='';
    this.campo2='';
    this.campo3='';
    this.campo4='';
    this.campo5='';
    this.campo6='';
    this.campo7='';
    this.campo8='';
    this.step='1';
    const actualizando = await this.loadingController.create({
      message: 'Actualizando...',spinner: 'bubbles',duration: 15000,
      });

    console.log(this.segmentModel);
    console.log(event);
    if(this.segmentModel=='ordenesdefraccionamiento'){

          actualizando.present();
      this.step='1';
      var dataauditoria1 = {
        nombre_solicitud:'auditoria1',
        }
        this.json.variasfunciones(dataauditoria1).subscribe(async (res: any ) =>{
          console.log('respuesta a la solicitud variasfunciones,  auditoria1', res);
          this.respuestaauditoria1=res;
          actualizando.dismiss();
        });


    }

    if(this.segmentModel=='fraccionamientosrealizados'){

          actualizando.present();

      var dataauditoria2 = {
        nombre_solicitud:'auditoria2',
        }
        this.json.variasfunciones(dataauditoria2).subscribe(async (res: any ) =>{
          console.log('respuesta a la solicitud variasfunciones,  auditoria2', res);
          this.respuestaauditoria2=res;
          actualizando.dismiss();
        });
      
    }

    if(this.segmentModel=='fraccionamientossuspendidos'){

          actualizando.present();

      var dataauditoria3 = {
        nombre_solicitud:'auditoria3',
        }
        this.json.variasfunciones(dataauditoria3).subscribe(async (res: any ) =>{
          console.log('respuesta a la solicitud variasfunciones,  auditoria3', res);
          this.respuestaauditoria3=res;
          actualizando.dismiss();
        });
      
    }

    if(this.segmentModel=='fraccionamientosacarrete'){

          actualizando.present();

      //consultar que va en esta seccion

      actualizando.dismiss();
        
      

    }

    if(this.segmentModel=='cambiodecarreteachipa'){

      actualizando.present();

  var datacambiodecarreteachipa = {
    nombre_solicitud:'cambiodecarreteachipa',
    }
    this.json.variasfunciones(datacambiodecarreteachipa).subscribe(async (res: any ) =>{
      console.log('respuesta a la solicitud variasfunciones,  cambiodecarreteachipa', res);
      this.respuestacambiodecarreteachipa=res;
      actualizando.dismiss();
    });

  }

  if(this.segmentModel=='ingresodematerial'){

    actualizando.present();

var dataauditoriaingresomaterial = {
  nombre_solicitud:'auditoriaingresomaterial',
  }
  this.json.variasfunciones(dataauditoriaingresomaterial).subscribe(async (res: any ) =>{
    console.log('respuesta a la solicitud variasfunciones,  auditoriaingresomaterial', res);
    this.respuestaauditoriaingresomaterial=res;
    actualizando.dismiss();
  });

}

if(this.segmentModel=='bloqueoingresodematerial'){

  actualizando.present();
var dataauditoriabloqueoingresomaterial = {
nombre_solicitud:'auditoriabloqueoingresomaterial',
}
this.json.variasfunciones(dataauditoriabloqueoingresomaterial).subscribe(async (res: any ) =>{
  console.log('respuesta a la solicitud variasfunciones,  auditoriabloqueoingresomaterial', res);
  this.respuestaauditoriabloqueoingresomaterial=res;
  actualizando.dismiss();
});

}

if(this.segmentModel=='entregas'){

  actualizando.present();
var dataauditoriaentregas = {
nombre_solicitud:'auditoriaentregas',
}
this.json.variasfunciones(dataauditoriaentregas).subscribe(async (res: any ) =>{
  console.log('respuesta a la solicitud variasfunciones,  auditoriaentregas', res);
  this.respuestaauditoriaentregas=res;
  actualizando.dismiss();
});

}


if(this.segmentModel=='novedadesenentrega'){

  actualizando.present();
var datanovedadesenentrega = {
nombre_solicitud:'novedadesenentrega',
}
this.json.variasfunciones(datanovedadesenentrega).subscribe(async (res: any ) =>{
  console.log('respuesta a la solicitud variasfunciones,  novedadesenentrega', res);
  this.respuestanovedadesenentrega=res;
  actualizando.dismiss();
});

}







     if(this.segmentModel=='usuarios'){

           actualizando.present();

    
      var data = {
        nombre_solicitud:'auditoriausuarioscreados',
       
        }
        this.json.variasfunciones(data).subscribe(async (res: any ) =>{
          console.log('respuesta a la solicitud auditoriausuarioscreados', res);
          this.respuestaauditoriausuarioscreados=res;
           actualizando.dismiss();
      });
        

      

    }





  }


  CHANGEauditoria4_numero_fraccionado(event){ console.log('event',event.target.value);
    this.auditoria4_numero_fraccionado=event.target.value;
  }

  buscarauditoria4(){

    var dataauditoria4 = {
      nombre_solicitud:'auditoria4buscar',
      auditoria4_numero_fraccionado: this.auditoria4_numero_fraccionado
      
      }
      this.json.variasfunciones(dataauditoria4).subscribe(async (res: any ) =>{
        console.log('respuesta a la solicitud variasfunciones,  auditoria4 busqueda', res);
        this.respuestaauditoria4=res;
        if(res.length>0){

          this.step='2';
        }
      });
  }

  async segmentChanged2(event){
    this.campo1='';
    this.campo2='';
    this.campo3='';
    this.campo4='';
    this.campo5='';
    this.campo6='';
    this.campo7='';
    this.campo8='';
    this.step='1';
    const actualizando = await this.loadingController.create({
      message: 'Actualizando...',spinner: 'bubbles',duration: 15000,
      });
    actualizando.present();
    console.log(this.segmentModel);
    console.log(event);
      if(this.segmentModel2=='creados'){

        var data = {
          nombre_solicitud:'auditoriausuarioscreados',
         
          }
          this.json.variasfunciones(data).subscribe(async (res: any ) =>{
            console.log('respuesta a la solicitud auditoriausuarioscreados', res);
            this.respuestaauditoriausuarioscreados=res;
             actualizando.dismiss();
        });

      }

      if(this.segmentModel2=='modificados'){


        var data = {
          nombre_solicitud:'auditoriausuariosmodificados',
         
          }
          this.json.variasfunciones(data).subscribe(async (res: any ) =>{
            console.log('respuesta a la solicitud auditoriausuarioscreados', res);
            this.respuestaauditoriausuariosmodificados=res;
             actualizando.dismiss();
        });


      }

      if(this.segmentModel2=='desactivadosactivados'){

        
        var data = {
          nombre_solicitud:'auditoriausuariosdesactivadosactivados',
         
          }
          this.json.variasfunciones(data).subscribe(async (res: any ) =>{
            console.log('respuesta a la solicitud auditoriausuarioscreados', res);
            this.respuestaauditoriausuariosdesactivadosactivados=res;
             actualizando.dismiss();
        });
      }



 }


}
