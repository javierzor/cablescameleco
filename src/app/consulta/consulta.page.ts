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
import { ModalconsultaPage } from '../modalconsulta/modalconsulta.page';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
  permisosconsultadosencomponenteprincipalYService: any;
  puedenavegaraqui:any;
  seccionactiva: string;
  usuariologeado: any;
  referencia: any;
  codigo: any;
  nombre: any;
  sebuscaraporelcodigo: string;
  nombreinvisible: any;
  referenciainvisible: any;
  sebuscaraporelreferencia: string;
  sebuscaraporelnombre: string;
  respuestabusqueda: any;
  respuestabusquedaingresomaterialdeunproducto: any;
  temporal:  Array<any> = [];
  acumulandotodos:  Array<any> = [];
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
    this.codigo='';
    this.nombre='';
    this.referencia='';
   }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.usuariologeado=this.globalpermisos.usuariologeado;
    if(this.usuariologeado==undefined||this.usuariologeado==null){
      this.seccionactiva='no';
    }
    this.globalpermisos.mispermisosglobalesenservice;
    console.log('en la vista lo que tengo',this.permisosconsultadosencomponenteprincipalYService);
    if(this.globalpermisos.mispermisosglobalesenservice){
    if(this.globalpermisos.mispermisosglobalesenservice['permisonumero2']=='si')
    {
      this.puedenavegaraqui='si';
      console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
    }
    else if(this.globalpermisos.mispermisosglobalesenservice['permisonumero2']!='si'){
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


  
  async ONCHANGEreferencia(event){ console.log('OnChange valor',event.target.value);
    this.referencia=event.target.value;
    if(this.referencia){
      this.codigo='';
      this.nombre='';
    }

  }

  async  ONCHANGEcodigo(event){ console.log('OnChange valor',event.target.value);
    this.codigo=event.target.value;
    if(this.codigo){
      this.nombre='';
      this.referencia='';
    }

    }

    async ONCHANGEnombre(event){ console.log('OnChange valor',event.target.value);
    this.nombre=event.target.value;
    if(this.nombre){
      this.codigo='';
      this.referencia='';
    }
    }

    
    buscarporreferencia(){
      console.log('buscando por referencia');
      var dataconsultar = {
      nombre_solicitud:'buscarconsulta',
      referencia:this.referencia
      }
      this.json.variasfunciones(dataconsultar).subscribe((res: any ) =>{
        console.log('respuesta a la solicitud variasfunciones,  buscarconsulta', res);
        this.respuestabusqueda=res;
        } ) //cierrran las lecturas de res


    }
    buscarporcodigo(){
      console.log('buscando por codigo');
      var dataconsultar = {
        nombre_solicitud:'buscarconsulta',
        producto:this.codigo
        }
        this.json.variasfunciones(dataconsultar).subscribe((res: any ) =>{
          console.log('respuesta a la solicitud variasfunciones,  buscarconsulta', res);
          this.respuestabusqueda=res;
          } ) //cierrran las lecturas de res
      
    }
    buscarpornombre(){
      console.log('buscando por nombre');
      var dataconsultar = {
        nombre_solicitud:'buscarconsulta',
        descripcion:this.nombre
        }
        this.json.variasfunciones(dataconsultar).subscribe((res: any ) =>{
          console.log('respuesta a la solicitud variasfunciones,  buscarconsulta', res);
          this.respuestabusqueda=res;
          } ) //cierrran las lecturas de res
    }

    async consultaringresomaterial(producto){
      console.log('consultar productos de ', producto);

      var dataconsultaringresomaterial = {
        nombre_solicitud:'obteneringresomaterialdeunproducto',
        producto:producto.producto
        }
        this.json.variasfunciones(dataconsultaringresomaterial).subscribe(async (res: any ) =>{
          console.log('respuesta a la solicitud variasfunciones,  buscarconsulta', res);
          this.respuestabusquedaingresomaterialdeunproducto=res;


            const modal = await this.modalController.create({
              component: ModalconsultaPage,
              componentProps: {
                cssClass: 'my-custom-class',
                'dataparaelmodal': this.respuestabusquedaingresomaterialdeunproducto,
              }
            });
            console.log('enviando estos datos al modal qr',this.respuestabusquedaingresomaterialdeunproducto);
            return await modal.present();
          

          } ); //cierrran las lecturas de res
    
      }

      cerrar(){
        this.respuestabusqueda=undefined;
      }

  }
