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
import { ModalsolicitudfracionamientoPage } from '../modalsolicitudfracionamiento/modalsolicitudfracionamiento.page';

@Component({
  selector: 'app-solicitud-fraccionamiento',
  templateUrl: './solicitud-fraccionamiento.page.html',
  styleUrls: ['./solicitud-fraccionamiento.page.scss'],
})
export class SolicitudFraccionamientoPage implements OnInit {
  permisosconsultadosencomponenteprincipalYService: any;
  puedenavegaraqui:any;
  seccionactiva: string;
  usuariologeado: any;
  ingresodematerialnobloqueados: any;
  filterTerm: string;
  step: any;
  campo1: any;
  campo2: any;
  campo3: any;

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
    this.campo1='';
    this.campo2='';
    this.campo3='';
    this.step='1';  
    var dataconsultaringresosdematerialnobloqueados = {
      nombre_solicitud:'obteneringresomaterialnobloqueadosv2pegadoaproductos'
    };
    this.json.variasfunciones(dataconsultaringresosdematerialnobloqueados).subscribe((res: any ) =>{
      this.ingresodematerialnobloqueados=res;
      console.log('ingresos de material No bloqueados:',this.ingresodematerialnobloqueados);
    });
  
  }

  async CHANGEcampo1(event){
    this.campo1=event.target.value;
    this.campo2='';
    this.campo3='';
    this.filterTerm=event.target.value;
  }
  async CHANGEcampo2(event){
    this.campo2=event.target.value;;
    this.campo1='';
    this.campo3='';
    this.filterTerm=event.target.value;
  }
  async CHANGEcampo3(event){
    this.campo3=event.target.value;
    this.campo1='';
    this.campo2='';
    this.filterTerm=event.target.value;
  }
  
  buscar(){
    this.step='2';
  }
  
  volver(){
    this.step='1';
  }

  temporalvercariable(){
    console.log('event',this.filterTerm);
  }
  
  actualizarlista(){
    var dataconsultaringresosdematerialnobloqueados = {
      nombre_solicitud:'obteneringresomaterialnobloqueados'
    };
    this.json.variasfunciones(dataconsultaringresosdematerialnobloqueados).subscribe((res: any ) =>{
      this.ingresodematerialnobloqueados=res;
      console.log('ingresos de material No bloqueados:',this.ingresodematerialnobloqueados);
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
  if(this.globalpermisos.mispermisosglobalesenservice['permisonumero3']=='si')
  {
    this.puedenavegaraqui='si';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
  else if(this.globalpermisos.mispermisosglobalesenservice['permisonumero3']!='si'){
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

  async solicitar(producto){

  const modal = await this.modalController.create({
    component: ModalsolicitudfracionamientoPage,
    componentProps: {
      cssClass: 'my-custom-class',
      'dataparaelmodal': producto,
    }
  });

  modal.onDidDismiss().then((data) => {

    console.log('data', data['data']);
    console.log('data dismissed', data['data'].dismissed);
    if(data['data'].dismissed=='step1'){
      this.step='1';
      this.campo1='';
      this.campo2='';
      this.campo3='';
      this.filterTerm='';
    }

  });

  modal.onDidDismiss().then((data) => {
    this.actualizarlista();
});
  console.log('enviando estos datos al modal qr',producto);
  return await modal.present();


}

}