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
    actualizando.present();
    console.log(this.segmentModel);
    console.log(event);
    if(this.segmentModel=='ordenesdefraccionamiento'){
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

      //consultar que va en esta seccion
      actualizando.dismiss();
      //consultar que va en esta seccion

    }



  }


}
