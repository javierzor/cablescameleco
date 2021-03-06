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
  selector: 'app-ingreso-material',
  templateUrl: './ingreso-material.page.html',
  styleUrls: ['./ingreso-material.page.scss'],
})
export class IngresoMaterialPage implements OnInit  {
  permisosconsultadosencomponenteprincipalYService: any;
  puedenavegaraqui:any;
  seccionactiva: string;
  usuariologeado: any;
  filterTerm: string;
  productosenvista: any;
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
    public modalCtrl: ModalController,
    public datepipe: DatePipe,
    public menuCtrl: MenuController,
    public myapp: AppComponent,
    public globalpermisos: GlobalpermisosService,
  )

{      

  this.step='1';  
  var obtenerproductos = {
    nombre_solicitud: 'obtenerproductos',
  };  
  this.json.variasfunciones(obtenerproductos).subscribe((res: any ) =>{
    console.log('respuesta a la solicitud variasfunciones,  obtenerproductos', res);
    this.productosenvista=res;
    } ) //cierrran las lecturas de res


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


ionViewDidEnter(){
  this.usuariologeado=this.globalpermisos.usuariologeado;
  if(this.usuariologeado==undefined||this.usuariologeado==null){
    this.seccionactiva='no';
  }
  this.globalpermisos.mispermisosglobalesenservice;
  console.log('en la vista lo que tengo',this.permisosconsultadosencomponenteprincipalYService);
  if(this.globalpermisos.mispermisosglobalesenservice){
  if(this.globalpermisos.mispermisosglobalesenservice['permisonumero1']=='si')
  {
    this.puedenavegaraqui='si';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
  else if(this.globalpermisos.mispermisosglobalesenservice['permisonumero1']!='si'){
    this.puedenavegaraqui='no';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
}
}

iradetalles(producto){
  console.log('iendo a detalles con:',producto);
  this.router.navigate(['/ingreso-material-detalles', producto]);
}

reingresar(){
  this.router.navigate(['/login']);
  //vaciando variables usadas en esta vista
  this.seccionactiva='';
  this.puedenavegaraqui='';
}


 async ngOnInit() {
}



}
