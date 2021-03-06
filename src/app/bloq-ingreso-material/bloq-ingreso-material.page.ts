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
import { ModalbloqingresomaterialPage } from '../modalbloqingresomaterial/modalbloqingresomaterial.page';

@Component({
  selector: 'app-bloq-ingreso-material',
  templateUrl: './bloq-ingreso-material.page.html',
  styleUrls: ['./bloq-ingreso-material.page.scss'],
})
export class BloqIngresoMaterialPage implements OnInit {
  permisosconsultadosencomponenteprincipalYService: any;
  puedenavegaraqui:any;
  seccionactiva: string;
  usuariologeado: any;
  ingresodematerialnobloqueados: any;
  filterTerm: string;
  apretoelbotonbuscar: any;

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
  this.apretoelbotonbuscar='no';

  var dataconsultaringresosdematerialnobloqueados = {
    nombre_solicitud:'obteneringresomaterialnobloqueados'
  };
  this.json.variasfunciones(dataconsultaringresosdematerialnobloqueados).subscribe((res: any ) =>{
    this.ingresodematerialnobloqueados=res;
    console.log('ingresos de material No bloqueados:',this.ingresodematerialnobloqueados);
  });

}

CHANGEterminosdefiltro(event){
  this.filterTerm=event.target.value

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
  if(this.globalpermisos.mispermisosglobalesenservice['permisonumero5']=='si')
  {
    this.puedenavegaraqui='si';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
  else if(this.globalpermisos.mispermisosglobalesenservice['permisonumero5']!='si'){
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

CLICKapretoelbotonbuscar(){
  this.apretoelbotonbuscar='si';
}

CLICKapretoelbotonvolver(){
  this.filterTerm='';
  this.apretoelbotonbuscar='no';

}



async bloquear(producto){
  console.log('consultar productos de ', producto);

        const modal = await this.modalController.create({
          component: ModalbloqingresomaterialPage,
          componentProps: {
            cssClass: 'my-custom-class',
            'dataparaelmodal': producto,
          }
        });

        modal.onDidDismiss().then((data) => {
          this.actualizarlista();
      });
        console.log('enviando estos datos al modal qr',producto);
        return await modal.present();
      
                

  }



}
