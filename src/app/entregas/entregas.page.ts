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
import { ModalentregasPage } from '../modalentregas/modalentregas.page';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.page.html',
  styleUrls: ['./entregas.page.scss'],
})
export class EntregasPage implements OnInit {
  permisosconsultadosencomponenteprincipalYService: any;
  puedenavegaraqui:any;
  seccionactiva: string;
  usuariologeado: any;
  dataempieza: any;
  quieroaccederporfavordigamelarespuestadelaconsulta: any;
  escanearonview: string;
  carreteochipa: any;
  respuestaentregarcarreteochipaconsultarcodigo: any;
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
  

}


ionViewDidEnter(){
  this.usuariologeado=this.globalpermisos.usuariologeado;
  if(this.usuariologeado==undefined||this.usuariologeado==null){
    this.seccionactiva='no';
  }
  this.globalpermisos.mispermisosglobalesenservice;
  console.log('en la vista lo que tengo',this.permisosconsultadosencomponenteprincipalYService);
  if(this.globalpermisos.mispermisosglobalesenservice){
  if(this.globalpermisos.mispermisosglobalesenservice['permisonumero13']=='si')
  {
    this.puedenavegaraqui='si';
    console.log('this.puedenavegaraqui:',this.puedenavegaraqui);
  }
  else if(this.globalpermisos.mispermisosglobalesenservice['permisonumero13']!='si'){
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


ONCHANGEcodigo(event){
  this.dataempieza=event.target.value;
  }
  
  ONCHANGEcarreteochipa(event){
    this.carreteochipa=event.target.value;
    }
  
    async continuar(){
    const verifiqueconexion = await this.loadingController.create({
      message: 'Porfavor verifique su conexion..',spinner: 'bubbles',duration: 1400,
      });
    const espereporfavor = await this.loadingController.create({
      message: 'Verificando, espere porfavor...',spinner: 'bubbles',duration: 25000,
      });
      const exitoso = await this.loadingController.create({
      message: 'Verificaci??n exitosa accediendo.',spinner: 'bubbles',duration: 1200,
      });
      const error = await this.loadingController.create({
      message: 'Verifique su informaci??n porfavor...',spinner: 'bubbles',duration: 1700,
      });
    espereporfavor.present();
  
    var data = {
      codigo_qr_acceso:this.dataempieza
     }
     this.json.empieza(data).subscribe((res: any ) =>{
      console.log('respuesta de Json empieza:', res);
      this.quieroaccederporfavordigamelarespuestadelaconsulta=res;
      if(res.length=='0'){
        console.log('El usuario no existe');
        espereporfavor.dismiss();
        error.present();
        }
  
        if (res.length>0&&res[0].activo>0){
          console.log('el usuario fue registrado previamente');
          this.escanearonview='no';
          espereporfavor.dismiss();
          // exitoso.present();
          
        }
        else
        {
          espereporfavor.dismiss();
          verifiqueconexion.present();
        }
  
      });
  
    }
  
    async continuarcarrete(){

      const verifique = await this.loadingController.create({
        message: 'Porfavor verifique su QR o el codigo que ingreso',spinner: 'bubbles',duration: 1200,
        });

      var dataentregarcarreteochipaconsultarcodigo = {
        nombre_solicitud:'entregarcarreteochipaconsultarcodigo',
        numero_fraccionado:this.carreteochipa
      }
      this.json.variasfunciones(dataentregarcarreteochipaconsultarcodigo).subscribe(async (res: any ) =>{
        this.respuestaentregarcarreteochipaconsultarcodigo=res[0];
        if(res[0].numero_fraccionado>0){
          
                //empieza el modal
                const modal = await this.modalController.create({
                  component: ModalentregasPage,
                  componentProps: {
                    cssClass: 'my-custom-class',
                    'dataparaelmodal': this.respuestaentregarcarreteochipaconsultarcodigo,
                  },
                  id: 'primermodal'
                });
                
                modal.onDidDismiss().then((data) => {

                  console.log('data', data['data']);

                });
                console.log('enviando estos datos al modal qr',this.respuestaentregarcarreteochipaconsultarcodigo);
                return await modal.present();
                //termina el modal

        }

        else {
          verifique.present();
        }
      }
      
      );

    }



}
