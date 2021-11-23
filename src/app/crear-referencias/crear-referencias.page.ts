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
import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-crear-referencias',
  templateUrl: './crear-referencias.page.html',
  styleUrls: ['./crear-referencias.page.scss'],
})
export class CrearReferenciasPage implements OnInit {
  permisosconsultadosencomponenteprincipalYService: any;
  puedenavegaraqui:any;
  seccionactiva: string;
  usuariologeado: any;
  step: any;

  //lector de excel

  //lector


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

}


ionViewDidEnter(){
  this.usuariologeado=this.globalpermisos.usuariologeado;
  if(this.usuariologeado==undefined||this.usuariologeado==null){
    this.seccionactiva='no';
  }
  this.globalpermisos.mispermisosglobalesenservice;
  console.log('en la vista lo que tengo',this.permisosconsultadosencomponenteprincipalYService);
  if(this.globalpermisos.mispermisosglobalesenservice){
  if(this.globalpermisos.mispermisosglobalesenservice['permisonumero10']=='si')
  {
    this.puedenavegaraqui='si';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
  else if(this.globalpermisos.mispermisosglobalesenservice['permisonumero10']!='si'){
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



}
