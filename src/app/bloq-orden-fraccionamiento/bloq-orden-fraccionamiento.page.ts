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
import { ModalbloqordenfracionamientoPage } from '../modalbloqordenfracionamiento/modalbloqordenfracionamiento.page';

@Component({
  selector: 'app-bloq-orden-fraccionamiento',
  templateUrl: './bloq-orden-fraccionamiento.page.html',
  styleUrls: ['./bloq-orden-fraccionamiento.page.scss'],
})
export class BloqOrdenFraccionamientoPage implements OnInit {
  permisosconsultadosencomponenteprincipalYService: any;
  puedenavegaraqui:any;
  seccionactiva: string;
  usuariologeado: any;
  respuestaobtenerordenesdefraccionamientopendientesynobloqueados: any;
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
  
  var dataobtenerordenesdefraccionamientopendientesofraccionados = {
    nombre_solicitud:'obtenerordenesdefraccionamientopendientesofraccionados',
    }
    this.json.variasfunciones(dataobtenerordenesdefraccionamientopendientesofraccionados).subscribe(async (res: any ) =>{
      console.log('respuesta a la solicitud variasfunciones,  obtenerordenesdefraccionamientopendientesofraccionados', res);
      this.respuestaobtenerordenesdefraccionamientopendientesynobloqueados=res;

    });


}

  async actualizarlista(){
  const actualizando = await this.loadingController.create({
    message: 'Actualizando...',spinner: 'bubbles',duration: 10000,
    });
    actualizando.present();
  var dataobtenerordenesdefraccionamientopendientesofraccionados = {
    nombre_solicitud:'obtenerordenesdefraccionamientopendientesofraccionados',
    }
    this.json.variasfunciones(dataobtenerordenesdefraccionamientopendientesofraccionados).subscribe(async (res: any ) =>{
      console.log('respuesta a la solicitud variasfunciones,  obtenerordenesdefraccionamientopendientesofraccionados', res);
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
  if(this.globalpermisos.mispermisosglobalesenservice['permisonumero4']=='si')
  {
    this.puedenavegaraqui='si';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
  else if(this.globalpermisos.mispermisosglobalesenservice['permisonumero4']!='si'){
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

  async bloquear(ordenabloquear){
  console.log('se bloqueara esta orden',ordenabloquear);
          const modal = await this.modalController.create({
          component: ModalbloqordenfracionamientoPage,
          componentProps: {
            cssClass: 'my-custom-class',
            'dataparaelmodal': ordenabloquear,
          }
        });

        modal.onDidDismiss().then((data) => {
          this.actualizarlista();
      });
        console.log('enviando estos datos al modal qr',ordenabloquear);
        return await modal.present();
}



}4