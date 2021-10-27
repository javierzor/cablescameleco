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

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dataempieza: any;
  intentando_logear: any;
  quieroaccederporfavordigamelarespuestadelaconsulta:any;

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
    public menuCtrl: MenuController
         )
  
  {


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
   

   apretando_boton_login(){
    this.intentando_logear='si';
   }



   intentoLogin(){
     var data = {
      codigo_qr_acceso:this.dataempieza
     }
    this.json.empieza(data).subscribe((res: any ) =>{
      console.log('respuesta de Json empieza:', res);
      this.quieroaccederporfavordigamelarespuestadelaconsulta=res;
      if(res.length=='0'){
        console.log('El usuario no existe');
        }
      if (res.length>0){
        console.log('el usuario fue registrado previamente');
        this.router.navigate(['/home', this.quieroaccederporfavordigamelarespuestadelaconsulta['0']]);
      }

    });

      //se pretende iniciar ya sea con el QR o si esta disponible el input de codigo, con el input manual
   }

}
