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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dataempieza: any;
  intentando_logear: any;
  quieroaccederporfavordigamelarespuestadelaconsulta:any;
  static variableglobalintentodelogin: any;
  bodega: any;

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
    public globalpermisos: GlobalpermisosService
         )
  
  {

  //   this.json.prueba().subscribe((res: any ) =>{
  //     console.log('res prueba:', res);
  //  });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

   preparardataparaintentodeLogin(event){
     this.dataempieza=event.target.value;
     console.log('informacion tipeada=',this.dataempieza);
     }

    ONCHANGEbodega(event){
    this.bodega=event.target.value;
    console.log('informacion tipeada=',this.bodega);
    }
   

   apretando_boton_login(){
    this.intentando_logear='si';
   }


   async verificarsillenoloscampos(){
     if(this.bodega!=null&&this.bodega!=undefined&&this.bodega!=''){
       this.intentoLogin();
     }
     else{
      const camposobligatorios = await this.loadingController.create({
        message: 'Ingrese la bodega para continuar.',spinner: 'bubbles',duration: 1100,
        });
        camposobligatorios.present();
     }
    }

   async intentoLogin(){
    const bodeganoexiste = await this.loadingController.create({
      message: 'La bodega ingresada no existe',spinner: 'bubbles',duration: 1000,
      });
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
      id_inutilizado:this.bodega,
      codigo_qr_acceso:this.dataempieza
     }
    this.json.empiezalogin(data).subscribe((res: any ) =>{
      console.log('respuesta de Json empieza:', res);
      this.quieroaccederporfavordigamelarespuestadelaconsulta=res;
      if(res.length=='0'){
        console.log('El usuario no existe');
        espereporfavor.dismiss();
        error.present();
        }
      if (res.length>0&&res[0].activo>0){
        LoginPage.variableglobalintentodelogin=this.dataempieza;
        this.globalpermisos.usuariologeado=this.dataempieza;
        this.globalpermisos.id_usuario=this.quieroaccederporfavordigamelarespuestadelaconsulta['0'].id;
        this.globalpermisos.nombre=this.quieroaccederporfavordigamelarespuestadelaconsulta['0'].nombre;
        this.globalpermisos.bodega=this.quieroaccederporfavordigamelarespuestadelaconsulta['0'].nombre_bodega;
        console.log('el usuario fue registrado previamente');
        this.router.navigate(['/home', this.quieroaccederporfavordigamelarespuestadelaconsulta['0']]);
        this.myapp.distribuirlotraidodellogin();
        espereporfavor.dismiss();
        // exitoso.present();
        
      }
      
      else
      {
        if(res[0]=='bodeganoexiste'){
           espereporfavor.dismiss();
           bodeganoexiste.present();
         }
         else{
            espereporfavor.dismiss();
            verifiqueconexion.present();
         }

      }

    });

      //se pretende iniciar ya sea con el QR o si esta disponible el input de codigo, con el input manual
   }

}
